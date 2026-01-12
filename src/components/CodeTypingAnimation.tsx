import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeSnippet {
  language: string;
  fileName: string;
  code: string;
  color: string;
}

const snippets: CodeSnippet[] = [
  {
    language: 'React',
    fileName: 'useAuth.tsx',
    color: '#61dafb',
    code: `const useAuth = () => {
  const [user, setUser] = useState(null);
  
  const login = async (credentials) => {
    const res = await api.post('/auth', credentials);
    setUser(res.data.user);
    return res.data;
  };

  const logout = () => setUser(null);
  
  return { user, login, logout };
};`,
  },
  {
    language: 'NestJS',
    fileName: 'compat.service.ts',
    color: '#e0234e',
    code: `@Injectable()
export class CompatService {
  checkCompatibility(parts: Part[]) {
    const facts = this.buildFacts(parts);
    const rules = this.getRulePairs(facts);
    
    return rules.reduce((score, rule) => 
      score + rule.evaluate(facts), 100
    );
  }
}`,
  },
  {
    language: 'Express',
    fileName: 'routes/api.js',
    color: '#68a063',
    code: `router.post('/execute', async (req, res) => {
  const { code, language } = req.body;
  
  const runner = getRunner(language);
  const result = await runner.execute(code, {
    timeout: 5000,
    captureConsole: true
  });
  
  res.json({ output: result });
});`,
  },
  {
    language: 'TypeScript',
    fileName: 'types/build.ts',
    color: '#3178c6',
    code: `interface BuildPart {
  id: string;
  category: PartCategory;
  platform: 'AR-15' | 'AR-10' | 'AR-9';
  specs: {
    boltFace?: BoltFace;
    gasSystem?: GasLength;
    caliber: string;
  };
}`,
  },
  {
    language: 'MongoDB',
    fileName: 'aggregation.js',
    color: '#00ed64',
    code: `db.products.aggregate([
  { $match: { platform: "AR-15" } },
  { $lookup: {
      from: "vendors",
      localField: "vendorId",
      foreignField: "_id",
      as: "vendor"
  }},
  { $sort: { price: 1 } }
]);`,
  },
  {
    language: 'Python',
    fileName: 'grader.py',
    color: '#ffd43b',
    code: `def grade_submission(code, tests):
    results = []
    for test in tests:
        try:
            output = execute_safe(code, test.input)
            passed = deep_equal(output, test.expected)
            results.append({"passed": passed})
        except TimeoutError:
            results.append({"error": "timeout"})
    return results`,
  },
];

// Calculate the max number of lines across all snippets for fixed height
const maxLines = Math.max(...snippets.map(s => s.code.split('\n').length));

// Simple tokenizer for syntax highlighting
const tokenize = (code: string): { type: string; value: string }[] => {
  const tokens: { type: string; value: string }[] = [];
  const keywords = new Set([
    'const', 'let', 'var', 'function', 'async', 'await', 'return', 'import', 
    'export', 'from', 'interface', 'type', 'class', 'extends', 'implements', 
    'new', 'try', 'catch', 'throw', 'if', 'else', 'for', 'while', 'def', 
    'as', 'router', 'db', 'except'
  ]);
  
  let i = 0;
  while (i < code.length) {
    // Decorators
    if (code[i] === '@') {
      let value = '@';
      i++;
      while (i < code.length && /\w/.test(code[i])) {
        value += code[i];
        i++;
      }
      tokens.push({ type: 'decorator', value });
      continue;
    }
    
    // Strings (double quotes)
    if (code[i] === '"') {
      let value = '"';
      i++;
      while (i < code.length && code[i] !== '"') {
        value += code[i];
        i++;
      }
      if (i < code.length) {
        value += '"';
        i++;
      }
      tokens.push({ type: 'string', value });
      continue;
    }
    
    // Strings (single quotes)
    if (code[i] === "'") {
      let value = "'";
      i++;
      while (i < code.length && code[i] !== "'") {
        value += code[i];
        i++;
      }
      if (i < code.length) {
        value += "'";
        i++;
      }
      tokens.push({ type: 'string', value });
      continue;
    }
    
    // Strings (backticks)
    if (code[i] === '`') {
      let value = '`';
      i++;
      while (i < code.length && code[i] !== '`') {
        value += code[i];
        i++;
      }
      if (i < code.length) {
        value += '`';
        i++;
      }
      tokens.push({ type: 'string', value });
      continue;
    }
    
    // Comments
    if (code[i] === '/' && code[i + 1] === '/') {
      let value = '';
      while (i < code.length && code[i] !== '\n') {
        value += code[i];
        i++;
      }
      tokens.push({ type: 'comment', value });
      continue;
    }
    
    // Python comments
    if (code[i] === '#') {
      let value = '';
      while (i < code.length && code[i] !== '\n') {
        value += code[i];
        i++;
      }
      tokens.push({ type: 'comment', value });
      continue;
    }
    
    // Numbers
    if (/\d/.test(code[i])) {
      let value = '';
      while (i < code.length && /[\d.]/.test(code[i])) {
        value += code[i];
        i++;
      }
      tokens.push({ type: 'number', value });
      continue;
    }
    
    // Words (identifiers, keywords)
    if (/[a-zA-Z_$]/.test(code[i])) {
      let value = '';
      while (i < code.length && /[\w$]/.test(code[i])) {
        value += code[i];
        i++;
      }
      
      if (keywords.has(value)) {
        tokens.push({ type: 'keyword', value });
      } else if (value[0] === value[0].toUpperCase() && /[a-z]/.test(value)) {
        // PascalCase = type/class
        tokens.push({ type: 'type', value });
      } else {
        tokens.push({ type: 'identifier', value });
      }
      continue;
    }
    
    // Arrow
    if (code[i] === '=' && code[i + 1] === '>') {
      tokens.push({ type: 'keyword', value: '=>' });
      i += 2;
      continue;
    }
    
    // Dollar sign for MongoDB
    if (code[i] === '$') {
      let value = '$';
      i++;
      while (i < code.length && /\w/.test(code[i])) {
        value += code[i];
        i++;
      }
      tokens.push({ type: 'keyword', value });
      continue;
    }
    
    // Other characters
    tokens.push({ type: 'plain', value: code[i] });
    i++;
  }
  
  return tokens;
};

const getTokenColor = (type: string): string => {
  switch (type) {
    case 'keyword': return 'text-purple-400';
    case 'string': return 'text-green-400';
    case 'number': return 'text-orange-400';
    case 'comment': return 'text-gray-500';
    case 'decorator': return 'text-yellow-400';
    case 'type': return 'text-cyan-400';
    default: return 'text-gray-300';
  }
};

const CodeTypingAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const currentSnippet = snippets[currentIndex];

  useEffect(() => {
    if (isTyping) {
      const code = currentSnippet.code;
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= code.length) {
          setDisplayedCode(code.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % snippets.length);
            setDisplayedCode('');
            setIsTyping(true);
          }, 3000);
        }
      }, 60);

      return () => clearInterval(typeInterval);
    }
  }, [currentIndex, isTyping, currentSnippet.code]);

  // Render highlighted code using tokenizer
  const renderHighlightedCode = (code: string) => {
    const tokens = tokenize(code);
    return tokens.map((token, i) => (
      <span key={i} className={getTokenColor(token.type)}>
        {token.value}
      </span>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-8 w-full max-w-xl"
    >
      {/* Editor window */}
      <div className="bg-surface rounded-lg border border-border overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-background border-b border-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSnippet.fileName}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center gap-2 text-sm"
            >
              <span className="text-gray-400">{currentSnippet.fileName}</span>
              <span
                className="px-2 py-0.5 rounded text-xs font-medium"
                style={{ backgroundColor: `${currentSnippet.color}20`, color: currentSnippet.color }}
              >
                {currentSnippet.language}
              </span>
            </motion.div>
          </AnimatePresence>
          <div className="w-16" />
        </div>

        {/* Code area - fixed height based on max lines */}
        <div className="p-4 font-mono text-sm overflow-hidden" style={{ height: `${maxLines * 1.5 + 2}rem` }}>
          <div className="flex h-full">
            {/* Line numbers - always show max lines for consistent width */}
            <div className="pr-4 text-gray-600 select-none text-right" style={{ minWidth: '2rem' }}>
              {Array.from({ length: maxLines }, (_, i) => (
                <div key={i} className={i < displayedCode.split('\n').length ? '' : 'invisible'}>
                  {i + 1}
                </div>
              ))}
            </div>
            {/* Code content */}
            <pre className="flex-1 overflow-hidden whitespace-pre-wrap">
              <code>
                {renderHighlightedCode(displayedCode)}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-accent ml-0.5 align-middle"
                />
              </code>
            </pre>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-background border-t border-border text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>UTF-8</span>
            <span>LF</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: currentSnippet.color }}>{currentSnippet.language}</span>
            <span>•</span>
            <span>Ln {displayedCode.split('\n').length}, Col {(displayedCode.split('\n').pop()?.length || 0) + 1}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeTypingAnimation;
export interface FeatureDeepDive {
    title: string;
    problem: string;
    solution: string;
    technicalDetails: string[];
    businessImpact: string[];
    codeExample?: {
        language: string;
        code: string;
        caption?: string;
    };
}

export interface ProjectDetail {
    id: string;
    title: string;
    role: string;
    timeline: string;
    tagline: string;
    overview: string;
    challenges: string[];
    highlights: {
        label: string;
        value: string;
    }[];
    features: FeatureDeepDive[];
    techStack: {
        category: string;
        items: string[];
    }[];
    outcomes: string[];
    color: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
    gunkustom: {
        id: 'gunkustom',
        title: 'GunKustom',
        role: 'Acting CTO / Senior Full Stack Engineer',
        timeline: 'Sep 2024 - Present',
        tagline: 'Production-grade firearms e-commerce platform with 31 interconnected systems',
        overview: `Built a complete e-commerce platform for AR-15/AR-10/AR-9 parts from the ground up. 
    Not just CRUD operations — this includes a sophisticated compatibility engine encoding mechanical 
    engineering constraints, enterprise-grade authentication, content moderation, real-time 
    price tracking, and a full social platform with community builds and forums.
    
    At MVP launch (Jan 2026), I owned 78.5% of the entire production codebase — 153,075 lines across 
    backend, frontend, and scraper systems. The backend alone was 49,355 lines written in 3 months 
    while simultaneously working full-time at Simply Coding.`,
        challenges: [
            'No existing codebase — built from scratch with no technical co-founder',
            'Complex domain: firearms compatibility involves mechanical engineering constraints',
            'Enterprise requirements on startup timeline and budget',
            'Needed social features, e-commerce, and content moderation all integrated',
        ],
        highlights: [
            { label: 'Code at MVP Launch', value: '78.5%' },
            { label: 'Backend in 3 Months', value: '49K lines' },
            { label: 'Systems Architected', value: '31' },
            { label: 'Time to Replicate', value: '6-12 mo' },
        ],
        features: [
            {
                title: 'AR Compatibility Engine',
                problem: `AR-15/AR-10/AR-9 platforms have complex mechanical interdependencies. A wrong bolt face 
        with a barrel means the gun won't cycle. Wrong buffer weight means reliability issues. Customers 
        were buying incompatible parts, leading to expensive returns and frustrated users.`,
                solution: `Built a rules engine that encodes mechanical engineering constraints into 
        executable validation logic. The system evaluates parts across multiple platforms, checking 
        compatibility factors like bolt face, gas systems, buffers, and threading patterns.`,
                technicalDetails: [
                    'Custom rules engine architecture for complex part interdependencies',
                    'Weighted scoring system for different severity levels',
                    'User-friendly message generation explaining compatibility issues',
                    'Handles edge cases and data normalization from multiple vendors',
                ],
                businessImpact: [
                    'Prevents expensive returns from incompatible purchases',
                    'Core intellectual property — significant time investment to replicate',
                    'Builds customer trust through accurate recommendations',
                    'No firearms retailer has comparable functionality',
                ],
            },
            {
                title: 'Pistol Compatibility Framework',
                problem: `After building the AR engine, I needed to add pistol support (Glock, Sig P320, 1911, etc.). 
        The initial instinct was to extend the rules engine, but that would've been over-engineering.`,
                solution: `Recognized that pistol compatibility is a fundamentally different problem class. ARs have 
        complex interdependencies requiring a rules engine. Pistols have isolated attributes — a Glock Gen 5 
        slide fits Gen 5 frames, period. Built a data-driven schema with platform-specific fields instead.`,
                technicalDetails: [
                    'Universal schema with optional platform-specific fields',
                    'Simple set intersection queries vs complex rule evaluation',
                    'Extensible architecture — adding new platforms requires no code changes',
                    'Right tool for the job: different problems, different solutions',
                ],
                businessImpact: [
                    'Scaled to 14+ pistol platforms with minimal code',
                    'Demonstrated pattern recognition and architectural maturity',
                    'Faster time-to-market for new platform support',
                ],
            },
            {
                title: 'Heat Algorithm (Forum Ranking)',
                problem: `The forum needed a way to surface active discussions while letting old threads fade. 
        New posts should get visibility, but engagement should boost rankings.`,
                solution: `Independently invented a Reddit-style heat algorithm through first-principles reasoning. 
        Posts start with base points, gain heat from replies and likes, and decay over time. Discovered 
        later this is nearly identical to Reddit's approach — arrived at the same solution without knowing theirs.`,
                technicalDetails: [
                    'Activity-based scoring with engagement multipliers',
                    'Time decay with grace periods for new content',
                    'User trust levels influence initial scoring',
                    'Self-maintaining system requiring no manual curation',
                ],
                businessImpact: [
                    'Keeps active discussions visible automatically',
                    'Rewards quality content and diverse engagement',
                    'Zero admin intervention needed for ranking',
                ],
            },
            {
                title: 'Enterprise Authentication System',
                problem: `Needed production-grade auth for an e-commerce platform: MFA, account security, 
        admin roles — without paying for Auth0 ($50-100K/year at scale).`,
                solution: `Built complete enterprise auth from scratch: TOTP/authenticator app support with 
        encrypted secret storage, progressive lockout, trusted devices, timing-attack 
        mitigation, and role-based access control.`,
                technicalDetails: [
                    'TOTP with encrypted secrets at rest',
                    'Backup codes with secure hashing',
                    'Progressive lockout with increasing penalties',
                    'Trusted device management with secure token handling',
                    'Timing-safe comparisons to prevent enumeration attacks',
                ],
                businessImpact: [
                    'Enterprise-grade security at zero licensing cost',
                    'Required for privileged roles (admin, editor, owner)',
                    'Audit logging for compliance and security incidents',
                ],
            },
            {
                title: 'Content Moderation System',
                problem: `User-generated content (community builds, forum posts, comments) needs moderation 
        at scale. Can't manually review everything, but can't let harmful content through.`,
                solution: `Built defense-in-depth moderation with multiple tiers: user trust system, 
        image deduplication, text filtering, AI safety checking, and human review queue 
        with team notifications.`,
                technicalDetails: [
                    'User trust levels with progressive privileges',
                    'Image hashing to prevent re-upload of blocked content',
                    'Text moderation with pattern detection',
                    'AI integration for image safety checking',
                    'Human review queue with notification integration',
                ],
                businessImpact: [
                    'Scales without large moderation team',
                    'Significant cost savings vs manual moderation',
                    'Protects brand from harmful content',
                    'Rewards good community members with trust',
                ],
            },
            {
                title: 'Price Tracking & Alerts',
                problem: `Firearms parts prices fluctuate across vendors. Customers want to know when 
        to buy, but no firearms retailer offers price tracking.`,
                solution: `Built comprehensive price tracking: historical data, all-time low/high tracking, 
        user-set price alerts, and back-in-stock notifications. Automated jobs track prices 
        and trigger notifications across multiple channels.`,
                technicalDetails: [
                    'Daily price aggregation across vendors',
                    'Rolling history for price trend visualization',
                    'User alerts with customizable thresholds',
                    'Stock monitoring with availability detection',
                    'Multi-channel notifications (email + real-time)',
                ],
                businessImpact: [
                    'Unique feature in firearms industry',
                    'Drives purchases through timely alerts',
                    'Improved conversion from accurate availability data',
                ],
            },
        ],
        techStack: [
            { category: 'Backend', items: ['TypeScript', 'NestJS', 'Node.js', 'Express'] },
            { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
            { category: 'Database', items: ['MongoDB', 'Mongoose', 'Optimized Indexing'] },
            { category: 'Infrastructure', items: ['AWS', 'Docker', 'Cloudflare', 'Render'] },
            { category: 'Security', items: ['JWT', 'TOTP', 'Encryption', 'RBAC'] },
            { category: 'Monitoring', items: ['Datadog APM', 'Custom Integrations'] },
        ],
        outcomes: [
            'MVP launched January 2026 with complete feature set',
            'Platform handles hundreds of products with real-time compatibility checking',
            'Enterprise-grade security without enterprise licensing costs',
            'Social features drive engagement and user-generated content',
            'Price tracking creates competitive moat',
        ],
        color: '#2c5530',
    },

    'simply-coding': {
        id: 'simply-coding',
        title: 'Simply Coding',
        role: 'Instructor / Full Stack Developer',
        timeline: 'Nov 2024 - Present',
        tagline: 'Cloud IDE and LMS for correctional facilities where traditional tools cannot function',
        overview: `Built a complete learning management system for environments where traditional cloud-based 
    tools are impossible: maximum security prisons with restricted internet access, no terminal/console 
    access, firewall restrictions, and air-gapped networks.
    
    This isn't a simplified tool — students learn modern React, Express, and TypeScript. The platform 
    includes a browser-based IDE with server-side code execution, semantic code validation, and a 
    complete LMS with progress tracking and auto-grading.`,
        challenges: [
            'No CDN access (jsdelivr, unpkg blocked by prison firewalls)',
            'No terminal access for students (can\'t run npm, node commands)',
            'Browser-based bundlers (CodeSandbox, Replit) blocked',
            'Intermittent connectivity and strict firewall rules',
            'Must work offline or with severely limited internet',
        ],
        highlights: [
            { label: 'Active Students', value: '500+' },
            { label: 'Facilities', value: '10+' },
            { label: 'Build Speedup', value: '12-30x' },
            { label: 'Languages Supported', value: '7' },
        ],
        features: [
            {
                title: 'Cloud-Based Development Environment',
                problem: `Students can't install Node.js, run npm commands, or access development servers. 
        They need to learn modern React and Express, but have no way to run the code locally.`,
                solution: `Built a browser-based IDE with server-side code execution. Students write code 
        in Monaco Editor (VS Code's engine), send it to our compilation servers, and get back 
        running applications — all without touching a terminal.`,
                technicalDetails: [
                    'Monaco Editor integration with custom language servers',
                    'WebSocket-based real-time compilation feedback',
                    'Multi-file project support with intelligent file tree',
                    'Live preview system with iframe-based isolation',
                    'Support for 7 languages: HTML/CSS/JS/React/Express/Flutter/SQL',
                ],
                businessImpact: [
                    'Students learn industry-standard frameworks despite constraints',
                    '1000+ code executions daily across restricted networks',
                    'Graduates have portfolios of real React/Express projects',
                ],
            },
            {
                title: 'Template Caching System',
                problem: `Every code execution was running npm install — 60+ seconds per build. 
        With hundreds of students, this was unsustainable.`,
                solution: `Built a template caching system with pre-built project templates. Instead of 
        npm install on every build, copy cached node_modules (2-5 seconds). 12-30x performance 
        improvement.`,
                technicalDetails: [
                    'Pre-built templates with dependencies installed',
                    'Content-addressable storage for node_modules',
                    'Fallback to full npm install for custom dependencies',
                    'Automatic cache invalidation on template updates',
                    'Per-service concurrency limits (Express: 5, React: 3)',
                ],
                businessImpact: [
                    '60+ seconds → 2-5 seconds per build',
                    'Handles 500+ concurrent users without degradation',
                    'Students get instant feedback instead of waiting',
                ],
            },
            {
                title: 'Semantic Code Validation',
                problem: `Traditional auto-graders use string matching — students fail for irrelevant 
        formatting differences. "function greet(name)" vs "const greet = (name) =>" both work, 
        but string matching fails one.`,
                solution: `Built semantic validators that test behavior, not formatting. Parse HTML to 
        DOM and compare structure. Inject CSS and compare computed styles. Execute JavaScript 
        functions and test outputs.`,
                technicalDetails: [
                    'HTML: DOM-based structural comparison with attribute validation',
                    'CSS: Computed style comparison via getComputedStyle',
                    'CSS Media Queries: Dynamic iframe testing at calculated viewport widths',
                    'JavaScript: Function execution with test cases, AST-based equivalence',
                    'Multiple valid solutions accepted (different approaches, same behavior)',
                ],
                businessImpact: [
                    '25% increase in challenge completion rates',
                    '50% reduction in "incorrect failure" support tickets',
                    'Students learn behavior matters, not formatting',
                ],
                codeExample: {
                    language: 'javascript',
                    code: `// Both solutions pass semantic validation:

// Solution 1: Function declaration
function greet(name) {
  return "Hello " + name;
}

// Solution 2: Arrow function
const greet = (name) => \`Hello \${name}\`;

// String matching: Only one passes
// Semantic validation: Both pass`,
                    caption: 'Semantic validation tests output, not syntax',
                },
            },
            {
                title: 'Air-Gapped Deployment Architecture',
                problem: `Prison networks block everything. CDNs, cloud monitoring, external APIs — 
        all blocked. The platform must work with zero external dependencies.`,
                solution: `Self-contained architecture with curated dependency list. S3 bucket 
        whitelisted across facilities serves as package mirror. All assets self-hosted. 
        Database-only caching (no Redis dependency).`,
                technicalDetails: [
                    'Curated ~20 library whitelist served from S3',
                    'All CSS/JS/images self-hosted (no Google Fonts)',
                    'PostgreSQL for all caching (Redis might not be available)',
                    'HTTP polling for heartbeat (WebSockets might be blocked)',
                    'Compilation server has internet, students don\'t need it',
                ],
                businessImpact: [
                    'Works reliably in 10+ correctional facilities',
                    'Zero external dependencies in student browser',
                    '99%+ uptime despite network restrictions',
                    'Solved problems Replit and CodeSandbox cannot address',
                ],
            },
        ],
        techStack: [
            { category: 'Frontend', items: ['React', 'TypeScript', 'Monaco Editor', 'Custom Hooks'] },
            { category: 'Backend', items: ['Node.js', 'Express', 'Rails 4.2.9 (legacy)'] },
            { category: 'Compilation', items: ['Vite', 'Webpack', 'Docker', 'Child Process Management'] },
            { category: 'Database', items: ['PostgreSQL', 'S3 (asset storage)'] },
            { category: 'Infrastructure', items: ['AWS Elastic Beanstalk', 'Nginx', 'Docker'] },
        ],
        outcomes: [
            '500+ students actively learning modern web development',
            'Students in correctional facilities gain marketable skills',
            '65% challenge completion rate (industry average: 40%)',
            '400+ instructor hours saved annually on grading',
            'Breaking cycles through technical education',
        ],
        color: '#3b82f6',
    },

    'watts-bags': {
        id: 'watts-bags',
        title: 'Watts Bags Automation',
        role: 'Software Engineer (Freelance)',
        timeline: 'Oct 2024 - May 2025',
        tagline: 'Hybrid automation system for manufacturing inventory tracking across 7 production locations',
        overview: `Built a hybrid automation system for a custom bag manufacturer combining low-code 
    platforms (Kintone, Make.com) with custom Node.js middleware. The system automates order 
    processing and tracks inventory in real-time as bags move through 7 production locations.
    
    Project was cancelled before full completion, but the implemented portions were production-ready 
    and demonstrated significant time savings.`,
        challenges: [
            'Kintone platform limitations for complex inventory logic',
            'No built-in state machine for production workflow',
            'Webhook payloads sometimes contained malformed data (null bytes)',
            'Need to prevent overselling with real-time stock validation',
            'Multiple SKU variations for same bag model',
        ],
        highlights: [
            { label: 'Locations Tracked', value: '7' },
            { label: 'Time Saved', value: '50+ hrs/mo' },
            { label: 'Orders/Day', value: '50+' },
            { label: 'Data Entry Speed', value: '150-300x' },
        ],
        features: [
            {
                title: '7-Location State Machine',
                problem: `Bags move through 7 production locations: Office → Warehouse → Art → Cutting → 
        Sewer → Embroidery → Complete. Management couldn't see where bags were stuck or track 
        inventory across locations.`,
                solution: `Built a state machine that tracks every bag through production. Each status 
        change triggers inventory updates — decrement from previous location, increment at current 
        location. Real-time visibility into bottlenecks.`,
                technicalDetails: [
                    'Status-to-field mapping for 10+ statuses across 7 locations',
                    'Multiple sewer statuses map to single qty_sewer field',
                    'Terminal state (Complete) doesn\'t decrement previous',
                    'Webhook-triggered updates via Make.com → Express server',
                    'Audit logging for all inventory changes',
                ],
                businessImpact: [
                    'Real-time visibility: "20 bags in Art, 15 with Sewer, 8 in Embroidery"',
                    'Bottleneck detection: "50 bags stuck at Need Sewer Assigned"',
                    'No bags "lost" in the system — always tracked',
                ],
            },
            {
                title: 'Stock Validation & Overselling Prevention',
                problem: `Orders were being approved without checking if inventory was available. 
        Result: overselling, customer disappointment, operational chaos.`,
                solution: `Added stock validation to order approval flow. Before approval, system 
        checks general_stock_qty >= required quantity. If insufficient, throws error and 
        alerts via Slack.`,
                technicalDetails: [
                    'Pre-approval validation against general stock',
                    'Race condition prevention with Set tracking for duplicate updates',
                    'Atomic-like updates (all or nothing within single order)',
                    'Slack notifications for insufficient stock errors',
                    'Identified and documented bug: should sum quantities per inventory_id',
                ],
                businessImpact: [
                    'Zero overselling after implementation',
                    'Clear error messages for staff when stock insufficient',
                    'Slack alerts enable quick response to inventory issues',
                ],
            },
            {
                title: 'Intelligent SKU Generation',
                problem: `Custom bags have complex configurations: model, color, wheels, dividers. 
        SKU naming was inconsistent. "Black" and "Blue" both start with "BL" — needed differentiation.`,
                solution: `Built automatic SKU generation with edge case handling. Special case for 
        "Black" → "BK", multi-word colors use initials ("Royal Blue" → "RB"), model 
        abbreviations standardized ("with" → "w/", "without" → "w/o").`,
                technicalDetails: [
                    'Color code logic with explicit "Black" → "BK" handling',
                    'Multi-word colors: first letter of each word',
                    'Model standardization: "with" → "w/", "(C Version)" → "V.C"',
                    'Auto-fix on CSV import (corrects existing records)',
                    'Two identifier types: internal bag_identifier + external website_identifier',
                ],
                businessImpact: [
                    'Consistent naming across 1,000+ product variants',
                    'No more SKU confusion between similar products',
                    'Bulk import cleanup saves hours of manual correction',
                ],
            },
        ],
        techStack: [
            { category: 'Backend', items: ['Node.js', 'Express', 'Axios'] },
            { category: 'Platforms', items: ['Kintone', 'Make.com', 'Google Sheets'] },
            { category: 'Integration', items: ['REST APIs', 'Webhooks', 'Slack'] },
        ],
        outcomes: [
            '50+ hours/month saved in manual operations',
            '2-3 minutes saved per order (customer autofill)',
            'Real-time inventory tracking eliminated manual counting',
            'Demonstrated hybrid low-code + custom code architecture',
            'Project cancelled before completion but delivered production-ready systems',
        ],
        color: '#8b5cf6',
    },

    engineersmith: {
        id: 'engineersmith',
        title: 'EngineerSmith',
        role: 'Lead Developer',
        timeline: 'Jan 2025 - Present',
        tagline: 'Multi-tenant certification platform with multi-runtime code execution and semantic auto-grading',
        overview: `Built a standalone certification/assessment platform for coding skills, designed to be marketed 
    independently while supporting Simply Coding's testing needs. The platform features multi-runtime code 
    execution across 4 languages, 5 question types with semantic auto-grading, and complete multi-tenant 
    organization management.
    
    The core innovation is the execution engine: students write code in the browser, it's sent to sandboxed 
    workers that execute against test cases, and results include captured console output for debugging. 
    The system handles everything from simple multiple choice to complex code challenges with hidden test cases.`,
        challenges: [
            'Execute untrusted code safely across multiple language runtimes',
            'Capture console output without mixing it with test harness output',
            'Support diverse question types with consistent grading interface',
            'Multi-tenant isolation with shared global question pools',
            'Semantic validation that accepts multiple correct solutions',
        ],
        highlights: [
            { label: 'Language Runtimes', value: '4' },
            { label: 'Question Types', value: '5' },
            { label: 'Architecture', value: 'Multi-Tenant' },
            { label: 'Grading', value: 'Semantic' },
        ],
        features: [
            {
                title: 'Multi-Runtime Code Execution Engine',
                problem: `Need to execute student code in JavaScript, TypeScript, Python, SQL, and Dart — all 
        safely sandboxed with timeout protection, while capturing console output for debugging feedback.`,
                solution: `Built separate runners for each runtime: Node.js with child_process spawning, Python via 
        Pyodide (WebAssembly), SQL via sql.js, and Dart. Each runner intercepts console output, executes 
        test cases, and returns structured results with per-test console logs.`,
                technicalDetails: [
                    'Node runner: Child process with temp files, timeout via SIGTERM/SIGKILL',
                    'Python runner: Pyodide in worker thread, sys.stdout/stderr override',
                    'SQL runner: sql.js with schema setup, seed data, result comparison',
                    'Dart runner: Native dart execution with process management',
                    'Console capture: Override console.log to array, restore for result output',
                    'Deep equality comparison for complex return types (arrays, objects, NaN)',
                    'Smart function calling: handles single param vs spread args edge cases',
                ],
                businessImpact: [
                    'Students get real execution feedback, not string matching',
                    'Console logs help students debug failing tests',
                    'Timeout protection prevents infinite loops from blocking system',
                    'Same grading interface regardless of language',
                ],
                codeExample: {
                    language: 'javascript',
                    code: `// Console capture in Node runner
const consoleLogs = [];
const originalConsoleLog = console.log;

console.log = (...args) => {
  const message = args.map(arg => 
    typeof arg === 'object' 
      ? JSON.stringify(arg) 
      : String(arg)
  ).join(' ');
  consoleLogs.push({ type: 'log', message });
};

// Execute student code...
// Test cases run with captured output

// Return results with original console
originalConsoleLog(JSON.stringify({
  results, consoleLogs, overallPassed
}));`,
                    caption: 'Console interception allows capturing student debug output',
                },
            },
            {
                title: 'Question Bank System',
                problem: `Need to support multiple question types (code challenges, debugging, fill-in-blank, 
        multiple choice, true/false) across 12 languages with proper validation that prevents 
        invalid combinations.`,
                solution: `Built a schema with language-category-type validation matrix. Each question type has 
        specific required fields. The system prevents invalid combinations at save time and provides 
        clear error messages.`,
                technicalDetails: [
                    '5 question types: codeChallenge, codeDebugging, fillInTheBlank, multipleChoice, trueFalse',
                    '12 languages: JS, TS, Python, SQL, Dart, React, RN, Flutter, Express, HTML, CSS, JSON',
                    '3 categories: logic (executable), ui (visual), syntax (pattern matching)',
                    'Validation matrix prevents invalid combos (e.g., no codeChallenge for HTML)',
                    'Per-question usage stats: times used, success rate, average time',
                    'Duplicate detection service prevents question bank pollution',
                ],
                businessImpact: [
                    'Instructors can\'t create broken questions',
                    'Clear error messages guide proper question setup',
                    'Usage stats identify problematic questions',
                    'Duplicate detection saves time and maintains quality',
                ],
            },
            {
                title: 'Test Session Management',
                problem: `Students taking tests need answer persistence, time tracking, attempt limits, and 
        protection against refreshing or navigating away. Instructors need to grant extra attempts 
        for legitimate retakes.`,
                solution: `Built complete test session lifecycle with snapshots. When a student starts a test, 
        a snapshot captures the exact questions (immutable even if test is edited). Sessions track 
        status (active/completed/expired/abandoned), answers persist across page refreshes, and 
        an override system allows instructors to grant extra attempts.`,
                technicalDetails: [
                    'Test snapshot: immutable copy of questions when session starts',
                    'Session states: active → completed/expired/abandoned',
                    'Answer persistence: saves on every question change',
                    'Time tracking: server-side enforcement, not client-side',
                    'Attempt counting: from TestSession status, not separate counter',
                    'StudentTestOverride: extra attempts granted by instructors',
                    'AttemptRequest: students can request more attempts with reason',
                ],
                businessImpact: [
                    'No lost work if browser closes unexpectedly',
                    'Fair time enforcement (can\'t manipulate client clock)',
                    'Instructors have flexibility for legitimate retakes',
                    'Audit trail for all attempts and overrides',
                ],
            },
            {
                title: 'Multi-Tenant Organization System',
                problem: `Platform needs to support multiple organizations (schools, companies) with isolated 
        data, while allowing EngineerSmith (super org) to manage all organizations and share global 
        content across tenants.`,
                solution: `Built hierarchical multi-tenant architecture. Super org (EngineerSmith) can create 
        child organizations with invite codes. Questions and tests can be organization-scoped or global. 
        Users belong to exactly one organization with role-based permissions.`,
                technicalDetails: [
                    'Organization model: name, inviteCode, isSuperOrg flag',
                    'User → Organization: many-to-one relationship',
                    'Questions/Tests: organizationId for scoping, isGlobal for sharing',
                    'Invite code registration: validates code, assigns to org',
                    'Role hierarchy: student < instructor < admin < super org admin',
                    'Cross-org queries only for super org admins',
                ],
                businessImpact: [
                    'Each client gets isolated environment',
                    'Global questions reduce duplication across orgs',
                    'Invite codes enable self-service registration',
                    'Super org maintains control and visibility',
                ],
                codeExample: {
                    language: 'javascript',
                    code: `// Student dashboard query with org + global tests
Test.aggregate([
  {
    $match: {
      status: 'active',
      $or: [
        { organizationId: studentOrgId },
        { isGlobal: true }
      ]
    }
  },
  // Lookup completed sessions, overrides...
  // Calculate remaining attempts...
])`,
                    caption: 'Students see both org-specific and global tests',
                },
            },
            {
                title: 'Analytics & Reporting System',
                problem: `Instructors need visibility into student performance, question difficulty, and test 
        effectiveness. Need analytics at multiple levels: individual student, question, section, and test.`,
                solution: `Built comprehensive analytics with aggregation pipelines. Result analytics show 
        pass rates and score distributions. Question analytics identify problematic questions. 
        User analytics track individual progress over time.`,
                technicalDetails: [
                    'Result analytics: filter by test, org, date range, question type',
                    'Question analytics: success rate, average time, attempt distribution',
                    'User analytics: progress tracking, score trends',
                    'Section analytics: performance by test section',
                    'Aggregation pipelines for efficient computation',
                    'Permission validation: instructors see own org, super admins see all',
                ],
                businessImpact: [
                    'Identify struggling students early',
                    'Find and fix poorly-worded questions',
                    'Data-driven curriculum improvement',
                    'Demonstrate certification value to employers',
                ],
            },
        ],
        techStack: [
            { category: 'Frontend', items: ['React', 'TypeScript', 'Context API', 'Custom Hooks'] },
            { category: 'Backend', items: ['Node.js', 'Express', 'Mongoose'] },
            { category: 'Database', items: ['MongoDB', 'Aggregation Pipelines'] },
            { category: 'Execution', items: ['Worker Threads', 'Pyodide', 'sql.js', 'Child Process'] },
            { category: 'Real-time', items: ['WebSocket', 'Socket.io'] },
            { category: 'Auth', items: ['JWT', 'bcrypt', 'RBAC', 'SSO Support'] },
        ],
        outcomes: [
            'Multi-runtime execution engine supporting 4 languages',
            '5 question types with semantic auto-grading',
            'Multi-tenant SaaS architecture ready for commercial licensing',
            'Complete test lifecycle from composition to analytics',
            'Built as standalone product, marketable independently',
        ],
        color: '#f59e0b',
    },
};
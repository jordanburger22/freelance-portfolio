export interface Project {
  id: string;
  title: string;
  role: string;
  timeline: string;
  description: string;
  impact: string[];
  techStack: string[];
  highlights: {
    label: string;
    value: string;
  }[];
  color: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  roles: {
    title: string;
    period: string;
  }[];
  type: string;
}

export const projects: Project[] = [
  {
    id: 'gunkustom',
    title: 'GunKustom',
    role: 'Acting CTO — Senior Full Stack Engineer',
    timeline: 'Sep 2024 - Present',
    description: 'Architected the technical foundation for a firearms e-commerce startup as Acting CTO. Built 60.2% of the platform codebase (git-verified) across backend, frontend, and data pipeline — including a parts compatibility engine, a 52K-line data pipeline processing thousands of products daily, and a community platform with AI-powered moderation.',
    impact: [
      'Built 52,884-line data pipeline as sole author in 1 week',
      'Dual AI validation for product matching and data quality',
      '305 commits across 3 repositories over 6 months',
      'REST API with 200+ endpoints serving web and mobile clients',
    ],
    techStack: [
      'TypeScript',
      'NestJS',
      'React',
      'MongoDB',
      'Cloudflare R2',
      'Docker',
      'AWS',
      'Datadog',
      'Socket.IO',
    ],
    highlights: [
      { label: 'Platform Codebase', value: '60.2%' },
      { label: 'Data Pipeline in 1 Week', value: '52K lines' },
      { label: 'Total Commits', value: '305' },
      { label: 'Lines Contributed', value: '219K+' },
    ],
    color: '#2c5530',
    liveUrl: 'https://gunkustom.com',
  },
  {
    id: 'simply-coding',
    title: 'Simply Coding',
    role: 'Senior Full Stack Engineer — Platform Architect',
    timeline: 'Nov 2024 - Present',
    description: 'Architected the complete technical platform for an educational company serving 500+ students — 330,000+ lines across 9 repositories spanning LMS, cloud IDE, certification engine, and AI tutoring. Built in environments where Replit and CodeSandbox literally cannot function: prison networks with blocked CDNs, no terminal access, and air-gapped infrastructure.',
    impact: [
      'Optimized code compilation 97% faster (2 minutes → 2 seconds) via template caching',
      'Eliminated 7 security vulnerability categories including command injection and RCE',
      'Saved $4,320/year in infrastructure costs through optimization',
      'Built AI tutoring system in 1 day using OpenAI Assistants API',
    ],
    techStack: [
      'TypeScript',
      'React',
      'NestJS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'AWS',
      'OpenAI API',
    ],
    highlights: [
      { label: 'Lines Across Platform', value: '330K+' },
      { label: 'Faster Builds', value: '97%' },
      { label: 'Annual Cost Savings', value: '$4,320' },
      { label: 'Security Vulns Fixed', value: '7' },
    ],
    color: '#3b82f6',
  },
  {
    id: 'engineersmith',
    title: 'EngineerSmith',
    role: 'Lead Developer — B2B Certification Platform',
    timeline: 'Jan 2025 - Present',
    description: 'Built a standalone certification and assessment platform supporting 6 programming languages with auto-grading, sandbox execution, and multi-format questions. Designed as white-label B2B SaaS — Simply Coding is the first customer, with plans to market to other educational institutions and corporate training programs.',
    impact: [
      '103,000 lines of production code (NestJS + React)',
      'Priority queue ensures exams never delayed by practice traffic',
      'Security scanner blocks malicious code across all 6 languages',
      'Multi-tenant architecture with SSO for B2B customers',
    ],
    techStack: [
      'TypeScript',
      'NestJS',
      'React',
      'MongoDB',
      'Python',
      'Swift',
      'sql.js',
      'Socket.IO',
      'Render',
    ],
    highlights: [
      { label: 'Lines of Code', value: '103K' },
      { label: 'Languages', value: '6' },
      { label: 'Concurrent Users', value: '50+' },
      { label: 'Infrastructure Cost', value: '$25/mo' },
    ],
    color: '#f59e0b',
    liveUrl: 'https://engineersmith.com',
  },
  {
    id: 'fablheim',
    title: 'Fablheim',
    role: 'Solo Full Stack Developer — Personal Project',
    timeline: 'Feb 2026 (Nights/Weekends)',
    description: 'Solo-built an AI-powered tabletop RPG campaign management platform in nights and weekends — 24,700+ lines of TypeScript reaching 95% MVP. Features context-aware AI generation via Anthropic Claude (not a ChatGPT wrapper), real-time WebSocket multiplayer sessions, and support for 6 TTRPG game systems.',
    impact: [
      '16 AI generation endpoints via Anthropic Claude with context-aware prompting',
      'Real-time WebSocket sessions with initiative tracker, dice roller, and live presence',
      '16 NestJS modules, 17 MongoDB collections, 91+ REST endpoints',
      'Custom fantasy design system (652 lines of themed CSS)',
    ],
    techStack: [
      'TypeScript',
      'NestJS',
      'React 19',
      'MongoDB',
      'Anthropic Claude API',
      'Socket.IO',
      'TanStack Query',
      'Tailwind CSS',
    ],
    highlights: [
      { label: 'Lines (Solo Build)', value: '24.7K' },
      { label: 'AI Endpoints', value: '16' },
      { label: 'MVP Complete', value: '95%' },
      { label: 'Game Systems', value: '6' },
    ],
    color: '#7c3aed',
  },
  {
    id: 'watts-bags',
    title: 'Watts Bags Automation',
    role: 'Software Engineer (Freelance)',
    timeline: 'Oct 2024 - May 2025',
    description: 'Built a hybrid automation system for a custom bag manufacturer combining low-code platforms with custom Node.js middleware. Automated order processing and real-time inventory tracking across 7 production locations.',
    impact: [
      'Real-time inventory tracking across 7 locations',
      '50+ hours/month saved in manual operations',
      'Prevented overselling with stock validation',
      '7-location state machine for production workflow',
    ],
    techStack: [
      'Node.js',
      'Express',
      'Kintone',
      'Make.com',
      'REST APIs',
      'Webhooks',
    ],
    highlights: [
      { label: 'Locations Tracked', value: '7' },
      { label: 'Time Saved', value: '50+ hrs/mo' },
      { label: 'Orders/Day', value: '50+' },
      { label: 'Integration', value: 'Hybrid' },
    ],
    color: '#8b5cf6',
  },
];

export const experience: Experience[] = [
  {
    company: 'GunKustom',
    roles: [
      { title: 'Acting CTO / Senior Full Stack Engineer', period: 'Mar 2025 - Present' },
      { title: 'Frontend Developer', period: 'Sep 2024 - Mar 2025' },
    ],
    type: 'Contract',
  },
  {
    company: 'Simply Coding',
    roles: [
      { title: 'Senior Full Stack Engineer', period: 'Mar 2025 - Present' },
      { title: 'Course Developer', period: 'Nov 2024 - Apr 2025' },
    ],
    type: 'Full-time',
  },
  {
    company: 'EngineerSmith',
    roles: [
      { title: 'Lead Developer — B2B SaaS', period: 'Jan 2025 - Present' },
    ],
    type: 'Product',
  },
  {
    company: 'Watts Bags',
    roles: [
      { title: 'Software Engineer', period: 'Oct 2024 - May 2025' },
    ],
    type: 'Freelance',
  },
  {
    company: 'V School',
    roles: [
      { title: 'Instructor', period: 'Jun 2023 - Sep 2024' },
    ],
    type: 'Full-time',
  },
];

export const techCategories = [
  {
    name: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML/CSS'],
  },
  {
    name: 'Frontend',
    items: ['React', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Monaco Editor', 'TanStack Query'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Socket.IO'],
  },
  {
    name: 'AI & Data',
    items: ['Anthropic Claude API', 'OpenAI API', 'GPT-4o', 'Fuzzy Matching', 'ETL Pipelines'],
  },
  {
    name: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Mongoose'],
  },
  {
    name: 'Infrastructure',
    items: ['AWS', 'Docker', 'Cloudflare', 'Render', 'Datadog APM', 'GitHub Actions'],
  },
  {
    name: 'Auth & Security',
    items: ['JWT', 'TOTP/MFA', 'OAuth', 'RBAC', 'SSO'],
  },
];

export const stats = [
  { label: 'Lines of Production Code', value: '500K+' },
  { label: 'Systems Architected', value: '31+' },
  { label: 'Users Impacted', value: '500+' },
  { label: 'Faster Builds', value: '97%' },
];
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
    role: 'Acting CTO / Senior Full Stack Engineer',
    timeline: 'Sep 2024 - Present',
    description: 'Built a production-grade firearms e-commerce platform from the ground up. Architected 31 interconnected systems spanning compatibility checking, social features, content moderation, price tracking, and enterprise authentication. Owned 78.5% of the codebase at MVP launch (153K+ lines).',
    impact: [
      '2,700-line compatibility engine — core IP, 6-12 months to replicate',
      'Independently invented Reddit-style heat algorithm',
      'Enterprise auth from scratch (TOTP, MFA, progressive lockout)',
      'Price tracking unique in firearms industry',
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
      'WebSocket',
    ],
    highlights: [
      { label: 'Code at MVP', value: '78.5%' },
      { label: 'Backend in 3mo', value: '49K lines' },
      { label: 'Systems Built', value: '31' },
      { label: 'Time to Replicate', value: '6-12 mo' },
    ],
    color: '#2c5530',
    liveUrl: 'https://gunkustom.com',
  },
  {
    id: 'simply-coding',
    title: 'Simply Coding',
    role: 'Instructor / Developer',
    timeline: 'Nov 2024 - Present',
    description: 'Built a complete learning management system for correctional facilities where traditional cloud-based tools are impossible. Created a browser-based IDE with server-side code execution, solving problems that venture-backed companies like Replit and CodeSandbox cannot address.',
    impact: [
      '500+ students across 10+ correctional facilities',
      '12-30x build performance improvement via template caching',
      'Semantic code validation testing behavior, not formatting',
      '25% higher challenge completion than industry average',
    ],
    techStack: [
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Docker',
      'AWS Elastic Beanstalk',
      'Monaco Editor',
      'Vite',
    ],
    highlights: [
      { label: 'Active Users', value: '500+' },
      { label: 'Facilities', value: '10+' },
      { label: 'Build Speedup', value: '12-30x' },
      { label: 'Languages', value: '7' },
    ],
    color: '#3b82f6',
  },
  {
    id: 'engineersmith',
    title: 'EngineerSmith',
    role: 'Lead Developer',
    timeline: 'Jan 2025 - Present',
    description: 'Built a multi-tenant certification platform with secure code execution across 6 languages. Priority-based job queue ensures certification exams run smoothly under load. Security scanner blocks malicious code before execution. Designed for 50+ concurrent users on limited infrastructure.',
    impact: [
      'Priority queue: certification exams jump ahead of practice submissions',
      'Security scanner blocks dangerous patterns across all 6 languages',
      'Memory-optimized runners: 64-128MB limits, 1MB output cap',
      'Multi-tenant orgs with SSO integration to Simply Coding',
    ],
    techStack: [
      'TypeScript',
      'NestJS',
      'React',
      'MongoDB',
      'Python',
      'Swift',
      'sql.js',
      'WebSocket',
      'Render',
    ],
    highlights: [
      { label: 'Languages', value: '6' },
      { label: 'Question Types', value: '6' },
      { label: 'Concurrent Users', value: '50+' },
      { label: 'Memory/Runner', value: '64-128MB' },
    ],
    color: '#f59e0b',
    liveUrl: 'https://engineersmith.com',
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
      { title: 'Senior Full Stack/Cloud Engineer', period: 'Mar 2025 - Present' },
      { title: 'Frontend Developer', period: 'Sep 2024 - Mar 2025' },
    ],
    type: 'Contract · Minority Stakeholder',
  },
  {
    company: 'Simply Coding',
    roles: [
      { title: 'Instructor / Developer', period: 'Mar 2025 - Present' },
      { title: 'Course Developer', period: 'Nov 2024 - Apr 2025' },
    ],
    type: 'Full-time',
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
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Monaco Editor'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'WebSocket'],
  },
  {
    name: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose'],
  },
  {
    name: 'Infrastructure',
    items: ['AWS', 'Docker', 'Cloudflare', 'Render', 'GitHub Actions'],
  },
  {
    name: 'Auth & Security',
    items: ['JWT', 'TOTP/MFA', 'OAuth', 'RBAC', 'SSO'],
  },
];

export const stats = [
  { label: 'Lines of Production Code', value: '200K+' },
  { label: 'Systems Architected', value: '31+' },
  { label: 'Users Impacted', value: '500+' },
  { label: 'Build Speed Improvement', value: '30x' },
];
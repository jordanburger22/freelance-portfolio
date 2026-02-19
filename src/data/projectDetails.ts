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

export interface ProjectDemo {
    title: string;
    description: string;
    videoUrl: string;
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
    demos?: ProjectDemo[];
}

export const projectDetails: Record<string, ProjectDetail> = {
    gunkustom: {
        id: 'gunkustom',
        title: 'GunKustom',
        role: 'Acting CTO — Senior Full Stack Engineer',
        timeline: 'Sep 2024 - Present',
        tagline: 'Firearms e-commerce platform — 60.2% of codebase built as sole technical lead',
        overview: `Architected the technical foundation for a firearms e-commerce startup as Acting CTO. Built
    60.2% of the platform codebase (git-verified across 3 repositories) spanning a NestJS backend,
    React frontend, and data ingestion pipeline — 219,345+ lines contributed across 305 commits.

    The platform includes parts compatibility checking, a community builds social platform,
    AI-powered content moderation, real-time price tracking, enterprise authentication, and a
    52,884-line data pipeline I sole-authored in one week that processes thousands of products
    daily with dual-stage AI validation.`,
        challenges: [
            'No existing codebase — built from scratch as sole technical lead',
            'Complex domain requiring deep understanding of product compatibility',
            'Enterprise-grade requirements on startup timeline and budget',
            'Needed social features, e-commerce, data ingestion, and content moderation all integrated',
        ],
        highlights: [
            { label: 'Platform Codebase', value: '60.2%' },
            { label: 'Data Pipeline in 1 Week', value: '52K lines' },
            { label: 'Total Commits', value: '305' },
            { label: 'Lines Contributed', value: '219K+' },
        ],
        features: [
            {
                title: 'Data Ingestion Pipeline (ForwardAssist V2)',
                problem: `The platform needed to aggregate product data from multiple sources — distributor feeds,
        manufacturer catalogs, and web scraping — to build a comprehensive parts database. Manual data
        entry was unsustainable at scale.`,
                solution: `Sole-authored a 52,884-line data pipeline in one week. 6-stage ETL pipeline that ingests
        data from feeds and web scraping, matches products using dual-strategy algorithms (exact MPN lookup +
        fuzzy matching), and validates unknowns with two-stage AI (GPT-4o-mini screening, GPT-4o confirmation).`,
                technicalDetails: [
                    '6-stage ETL: ingest → normalize → match → validate → enrich → publish',
                    'Dual-strategy product matching for high accuracy',
                    'Two-stage AI validation pipeline for unknown products',
                    'Live monitoring dashboard with WebSocket updates',
                    'Automated scheduling for daily feed processing and price syncs',
                ],
                businessImpact: [
                    'Processes thousands of products daily from multiple sources',
                    'Automated what would require a full-time data team',
                    'AI validation catches edge cases humans would miss',
                    'Built in 1 week — demonstrates velocity and technical depth',
                ],
            },
            {
                title: 'Parts Compatibility System',
                problem: `Firearms parts have complex compatibility requirements. Customers were purchasing
        incompatible parts, leading to returns and frustration. No competitor offers real-time
        compatibility checking.`,
                solution: `Built a system that validates part compatibility across multiple product categories,
        providing real-time feedback to customers before purchase. Handles both complex interdependency
        checks and simpler attribute-based matching depending on the product category.`,
                technicalDetails: [
                    'Multiple validation strategies for different product categories',
                    'Real-time compatibility feedback in the shopping experience',
                    'Handles data normalization across multiple vendors and formats',
                    'Extensible architecture for adding new product categories',
                ],
                businessImpact: [
                    'Prevents returns from incompatible purchases',
                    'Builds customer trust through accurate recommendations',
                    'Unique differentiator in the firearms retail space',
                ],
            },
            {
                title: 'Community Platform & Content Moderation',
                problem: `The platform needed social features (community builds, forums, comments) to drive
        engagement, but user-generated content requires moderation at scale without a large team.`,
                solution: `Built a complete community platform with gamification (XP, trust levels) and
        defense-in-depth content moderation: user trust system, AI-powered image safety checking,
        text filtering, and human review queue with team notifications.`,
                technicalDetails: [
                    'User trust and XP system with progressive privileges',
                    'AI integration for automated image safety checking',
                    'Multi-tier moderation: automated → AI → human review',
                    'Community builds with multi-image upload and showcase',
                ],
                businessImpact: [
                    'Scales moderation without large team',
                    'Drives user engagement through social features and gamification',
                    'Protects brand from harmful content automatically',
                ],
            },
            {
                title: 'Enterprise Authentication',
                problem: `Needed production-grade auth for an e-commerce platform: MFA, account security,
        admin roles — without enterprise licensing costs.`,
                solution: `Built complete enterprise auth from scratch: TOTP/authenticator app support,
        progressive lockout, trusted devices, and role-based access control.`,
                technicalDetails: [
                    'TOTP with encrypted secrets and backup codes',
                    'Progressive lockout with increasing penalties',
                    'Trusted device management',
                    'Role-based access control for admin, editor, and user roles',
                ],
                businessImpact: [
                    'Enterprise-grade security at zero licensing cost',
                    'Audit logging for compliance',
                    'Saves significant annual licensing fees vs Auth0/Okta',
                ],
            },
        ],
        techStack: [
            { category: 'Backend', items: ['TypeScript', 'NestJS', 'Node.js'] },
            { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
            { category: 'Database', items: ['MongoDB', 'Mongoose'] },
            { category: 'Data Pipeline', items: ['GPT-4o', 'JSDOM', 'Fuzzy Matching', 'WebSocket'] },
            { category: 'Infrastructure', items: ['AWS', 'Docker', 'Cloudflare', 'Render'] },
            { category: 'Monitoring', items: ['Datadog APM', 'Sightengine'] },
        ],
        outcomes: [
            'MVP launched January 2026 with complete feature set',
            '60.2% of platform codebase — git-verified across 3 repositories',
            '52,884-line data pipeline sole-authored in 1 week',
            '305 commits across backend, frontend, and data pipeline',
            'Enterprise-grade security without enterprise licensing costs',
        ],
        color: '#2c5530',
    },

    'simply-coding': {
        id: 'simply-coding',
        title: 'Simply Coding',
        role: 'Senior Full Stack Engineer — Platform Architect',
        timeline: 'Nov 2024 - Present',
        tagline: '330,000+ lines across 9 repositories — cloud IDE, LMS, certification engine, and AI tutoring',
        overview: `Architected the complete technical platform for an educational company serving 500+ students —
    330,000+ lines across 9 repositories spanning LMS, cloud IDE, certification engine, and AI tutoring.
    Built for environments where Replit and CodeSandbox literally cannot function: maximum security prisons
    with restricted internet access, no terminal access, and air-gapped networks.

    Optimized builds 97% faster (60s → 0.6s), eliminated 7 security vulnerability categories, saved $4,320/year
    in infrastructure costs, and migrated the entire backend from Express microservices to a NestJS monolith.
    Built an AI tutoring system in a single day using OpenAI Assistants API.`,
        challenges: [
            'No CDN access (jsdelivr, unpkg blocked by prison firewalls)',
            'No terminal access for students (can\'t run npm, node commands)',
            'Browser-based bundlers (CodeSandbox, Replit) blocked',
            'Intermittent connectivity and strict firewall rules',
            'Must work through restrictive firewalls while maintaining server connection',
        ],
        highlights: [
            { label: 'Lines Across Platform', value: '330K+' },
            { label: 'Faster Builds', value: '97%' },
            { label: 'Annual Cost Savings', value: '$4,320' },
            { label: 'Security Vulns Fixed', value: '7' },
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
        npm install on every build, copy cached node_modules — 97% faster (60s → 0.6s). Saved $4,320/year
        in infrastructure costs by reducing server load.`,
                technicalDetails: [
                    'Pre-built templates with dependencies installed',
                    'Content-addressable storage for node_modules',
                    'Fallback to full npm install for custom dependencies',
                    'Automatic cache invalidation on template updates',
                    'Per-service concurrency limits (Express: 5, React: 3)',
                ],
                businessImpact: [
                    '97% faster builds: 60+ seconds → under 1 second',
                    '$4,320/year infrastructure cost savings',
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
                title: 'Restricted Network Architecture',
                problem: `Prison networks block most external services. CDNs, cloud monitoring, external APIs — 
        all blocked. The platform must work with minimal external dependencies while students 
        maintain connection to our compilation server.`,
                solution: `Self-contained architecture with curated dependency list. S3 bucket 
        whitelisted across facilities serves as package mirror. All frontend assets self-hosted. 
        Compilation happens server-side where internet access exists.`,
                technicalDetails: [
                    'Curated ~20 library whitelist served from S3',
                    'All CSS/JS/images self-hosted (no Google Fonts, no CDNs)',
                    'PostgreSQL for all caching (minimal external dependencies)',
                    'HTTP polling fallback when WebSockets are blocked',
                    'Server has full internet - handles all npm/compilation',
                    'Students only need to reach our server, not the broader internet',
                ],
                businessImpact: [
                    'Works reliably in 10+ correctional facilities',
                    'Minimal external dependencies in student browser',
                    '99%+ uptime despite network restrictions',
                    'Solved problems Replit and CodeSandbox cannot address',
                ],
            },
        ],
        techStack: [
            { category: 'Frontend', items: ['React', 'TypeScript', 'Monaco Editor', 'Tailwind CSS'] },
            { category: 'Backend', items: ['NestJS', 'Node.js', 'Express', 'Rails (legacy)'] },
            { category: 'AI', items: ['OpenAI Assistants API', 'Context-Aware Generation'] },
            { category: 'Compilation', items: ['Vite', 'Webpack', 'Docker', 'Child Process Management'] },
            { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'S3'] },
            { category: 'Infrastructure', items: ['AWS Elastic Beanstalk', 'Nginx', 'Docker'] },
        ],
        outcomes: [
            '330,000+ lines across 9 repositories — complete platform ownership',
            '97% faster builds (60s → 0.6s) saving $4,320/year',
            '7 security vulnerability categories eliminated',
            'AI tutoring system built in 1 day with OpenAI Assistants API',
            'V1→V2 architecture migration (Express → NestJS monolith)',
            '500+ students across 10+ correctional facilities',
        ],
        color: '#3b82f6',
    },

    fablheim: {
        id: 'fablheim',
        title: 'Fablheim',
        role: 'Solo Full Stack Developer — Personal Project',
        timeline: 'Feb 2026 (Nights/Weekends)',
        tagline: 'AI-powered TTRPG platform — 24.7K lines solo, 16 AI endpoints, real-time multiplayer',
        overview: `Solo-built an AI-powered tabletop RPG campaign management platform in nights and weekends —
    24,700+ lines of TypeScript reaching 95% MVP. Built to demonstrate full-stack + AI integration
    skills outside of employment constraints.

    The platform features context-aware AI generation via Anthropic Claude that builds prompts from
    6 data sources (campaigns, characters, world, sessions, NPCs, relationships) — producing content
    that understands each campaign's unique world, not generic ChatGPT output. Real-time WebSocket
    multiplayer sessions with initiative tracking, dice rolling, and live presence. Supports 6 TTRPG
    game systems: D&D 5e, Pathfinder 2e, Daggerheart, Call of Cthulhu, Fate Core, and custom systems.`,
        challenges: [
            'Context-aware AI that produces campaign-specific content, not generic output',
            'Real-time multiplayer with initiative tracking, dice, and player presence',
            'Supporting 6 different TTRPG rule systems with varied mechanics',
            'Building a complete full-stack platform solo in nights/weekends',
            'Designing an intuitive UX for complex tabletop game management',
        ],
        highlights: [
            { label: 'Lines (Solo Build)', value: '24.7K' },
            { label: 'AI Endpoints', value: '16' },
            { label: 'MVP Complete', value: '95%' },
            { label: 'Game Systems', value: '6' },
        ],
        features: [
            {
                title: 'Context-Aware AI Generation',
                problem: `Generic AI tools produce generic content. A D&D campaign set in a steampunk world
        needs NPCs, encounters, and plot hooks that reflect that specific setting — not default fantasy tropes.`,
                solution: `Built a context pipeline that assembles prompts from 6 data sources: campaign settings,
        party composition, session history, world lore, NPC relationships, and game system rules. The AI
        generates content that's aware of the campaign's unique context.`,
                technicalDetails: [
                    '16 AI generation endpoints across 8 services via Anthropic Claude',
                    'Context assembled from 6 data sources per generation request',
                    'System-aware prompting adapts to D&D, Pathfinder, Daggerheart, etc.',
                    'Token budgeting and response streaming for responsive UX',
                    'Pedagogical guardrails prevent generic or off-theme content',
                ],
                businessImpact: [
                    'Content feels campaign-specific, not AI-generated boilerplate',
                    'DMs save hours of session prep per week',
                    'Key differentiator vs generic AI chat tools',
                ],
            },
            {
                title: 'Real-Time Multiplayer Sessions',
                problem: `Tabletop RPGs are inherently multiplayer. Players need to see initiative order, dice rolls,
        and who's connected — all in real-time during sessions.`,
                solution: `Built WebSocket-powered sessions with Socket.IO. Initiative tracker with drag-to-reorder,
        dice roller with animated results, and live presence indicators showing connected players.`,
                technicalDetails: [
                    'Socket.IO WebSocket gateway with room-based sessions',
                    'Initiative tracker with real-time reordering',
                    'Dice roller supporting standard TTRPG notation (2d6+3, d20, etc.)',
                    'User presence with connection status and activity indicators',
                    'Role-based access (DM/Co-DM/Player) per campaign',
                ],
                businessImpact: [
                    'Enables remote tabletop sessions without external voice/video tools',
                    'Initiative tracking eliminates the most tedious part of combat',
                    'Live presence builds social connection between players',
                ],
            },
            {
                title: 'Dual-Panel Tab System',
                problem: `DMs need to reference multiple things simultaneously during sessions — NPCs, maps, notes,
        AI tools — but traditional UIs force single-view navigation.`,
                solution: `Built a VS Code-inspired dual-panel tab system (479 lines). Users can open any content
        in left or right panels, drag tabs between panels, and maintain independent scroll positions.`,
                technicalDetails: [
                    '479-line tab management system inspired by VS Code UX',
                    'Independent left/right panels with separate tab stacks',
                    'Drag-and-drop tab reordering between panels',
                    'Persistent tab state across page navigation',
                    '8 different content types can be opened as tabs',
                ],
                businessImpact: [
                    'DMs can reference NPCs while running encounters',
                    'Side-by-side AI generation and manual editing',
                    'Familiar UX pattern for developer-adjacent users',
                ],
                codeExample: {
                    language: 'typescript',
                    code: `// Tab system supports multiple content types
type TabType =
  | 'npc' | 'encounter' | 'location'
  | 'plot-hook' | 'session' | 'character'
  | 'ai-tool' | 'world-map';

// Open any content in either panel
openTab({ type: 'npc', id: npcId, panel: 'right' });
openTab({ type: 'ai-tool', tool: 'encounter-gen', panel: 'left' });`,
                    caption: 'VS Code-inspired dual-panel tab system for multitasking during sessions',
                },
            },
            {
                title: 'World Building & Campaign Management',
                problem: `TTRPG campaigns involve complex webs of characters, locations, factions, and relationships
        that are difficult to track across sessions.`,
                solution: `Built a comprehensive world-building system with 9 entity types, relationship mapping,
        and campaign-scoped organization. Supports 6 TTRPG game systems with system-specific mechanics.`,
                technicalDetails: [
                    '9 entity types: NPCs, locations, factions, items, quests, lore, maps, encounters, notes',
                    'Relationship mapping between entities (ally, enemy, neutral, etc.)',
                    '6 TTRPG systems: D&D 5e, Pathfinder 2e, Daggerheart, Call of Cthulhu, Fate Core, Custom',
                    'Campaign-scoped data isolation with role-based access',
                    'Demo data seeding (1,034 lines) for instant onboarding',
                ],
                businessImpact: [
                    'All campaign data in one place vs scattered Google Docs',
                    'Relationships surface narrative connections DMs might forget',
                    'Multi-system support expands addressable market (50M+ TTRPG players)',
                ],
            },
        ],
        techStack: [
            { category: 'Backend', items: ['NestJS 10', 'TypeScript', 'MongoDB', 'Mongoose'] },
            { category: 'AI', items: ['Anthropic Claude API', 'Context Pipeline', 'Token Budgeting'] },
            { category: 'Frontend', items: ['React 19', 'TypeScript', 'TanStack Query', 'Tailwind CSS'] },
            { category: 'Real-time', items: ['Socket.IO', 'WebSocket Gateway', 'Room Management'] },
            { category: 'Auth', items: ['JWT', 'Google OAuth', 'Cloudflare Turnstile'] },
            { category: 'Infrastructure', items: ['Render', 'MongoDB Atlas', 'Cloudflare'] },
        ],
        outcomes: [
            '24,700+ lines of TypeScript — 100% solo-built in nights/weekends',
            '16 AI generation endpoints with context-aware Anthropic Claude integration',
            'Real-time WebSocket multiplayer with initiative tracker and dice roller',
            '16 NestJS modules, 17 MongoDB collections, 91+ REST endpoints',
            '95% MVP complete while maintaining full-time employment',
            'Custom fantasy design system with 8 keyframe animations',
        ],
        color: '#7c3aed',
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
        role: 'Lead Developer — B2B Certification Platform',
        timeline: 'Jan 2025 - Present',
        tagline: 'Standalone B2B SaaS — 103K lines, 6 languages, secure code execution, white-label ready',
        overview: `Built a standalone certification and assessment platform as a B2B SaaS product — 103,000 lines
    of production code. Validates real coding ability through code execution against test cases, not
    multiple-choice quizzes. Simply Coding is the first customer, with the platform designed for white-label
    deployment to other educational institutions and corporate training programs.

    Supports 6 languages (JavaScript, TypeScript, Python, SQL, Dart, Swift) and 6 question types.
    Priority-based execution queue ensures certification exams are never delayed by practice traffic,
    while security scanning blocks malicious code before execution. Handles 50+ concurrent users
    on $25/month infrastructure through memory-optimized runners and intelligent concurrency control.

    Multi-tenant architecture allows organizations to create custom assessments while sharing a global
    question pool. Platform-agnostic design means any organization can onboard with invite codes and SSO.`,
        challenges: [
            'Execute untrusted code safely across 6 language runtimes',
            'Handle 50+ concurrent users on limited infrastructure (2GB RAM)',
            'Prioritize certification exams over practice submissions',
            'Block malicious code patterns without false positives on legitimate student code',
            'Support Swift for upcoming mobile curriculum',
        ],
        highlights: [
            { label: 'Lines of Code', value: '103K' },
            { label: 'Languages', value: '6' },
            { label: 'Concurrent Users', value: '50+' },
            { label: 'Infrastructure Cost', value: '$25/mo' },
        ],
        demos: [
            {
                title: 'Test Session Flow',
                description: 'Complete certification exam demonstrating all question types with real-time code execution and grading',
                videoUrl: 'https://res.cloudinary.com/deoee4emw/video/upload/v1769180405/Screen_Recording_2026-01-22_143924_njj3fs.mp4',
            },
            {
                title: 'Code Lab',
                description: 'LeetCode-style practice challenges with multi-language support and instant feedback',
                videoUrl: 'https://res.cloudinary.com/deoee4emw/video/upload/v1769180411/Screen_Recording_2026-01-22_151330_no1f1x.mp4',
            },
        ],
        features: [
            {
                title: 'Priority-Based Execution Queue',
                problem: `Running untrusted student code on a 2GB server with 50+ concurrent users. Without controls, 
        a few infinite loops or memory-hungry submissions during practice could crash the platform while 
        students are taking certification exams.`,
                solution: `Built an in-memory priority queue with concurrency limits. Certification exam submissions 
        get high priority and jump ahead of practice submissions. The queue enforces both total concurrent 
        limits and per-language limits to prevent any single language from monopolizing resources.`,
                technicalDetails: [
                    'Priority levels: high (test sessions) vs normal (practice/admin)',
                    'Concurrency limits: 8 total, 3 per language (configurable via env vars)',
                    'Queue metrics: depth, wait times, jobs processed, health status',
                    'Jobs never dropped - always execute eventually',
                    'Admin endpoints for monitoring queue health',
                ],
                businessImpact: [
                    'Certification exams never delayed by practice traffic',
                    'Server stays stable under load',
                    'Real-time visibility into system health',
                    'Scales to 50+ concurrent users on $25/month infrastructure',
                ],
            },
            {
                title: 'Security Scanner',
                problem: `Students (intentionally or accidentally) could submit code with infinite loops, file system 
        access, network calls, or other dangerous operations that could crash the server or access 
        unauthorized resources.`,
                solution: `Built a pre-execution security scanner that checks code against language-specific banned 
        patterns. Malicious code is rejected immediately without entering the queue or consuming execution 
        resources.`,
                technicalDetails: [
                    'JavaScript/TypeScript: blocks eval(), require("fs"), process.exit, __proto__, infinite loops',
                    'Python: blocks import os, subprocess, exec(), eval(), while True',
                    'Swift: blocks FileManager, URLSession, Process, dangerous imports',
                    'Dart: blocks dart:io, dart:ffi, Process, File(), Socket',
                    'SQL: blocks INTO OUTFILE, SLEEP(), BENCHMARK(), multiple statements',
                    'Universal: path traversal patterns (../)',
                    'Metrics tracking: total scans, rejections, recent violations',
                ],
                businessImpact: [
                    'Malicious code rejected before consuming resources',
                    'Clear error messages help students understand what is not allowed',
                    'Admin visibility into security rejection patterns',
                    'No false positives on legitimate student code',
                ],
            },
            {
                title: 'Multi-Language Runner Architecture',
                problem: `Supporting 6 languages with consistent behavior, error handling, and resource limits. 
        Each language has different execution models and memory characteristics.`,
                solution: `Standardized runner interface with language-specific implementations. Each runner creates 
        temp files, spawns processes with memory limits, captures console output, enforces timeouts, 
        and cleans up. Replaced Pyodide (WebAssembly Python) with subprocess execution for 50% memory reduction.`,
                technicalDetails: [
                    'Consistent interface: run(code, entryFunction, testCases, timeout) → GradingResult',
                    'Node.js: --max-old-space-size=128 (128MB limit)',
                    'Python: subprocess with resource.setrlimit (~128MB limit)',
                    'Dart: --old-gen-heap-size=64 (64MB limit)',
                    'Swift: subprocess execution for iOS curriculum',
                    'SQL: sql.js in-memory with 1000 row limit',
                    'All runners: 1MB output limit, configurable timeout',
                    'Console capture per test case for student debugging',
                ],
                businessImpact: [
                    'Swift ready for Arizona location starting mobile curriculum next month',
                    'Consistent error messages across all languages',
                    'Students see console output per test for debugging',
                    'Adding new languages follows established pattern',
                ],
            },
            {
                title: 'Multi-Runtime Code Execution',
                problem: `Certification platforms either use multiple choice (no real validation) or are priced 
        for enterprise hiring ($50-100K/year). No accessible option for real code execution with test 
        case validation.`,
                solution: `Built separate runners for each runtime that execute student code in isolated processes, 
        run test cases, capture console output, and return structured results with pass/fail per test.`,
                technicalDetails: [
                    'Test harness injected into student code with deep equality comparison',
                    'Handles edge cases: NaN equality, array/object comparison, undefined values',
                    'Smart function calling: single param vs spread args',
                    'Timeout enforcement with SIGTERM → SIGKILL escalation',
                    'Temp directory isolation with cleanup on completion',
                ],
                businessImpact: [
                    'Certifications prove actual coding ability, not memorization',
                    'Console logs help students debug failing tests',
                    'Accessible pricing vs enterprise hiring platforms',
                ],
            },
            {
                title: 'Multi-Tenant Organization System',
                problem: `Platform needs to support multiple organizations (correctional facilities, schools, bootcamps) 
        with isolated data while sharing global certification content.`,
                solution: `Hierarchical multi-tenant architecture. Organizations have invite codes for self-service 
        registration. Questions and tests can be organization-scoped or global. SSO integration with 
        Simply Coding for seamless access.`,
                technicalDetails: [
                    'Organization model with invite codes and role hierarchy',
                    'Question/test scoping: organizationId for private, isGlobal for shared',
                    'Role hierarchy: student < instructor < admin',
                    'SSO token exchange with Simply Coding platform',
                    'Attempt limits with instructor override capability',
                ],
                businessImpact: [
                    'B2B: Organizations create custom assessments',
                    'Global questions reduce duplication across orgs',
                    'Self-service registration via invite codes',
                    'SSO eliminates password management for Simply Coding students',
                ],
            },
            {
                title: 'Test Session Management',
                problem: `Students taking timed certification exams need answer persistence, server-side time 
        enforcement, and protection against browser crashes. Client-side timing can be manipulated.`,
                solution: `Complete test session lifecycle with immutable question snapshots. Sessions track state, 
        persist answers across refreshes, enforce time limits server-side, and support instructor-granted 
        extra attempts.`,
                technicalDetails: [
                    'Immutable question snapshot when session starts',
                    'Session states: active → completed/expired/abandoned',
                    'Answer persistence on every question change',
                    'Server-side time tracking (no client clock manipulation)',
                    'WebSocket for real-time session updates',
                    'Instructor overrides for extra attempts',
                ],
                businessImpact: [
                    'No lost work if browser closes',
                    'Fair time enforcement for all students',
                    'Audit trail for compliance',
                    'Flexibility for legitimate retakes',
                ],
            },
        ],
        techStack: [
            { category: 'Backend', items: ['NestJS', 'TypeScript', 'Node.js', 'Mongoose'] },
            { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Monaco Editor'] },
            { category: 'Database', items: ['MongoDB Atlas'] },
            { category: 'Execution', items: ['Node.js', 'Python', 'Dart', 'Swift', 'sql.js'] },
            { category: 'Infrastructure', items: ['Render', 'Cloudflare', 'WebSocket'] },
            { category: 'Security', items: ['JWT', 'HTTP-only Cookies', 'Code Scanner', 'SSO'] },
        ],
        outcomes: [
            'Production platform serving Simply Coding certifications',
            '6 languages with secure, memory-limited execution',
            'Priority queue ensures exam reliability under load',
            'Security scanner blocks malicious code patterns',
            'Swift support ready for mobile curriculum launch',
            'Designed for 50+ concurrent users on $25/month infrastructure',
        ],
        color: '#f59e0b',
    },
};
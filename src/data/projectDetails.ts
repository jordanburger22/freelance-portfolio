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
        role: 'CTO / Senior Full Stack Engineer',
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
            'Must work through restrictive firewalls while maintaining server connection',
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
        tagline: 'Multi-tenant certification platform with secure code execution across 6 languages',
        overview: `Built a certification and assessment platform for coding skills that validates real ability through 
    code execution against test cases. Unlike multiple-choice quizzes or enterprise-priced hiring tools, 
    EngineerSmith combines secure multi-language execution with meaningful certifications at accessible pricing.

    The platform supports 6 languages (JavaScript, TypeScript, Python, SQL, Dart, Swift) and 6 question types. 
    A priority-based execution queue ensures certification exams are never delayed by practice traffic, while 
    security scanning blocks malicious code before it reaches the runners. Designed to handle 50+ concurrent 
    users on a 2GB server through memory-optimized runners and intelligent concurrency control.
    
    Multi-tenant architecture allows organizations (correctional facilities, bootcamps, schools) to create 
    custom assessments while sharing a global question pool. SSO integration with Simply Coding enables 
    seamless student access.`,
        challenges: [
            'Execute untrusted code safely across 6 language runtimes',
            'Handle 50+ concurrent users on limited infrastructure (2GB RAM)',
            'Prioritize certification exams over practice submissions',
            'Block malicious code patterns without false positives on legitimate student code',
            'Support Swift for upcoming mobile curriculum',
        ],
        highlights: [
            { label: 'Languages', value: '6' },
            { label: 'Question Types', value: '6' },
            { label: 'Concurrent Users', value: '50+' },
            { label: 'Memory/Runner', value: '64-128MB' },
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
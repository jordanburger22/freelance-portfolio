import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { techCategories } from '../data/portfolio';

const TechStack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="tech" className="relative py-24 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(var(--color-text-secondary) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-text-secondary) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>
            <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute top-40 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                            How I Think About Problems
                        </h2>
                        <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                    </div>
                    <p className="text-text-secondary text-lg max-w-2xl">
                        The tools matter less than knowing when to use them — and when to build something new.
                    </p>
                </motion.div>

                {/* Notable Technical Achievements - Now First */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="bg-surface border border-border rounded-xl overflow-hidden hover:border-border-hover transition-colors duration-300">
                        <div className="h-1 w-full bg-gradient-to-r from-accent via-accent/50 to-transparent" />
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="group bg-background border border-border rounded-lg p-5 hover:border-accent/20 transition-all duration-300">
                                        <h4 className="text-text-primary font-semibold mb-3 flex items-center gap-2">
                                            <span className="text-accent group-hover:translate-x-0.5 transition-transform">▹</span>
                                            AI as a Tool, Not a Gimmick
                                        </h4>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            Integrated 3 different LLM APIs across production systems: Anthropic Claude
                                            for context-aware TTRPG generation (16 endpoints), OpenAI Assistants API
                                            for AI tutoring (built in 1 day), and GPT-4o for dual-stage data validation.
                                            Each integration solves a specific problem — not AI for AI's sake.
                                        </p>
                                    </div>
                                    <div className="group bg-background border border-border rounded-lg p-5 hover:border-accent/20 transition-all duration-300">
                                        <h4 className="text-text-primary font-semibold mb-3 flex items-center gap-2">
                                            <span className="text-accent group-hover:translate-x-0.5 transition-transform">▹</span>
                                            Constraint-Driven Architecture
                                        </h4>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            Built a cloud IDE for prison networks where WebSocket is blocked,
                                            terminal access doesn't exist, and standard CDN approaches fail.
                                            When the easy path doesn't exist, you find the path that does.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="group bg-background border border-border rounded-lg p-5 hover:border-accent/20 transition-all duration-300">
                                        <h4 className="text-text-primary font-semibold mb-3 flex items-center gap-2">
                                            <span className="text-accent group-hover:translate-x-0.5 transition-transform">▹</span>
                                            Velocity Under Constraints
                                        </h4>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            52,000-line data pipeline in one week. AI tutoring platform in one day.
                                            24,700-line TTRPG platform in nights and weekends. Two jobs, four kids —
                                            every architectural decision has to count when time is your scarcest resource.
                                        </p>
                                    </div>
                                    <div className="group bg-background border border-border rounded-lg p-5 hover:border-accent/20 transition-all duration-300">
                                        <h4 className="text-text-primary font-semibold mb-3 flex items-center gap-2">
                                            <span className="text-accent group-hover:translate-x-0.5 transition-transform">▹</span>
                                            Security as Architecture, Not Afterthought
                                        </h4>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            Eliminated 7 security vulnerability categories including command injection and RCE.
                                            Enterprise auth from scratch (TOTP, MFA, progressive lockout). Edge protection,
                                            monitoring, and HTTP-only auth via reverse proxy — part of the foundation from
                                            day one, not bolted on after a breach.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack Grid - Now Second */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8"
                >
                    <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Daily Tools
                    </h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {techCategories.map((category) => (
                        <motion.div
                            key={category.name}
                            variants={itemVariants}
                            whileHover={{ y: -3 }}
                            className="group bg-surface border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                        >
                            <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:shadow-[0_0_8px_var(--color-accent)] transition-shadow duration-300" />
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 text-xs font-mono bg-background text-text-secondary rounded-lg border border-border hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;

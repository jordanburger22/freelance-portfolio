import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/portfolio';
import GitHubContributions from '../components/GitHubContributions';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-surface">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--color-text-secondary) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-text-secondary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
              About Me
            </h2>
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-background border border-border rounded-xl p-6 space-y-4 hover:border-border-hover transition-colors duration-300">
              <p className="text-text-secondary leading-relaxed text-lg">
                I went from teaching bootcamp students to <span className="text-text-primary font-semibold">Acting CTO</span> and
                shipping <span className="text-text-primary font-semibold">AI-integrated platforms</span> in under two years. Not through
                shortcuts — through constraints that forced creative solutions.
              </p>

              <p className="text-text-secondary leading-relaxed">
                At <span className="text-accent font-medium">Simply Coding</span>,
                I architected 330,000+ lines across 9 repositories — a cloud IDE that works in
                prison networks, a certification engine, and an AI tutoring system I built in a single day.
                Optimized builds 97% faster and eliminated 7 security vulnerability categories.
              </p>

              <p className="text-text-secondary leading-relaxed">
                At <span className="text-accent font-medium">GunKustom</span>,
                I built 60.2% of the platform as Acting CTO — including a 52,000-line data pipeline
                sole-authored in one week. 305 commits across backend, frontend, and data pipeline.
              </p>

              <p className="text-text-secondary leading-relaxed">
                In my off-hours, I built <span className="text-accent font-medium">Fablheim</span> — an AI-powered
                TTRPG platform with 16 Anthropic Claude endpoints and real-time multiplayer.
                Two jobs, four kids, and production systems shipped every month.
              </p>
            </div>

            {/* Current status card */}
            <div className="bg-background border border-border rounded-xl p-6 hover:border-border-hover transition-colors duration-300">
              <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Currently
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center gap-3 hover:text-text-primary transition-colors duration-200">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Acting CTO at GunKustom</span>
                </li>
                <li className="flex items-center gap-3 hover:text-text-primary transition-colors duration-200">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Full-time Developer at Simply Coding</span>
                </li>
                <li className="flex items-center gap-3 hover:text-text-primary transition-colors duration-200">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Based in Northern Utah</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-background border border-border rounded-xl p-6 hover:border-border-hover transition-colors duration-300">
              <h3 className="text-sm font-semibold text-text-primary mb-6 uppercase tracking-wider flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Experience
              </h3>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="relative pl-6 border-l-2 border-border hover:border-accent transition-colors group"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-surface border-2 border-border group-hover:border-accent group-hover:bg-accent/10 rounded-full transition-all duration-300" />

                    <div className="mb-3">
                      <h4 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                        {exp.company}
                      </h4>
                      <span className="inline-block px-2 py-1 text-xs font-mono bg-surface border border-border rounded text-accent">
                        {exp.type}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {exp.roles.map((role) => (
                        <div key={role.title} className="text-sm">
                          <p className="text-text-primary">{role.title}</p>
                          <p className="text-text-secondary font-mono text-xs">
                            {role.period}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Contributions - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <GitHubContributions username="jordanburger22" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      {/* Decorative elements */}
      <div className="absolute -inset-px bg-gradient-to-r from-accent/20 via-transparent to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      <div className="relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300">
        {/* Color accent bar */}
        <div
          className="h-1 w-full"
          style={{ backgroundColor: project.color }}
        />

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                  {project.title}
                </h3>
              </div>
              <p className="text-accent font-medium">{project.role}</p>
            </div>
            <span className="px-4 py-2 text-xs font-mono bg-background rounded-lg text-text-secondary border border-border">
              {project.timeline}
            </span>
          </div>

          {/* Description */}
          <div className="bg-background/50 border border-border rounded-xl p-5 mb-8">
            <p className="text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {project.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="bg-background border border-border rounded-xl p-4 hover:border-accent/30 transition-colors"
              >
                <p className="text-2xl font-bold text-text-primary mb-1">
                  {highlight.value}
                </p>
                <p className="text-xs text-text-secondary">{highlight.label}</p>
              </div>
            ))}
          </div>

          {/* Two column layout for achievements and tech */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Impact */}
            <div className="bg-background/50 border border-border rounded-xl p-5">
              <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                    <span className="text-accent mt-0.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-background/50 border border-border rounded-xl p-5">
              <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono bg-background text-text-secondary rounded-lg border border-border hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors group/link"
            >
              View Full Case Study
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border hover:border-accent/50 text-text-secondary hover:text-accent rounded-lg transition-all duration-200 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--color-text-secondary) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-text-secondary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Featured Projects
            </h2>
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="text-text-secondary text-lg max-w-2xl">
            Production systems solving real problems — compatibility engines, air-gapped IDEs, 
            and enterprise platforms built under real constraints.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
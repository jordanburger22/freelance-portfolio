import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { projectDetails } from '../data/projectDetails';

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectDetails[projectId] : null;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/#projects');
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--color-text-secondary) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-text-secondary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      <div className="fixed top-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/#projects" 
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8 group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <span className="text-text-secondary font-mono text-sm">{project.timeline}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-text-secondary mb-6">
                {project.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-2 bg-surface border border-border rounded-lg text-accent font-medium">
                  {project.role}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="py-8 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {project.highlights.map((highlight, _index) => (
                <div
                  key={highlight.label}
                  className="bg-surface border border-border rounded-xl p-5 hover:border-accent/30 transition-colors"
                >
                  <p className="text-3xl font-bold text-text-primary mb-1">
                    {highlight.value}
                  </p>
                  <p className="text-sm text-text-secondary">{highlight.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Demos Section */}
        {project.demos && project.demos.length > 0 && (
          <section className="py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Live Demos
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.demos.map((demo) => (
                    <div 
                      key={demo.title}
                      className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
                    >
                      <div className="relative aspect-video bg-background">
                        <video 
                          controls
                          className="w-full h-full object-contain"
                          preload="metadata"
                        >
                          <source src={demo.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-text-primary mb-2">{demo.title}</h3>
                        <p className="text-sm text-text-secondary">{demo.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Overview */}
        <section className="py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Overview
              </h2>
              <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
                {project.overview.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed mb-4 last:mb-0">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-surface">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Challenges
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.challenges.map((challenge, index) => (
                  <div 
                    key={index}
                    className="bg-background border border-border rounded-xl p-5 flex items-start gap-4"
                  >
                    <span className="text-accent font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-text-secondary">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Deep Dives */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Featured Systems
              </h2>
              <p className="text-text-secondary">Deep dives into the most impactful technical work</p>
            </motion.div>

            <div className="space-y-8">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-surface border border-border rounded-2xl overflow-hidden"
                >
                  <div 
                    className="h-1 w-full"
                    style={{ backgroundColor: project.color }}
                  />
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-6">
                      {feature.title}
                    </h3>

                    {/* Problem */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        The Problem
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {feature.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        The Solution
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {feature.solution}
                      </p>
                    </div>

                    {/* Two column: Technical Details + Business Impact */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-background border border-border rounded-xl p-5">
                        <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          Technical Details
                        </h4>
                        <ul className="space-y-2">
                          {feature.technicalDetails.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                              <span className="text-accent mt-0.5">▹</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-background border border-border rounded-xl p-5">
                        <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          Business Impact
                        </h4>
                        <ul className="space-y-2">
                          {feature.businessImpact.map((impact, i) => (
                            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                              <span className="text-accent mt-0.5">▹</span>
                              <span>{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Code Example */}
                    {feature.codeExample && (
                      <div className="bg-background border border-border rounded-xl overflow-hidden">
                        <div className="px-4 py-2 bg-surface border-b border-border flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                          </div>
                          <span className="text-xs text-text-secondary font-mono ml-2">
                            {feature.codeExample.language}
                          </span>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-text-secondary font-mono whitespace-pre">
                            {feature.codeExample.code}
                          </code>
                        </pre>
                        {feature.codeExample.caption && (
                          <div className="px-4 py-2 border-t border-border">
                            <p className="text-xs text-text-secondary italic">
                              {feature.codeExample.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-surface">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Tech Stack
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.techStack.map((category) => (
                  <div 
                    key={category.category}
                    className="bg-background border border-border rounded-xl p-5"
                  >
                    <h3 className="text-sm font-semibold text-text-primary mb-3">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-xs font-mono bg-surface text-text-secondary rounded-lg border border-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Outcomes
              </h2>
              <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
                <ul className="space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-medium">
                        ✓
                      </span>
                      <span className="text-text-secondary">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Projects CTA */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-surface">
          <div className="max-w-5xl mx-auto text-center">
            <a
              href="/#projects"
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-200 group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Projects
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
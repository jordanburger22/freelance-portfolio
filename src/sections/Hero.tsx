import { motion } from 'framer-motion';
import { stats } from '../data/portfolio';
import headshot from '../assets/headshot.jpg';
import CodeTypingAnimation from '../components/CodeTypingAnimation';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--color-text-secondary) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-text-secondary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20">
        {/* Main hero grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left column - Main content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Intro badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-secondary">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name and title */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4"
              >
                Jordan Burger
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl font-medium text-accent"
              >
                Full Stack Engineer & System Architect
              </motion.h2>
            </div>

            {/* Description card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6"
            >
              <p className="text-text-secondary leading-relaxed">
                I build systems that solve problems others can't — or won't. A <span className="text-text-primary font-semibold">compatibility engine</span> that 
                encodes mechanical engineering constraints no firearms retailer has matched. A <span className="text-text-primary font-semibold">cloud IDE</span> that 
                runs in prison networks where Replit and CodeSandbox literally cannot function. Two jobs, four kids, 
                and production systems shipped every month.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-surface border border-border hover:border-accent/50 text-text-primary font-medium rounded-lg transition-all duration-200"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Code typing animation */}
            <CodeTypingAnimation />
          </div>

          {/* Right column - Image and stats */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headshot card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-2xl blur-xl" />
              <div className="absolute -top-2 -right-2 w-20 h-20 border-t-2 border-r-2 border-accent/30 rounded-tr-2xl" />
              <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-2 border-l-2 border-accent/30 rounded-bl-2xl" />
              
              <div className="relative bg-surface border border-border rounded-2xl p-3">
                <img
                  src={headshot}
                  alt="Jordan Burger"
                  loading="eager"
                  className="w-full aspect-square object-cover rounded-xl"
                />
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-surface border border-border rounded-xl p-4 hover:border-accent/30 transition-colors"
                >
                  <p className="text-2xl md:text-3xl font-bold text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-secondary mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-text-secondary"
          >
            <span className="text-xs font-mono">scroll</span>
            <div className="w-5 h-8 border-2 border-border rounded-full flex justify-center pt-1.5">
              <motion.div className="w-1 h-1 bg-text-secondary rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
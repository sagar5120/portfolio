import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">
            A selection of projects I've built — each solving a real-world problem with clean code and thoughtful UX.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

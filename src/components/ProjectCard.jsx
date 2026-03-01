import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Scale, Car, Globe, ArrowUpRight } from 'lucide-react';

const iconMap = { Scale, Car, Globe };

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = iconMap[project.icon] || Globe;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl ${project.featured ? 'row-span-1' : ''}`}
    >
      {/* ── Gradient header ─────────────────────────────────────── */}
      <div className={`h-36 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22/%3E%3C/svg%3E')]" />
        {/* Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        {/* Feature badge */}
        {project.featured && (
          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30">
            Featured
          </span>
        )}
        {/* Category */}
        <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-black/20 text-white backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-indigo-500 dark:text-indigo-400 font-semibold mb-3">{project.subtitle}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/50">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-4 py-2 flex-1 justify-center"
          >
            Live Demo
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="w-10 h-10 rounded-xl flex items-center justify-center btn-secondary !px-0"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export { ProjectCard };

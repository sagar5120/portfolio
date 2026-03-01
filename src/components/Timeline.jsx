import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Code2, GraduationCap, Briefcase, BookOpen, Lightbulb } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const iconMap = { Users, Code2, GraduationCap, Briefcase, BookOpen, Lightbulb };

const typeStyle = {
  Community:  'bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300',
  Work:       'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300',
  Education:  'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300',
  Leadership: 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300',
  Program:    'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300',
};

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = iconMap[item.icon] || Briefcase;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12 pb-10 last:pb-0"
    >
      {/* Vertical line */}
      {index < portfolio.experience.length - 1 && (
        <div className="absolute left-4 top-10 w-px h-full bg-gradient-to-b from-indigo-300/50 dark:from-indigo-700/50 to-transparent" />
      )}

      {/* Icon node */}
      <div className="absolute left-0 top-0 w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-4 ring-white dark:ring-slate-950">
        <Icon className="w-4 h-4 text-white" />
      </div>

      {/* Card */}
      <div className="glass-card p-6 hover:shadow-indigo-500/10 hover:glow-indigo group transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{item.role}</h3>
            <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm mt-0.5">{item.org}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${typeStyle[item.type]}`}>{item.type}</span>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">{item.period}</span>
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Experience & Community</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-desc">
            From college hackathons to leading a thriving tech community — every step shaped how I think about software and people.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {portfolio.experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

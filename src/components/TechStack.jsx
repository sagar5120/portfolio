import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Server, Database, Smartphone } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const iconMap = { Monitor, Server, Database, Smartphone };

function SkillItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
          {item.name}
        </span>
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500">{item.level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${item.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.li>
  );
}

function CategoryCard({ cat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = iconMap[cat.icon] || Monitor;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-6"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white">{cat.category}</h3>
      </div>

      {/* Skill bars */}
      <ul className="space-y-4">
        {cat.items.map((item, i) => (
          <SkillItem key={item.name} item={item} index={i} />
        ))}
      </ul>
    </motion.div>
  );
}

export default function TechStack() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-desc">
            Technologies I work with daily — from crafting pixel-perfect UIs to designing resilient backend architectures.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {portfolio.skills.map((cat, i) => (
            <CategoryCard key={cat.category} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

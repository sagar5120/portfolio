import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Code2, Palette, PenLine, Award } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const iconMap = { Trophy, Code2, Palette, PenLine, Award };

export default function AwardsAndCerts() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="awards" className="py-24 bg-white dark:bg-slate-950">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Recognition & Learning</span>
          <h2 className="section-title">Awards & Certifications</h2>
          <p className="section-desc">
            Milestones that reflect continuous growth — from campus recognition to industry-recognised training.
          </p>
        </motion.div>

        {/* Awards */}
        <div className="mb-12">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-500" />
            Awards
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.awards.map((award, i) => {
              const Icon = iconMap[award.icon] || Award;
              return (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={headerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card p-6 flex gap-4 items-start group hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">{award.title}</h4>
                    <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">{award.org}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{award.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-500" />
            Certifications & Roles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.certifications.map((cert, i) => {
              const Icon = iconMap[cert.icon] || Code2;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={headerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card overflow-hidden group hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Colour bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color}`} />
                  <div className="p-6 flex gap-4 items-start">
                    <div className={`w-11 h-11 flex-shrink-0 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">{cert.title}</h4>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{cert.issuer}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

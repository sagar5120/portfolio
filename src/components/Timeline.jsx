import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Users, Code2, GraduationCap, Briefcase, BookOpen, Lightbulb, Trophy, Palette, PenLine, Award, ImageIcon } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const iconMap = { Users, Code2, GraduationCap, Briefcase, BookOpen, Lightbulb, Trophy, Palette, PenLine, Award };

const typeStyle = {
  Community:  'bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300',
  Work:       'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300',
  Education:  'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300',
  Leadership: 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300',
  Program:    'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300',
  Award:      'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300',
};

function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [showImage, setShowImage] = useState(false);
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
      {!isLast && (
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
            {item.orgUrl ? (
              <a href={item.orgUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm mt-0.5 hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors block">
                {item.org}
              </a>
            ) : (
              <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm mt-0.5">{item.org}</p>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {item.type && <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${typeStyle[item.type] || typeStyle.Work}`}>{item.type}</span>}
            {item.period && <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">{item.period}</span>}
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

        {item.image && (
          <div className="mb-4">
            <button 
              onClick={() => setShowImage(!showImage)}
              className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              <ImageIcon className="w-4 h-4" />
              {showImage ? 'Hide Certificate' : 'View Certificate'}
            </button>
            <AnimatePresence>
              {showImage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 overflow-hidden rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"
                >
                  <img src={item.image} alt={`${item.role} certificate`} className="w-full h-auto object-cover" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState('Experiences');

  const tabs = ['Experiences', 'Trainings', 'Awards'];

  const getFilteredItems = () => {
    switch (activeTab) {
      case 'Experiences':
        return portfolio.experience.filter(item => item.type === 'Community' || item.type === 'Leadership' || item.type === 'Work');
      case 'Trainings': {
        const expTrainings = portfolio.experience.filter(item => item.type === 'Education' || item.type === 'Program');
        const certs = portfolio.certifications.map((cert) => ({
          id: `cert-${cert.id}`,
          role: cert.title,
          org: cert.issuer,
          period: 'Certification',
          type: 'Education',
          description: cert.description,
          icon: cert.icon,
          image: cert.image,
          tags: []
        }));
        return [...certs, ...expTrainings];
      }
      case 'Awards':
        return portfolio.awards.map((award) => ({
          id: `award-${award.id}`,
          role: award.title,
          org: award.org,
          period: 'Award',
          type: 'Award',
          description: award.description,
          icon: award.icon,
          image: award.image,
          tags: []
        }));
      default:
        return [];
    }
  };

  const displayedItems = getFilteredItems();

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
          <span className="section-label">Experience & Growth</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-desc">
            From college hackathons to leading a thriving tech community — every step shaped how I think about software and people.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {displayedItems.length > 0 ? (
                displayedItems.map((item, i) => (
                  <TimelineItem key={item.id} item={item} index={i} isLast={i === displayedItems.length - 1} />
                ))
              ) : (
                <div className="text-center py-10 text-slate-500 dark:text-slate-400">
                  No items found for this category.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

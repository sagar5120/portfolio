import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Sparkles, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const iconMap = { Github, Linkedin, Twitter };

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.querySelector('#about');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* ── Ambient blobs ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/8 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-violet-500/10 dark:bg-violet-500/8 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500/5 to-violet-500/5 blur-3xl" />
      </div>

      {/* ── Grid dots ───────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(99,102,241,0.07)_1px,_transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="section-container relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 tracking-wide">
              {portfolio.availability}
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">{portfolio.name}</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2 font-bold text-slate-700 dark:text-slate-300">
              {portfolio.tagline}
            </span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-4 leading-relaxed"
          >
            {portfolio.bio}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 mb-10"
          >
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium">{portfolio.location}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#projects');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
              className="btn-primary text-base"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="/resume.pdf" download className="btn-secondary text-base">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex items-center gap-3"
          >
            {portfolio.social.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                </a>
              );
            })}
            <span className="h-px w-8 bg-slate-200 dark:bg-slate-700" />
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">Find me online</span>
          </motion.div>
        </div>
      </div>

      {/* ── Stats bar ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="section-container">
          <div className="flex flex-wrap gap-px overflow-hidden rounded-t-2xl border border-b-0 border-slate-200/70 dark:border-slate-800/70 bg-slate-200/70 dark:bg-slate-800/70">
            {portfolio.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 min-w-28 flex flex-col items-center justify-center py-4 px-2 bg-white dark:bg-slate-950 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 transition-colors duration-200"
              >
                <span className="text-2xl font-black gradient-text">{stat.value}</span>
                <span className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Scroll nudge ────────────────────────────────────────────────── */}
      <motion.button
        onClick={handleScrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-300 dark:text-slate-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase rotate-90">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}

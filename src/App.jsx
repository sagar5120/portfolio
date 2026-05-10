import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import { portfolio } from './data/portfolio';
import { MapPin, Users, Sparkles, School, Store } from 'lucide-react';

// ── About Section (inline, lightweight) ─────────────────────────────────────
function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">About Me</span>
            <h2 className="section-title">Who I Am</h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              I'm <strong className="text-slate-900 dark:text-white">{portfolio.name}</strong>, a passionate Full-Stack Developer based in{' '}
              <span className="text-indigo-500 font-semibold">{portfolio.location}</span>. I thrive at the intersection of clean design and performant code.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              As <strong className="text-slate-800 dark:text-slate-200">Club President of <a href="https://www.facebook.com/profile.php?id=100094504922018" target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600 dark:text-indigo-400">BMC IT Club</a></strong> at Bhairahawa Multiple Campus, <strong className="text-slate-800 dark:text-slate-200">Secretary at <a href="https://www.facebook.com/neptechtribe" target="_blank" rel="noopener noreferrer" className="hover:underline text-violet-600 dark:text-violet-400">Neptech Tribe</a></strong>, and <strong className="text-slate-800 dark:text-slate-200">Sales Manager at <a href="https://www.facebook.com/sagarhardware" target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-600 dark:text-emerald-400">Sagar Hardware and Ply Stores</a></strong>, I'm committed to growing Nepal's developer ecosystem through mentorship, collaboration, and real-world impact.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/profile.php?id=100094504922018" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20 hover:scale-105 transition-transform cursor-pointer">
                <School className="w-4 h-4 text-indigo-500" />
                <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">BMC IT Club</span>
              </a>
              <a href="https://www.facebook.com/neptechtribe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-50 dark:bg-violet-500/10 border border-violet-200/60 dark:border-violet-500/20 hover:scale-105 transition-transform cursor-pointer">
                <Users className="w-4 h-4 text-violet-500" />
                <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">Neptech Tribe</span>
              </a>
              <a href="https://www.facebook.com/sagarhardware" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 hover:scale-105 transition-transform cursor-pointer">
                <Store className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Sagar Hardware</span>
              </a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Card stack */}
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Back card */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-600 rotate-6 opacity-30 blur-sm" />
              {/* Middle card */}
              <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 rotate-3 opacity-50" />
              {/* Main card */}
              <div className="relative glass-card rounded-3xl h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
                {/* Avatar initials */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-indigo-500/30">
                  SB
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">{portfolio.name}</h3>
                  <p className="text-sm text-indigo-500 font-semibold">{portfolio.tagline}</p>
                </div>
                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3 w-full mt-2">
                  {portfolio.stats.slice(0, 4).map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                      <div className="text-xl font-black gradient-text">{stat.value}</div>
                      <div className="text-[10px] font-medium text-slate-400 dark:text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <TechStack />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

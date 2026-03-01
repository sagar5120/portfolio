import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code2, Heart, ArrowUp } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const iconMap = { Github, Linkedin, Twitter };

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/60">
      <div className="section-container py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-white text-sm">
              {portfolio.name}
              <span className="text-indigo-400">.</span>
            </span>
          </div>

          {/* Copy */}
          <p className="text-xs text-slate-500 flex items-center gap-1 order-3 sm:order-2">
            © {new Date().getFullYear()} {portfolio.name} — Built with
            <Heart className="w-3 h-3 text-rose-500 inline mx-0.5" />
            in Butwal, Nepal
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2 order-2 sm:order-3">
            {portfolio.social.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200"
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                </a>
              );
            })}

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200 ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

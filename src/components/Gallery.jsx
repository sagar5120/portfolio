import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const items = portfolio.gallery;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, items.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
    })
  };

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="section-container max-w-6xl">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="section-label mx-auto">Moments</span>
          <h2 className="section-title">Image Gallery</h2>
          <p className="section-desc mx-auto">
            A glimpse into my journey, events, and community involvements.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-900 group">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              {/* Blurred Background Layer for Empty Space */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 blur-3xl scale-110"
                style={{ backgroundImage: `url(${currentItem.image})` }}
              />
              {/* Main Image - Fully Visible */}
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-contain relative z-0 py-8"
              />
              {/* Dark Gradient Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent flex flex-col justify-end p-8 md:p-12 z-10 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">{currentItem.title}</h3>
                  <p className="text-sm md:text-lg text-slate-300 max-w-3xl">{currentItem.description}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap px-4">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => goToSlide(idx)}
              className={`relative overflow-hidden rounded-xl transition-all duration-500 ease-out ${
                idx === currentIndex 
                  ? 'w-24 h-16 ring-2 ring-indigo-500 shadow-lg shadow-indigo-500/20 opacity-100 z-10' 
                  : 'w-16 h-12 opacity-40 hover:opacity-80 grayscale hover:grayscale-0'
              }`}
            >
              <img src={item.image} alt="thumbnail" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

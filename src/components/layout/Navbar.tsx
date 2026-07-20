import React from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex justify-between items-center">
          <motion.a 
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 transition-colors duration-500">Openenergy</span>
            <span className="text-3xl md:text-4xl font-black text-solar-orange leading-none translate-y-[2px] group-hover:scale-125 transition-transform duration-300">.</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Finance', 'About'].map((item) => (
              <motion.a 
                key={item}
                href={`/${item.toLowerCase()}`} 
                whileHover={{ y: -2 }}
                className={`text-sm font-bold tracking-tight transition-colors duration-500 ${
                  scrolled ? 'text-slate-600 hover:text-solar-orange' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
              className="p-2 rounded-xl transition-colors text-slate-900 bg-slate-100 hover:bg-slate-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl absolute top-full left-0 w-full"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {['Services', 'Finance', 'About'].map((item) => (
                <a 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="block px-4 py-3 text-lg font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md flex justify-center items-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

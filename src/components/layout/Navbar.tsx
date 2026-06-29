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
        scrolled ? 'py-4 bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'py-6 bg-transparent'
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
            <span className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}>Openenergy</span>
            <span className="text-3xl md:text-4xl font-black text-solar-orange leading-none translate-y-[2px] group-hover:scale-125 transition-transform duration-300">.</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Finance', 'About'].map((item) => (
              <motion.a 
                key={item}
                href={`/${item.toLowerCase()}`} 
                whileHover={{ y: -2 }}
                className={`text-sm font-bold tracking-wide uppercase transition-colors duration-500 ${
                  scrolled ? 'text-gray-600 hover:text-solar-orange' : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden bg-solar-orange text-white px-8 py-3 rounded-2xl font-bold text-sm tracking-widest uppercase shadow-xl shadow-orange-500/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
              className={`p-2 rounded-xl transition-colors ${scrolled ? 'text-gray-900 bg-gray-100' : 'text-white bg-white/10'}`}
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
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {['Services', 'Finance', 'About'].map((item) => (
                <a 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="block px-4 py-3 text-lg font-bold text-gray-900 hover:bg-gray-50 rounded-2xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-solar-orange text-white px-6 py-4 rounded-[2rem] font-bold text-lg shadow-xl shadow-orange-500/20">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

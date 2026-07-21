import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'Funding', href: '#funding' },
    { name: 'About Us', href: '#about' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-white/80 backdrop-blur-xl shadow-glass border-b border-slate-100' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <motion.a 
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img 
              src="/OEMLogo.png" 
              alt="Open Energy Services Logo" 
              className="h-8 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-primary-navy transition-colors duration-500">
              Open Energy Services
            </span>
          </motion.a>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <motion.a 
                key={item.name}
                href={item.href} 
                whileHover={{ y: -2 }}
                className={`text-[15px] font-medium tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-text hover:text-emerald' : 'text-primary-navy hover:text-emerald'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a 
              href="#eligibility"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden bg-emerald text-white px-6 py-2.5 rounded-xl font-semibold text-[15px] shadow-soft hover:shadow-lg hover:shadow-emerald/20 transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Check My Eligibility
              </span>
            </motion.a>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
              className="p-2 rounded-xl transition-colors text-primary-navy hover:bg-slate-100"
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
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl absolute top-full left-0 w-full"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              {navLinks.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="block py-3 text-lg font-medium text-text hover:text-emerald transition-colors tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#eligibility"
                onClick={() => setIsOpen(false)}
                className="w-full bg-emerald text-white px-6 py-4 rounded-xl font-bold text-lg shadow-soft flex justify-center items-center gap-2 mt-4"
              >
                Check My Eligibility
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

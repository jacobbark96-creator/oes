import React, { useState, useEffect } from 'react';
import { Menu, X, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadBillModal } from '../ui/UploadBillModal';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/services' },
    { name: 'Funding', href: '/funding' },
    { name: 'Resources', href: '/resources' },
    { name: 'About OES', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div className="container">
        <div
          className={`flex items-center justify-between rounded-[28px] border px-4 py-3 shadow-soft transition-all duration-500 md:px-6 ${
            scrolled
              ? 'border-slate-200/80 bg-white/88 backdrop-blur-xl'
              : 'border-white/60 bg-white/72 backdrop-blur-lg'
          }`}
        >
          <motion.a 
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group relative block h-14 w-[12rem] sm:w-[14rem] md:h-16 md:w-[16rem] lg:h-[4.5rem] lg:w-[18rem]"
          >
            <img 
              src="/OEMLogo.png" 
              alt="Open Energy Services Logo" 
              className="pointer-events-none absolute left-[-1.75rem] top-[-2.7rem] h-[8.75rem] max-w-none object-contain scale-[1.4] sm:scale-[1.5] origin-[25%_center] transition-transform duration-300 group-hover:scale-[1.45] sm:group-hover:scale-[1.55] md:left-[-2rem] md:top-[-3rem] md:h-[10rem] lg:left-[-2.35rem] lg:top-[-3.55rem] lg:h-[11.5rem]"
            />
          </motion.a>
          
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <motion.a 
                key={item.name}
                href={item.href} 
                whileHover={{ y: -2 }}
                className="text-[15px] font-medium tracking-tight text-primary-navy/82 transition-colors duration-300 hover:text-primary-navy"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a 
              href="/eligibility"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-2xl bg-primary-navy px-5 py-3 text-[15px] font-semibold text-white shadow-soft transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary-navy/15"
            >
              <span className="relative z-10">Check My Eligibility</span>
            </motion.a>
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Upload Bill"
              title="Upload Bill"
              className="inline-flex items-center justify-center rounded-2xl bg-orange-500 p-3 text-white shadow-soft transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <Upload size={20} />
            </motion.button>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
              className="rounded-xl p-2 text-primary-navy transition-colors hover:bg-slate-100"
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
            className="absolute left-0 top-full mt-3 w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl lg:hidden"
          >
            <div className="space-y-2 px-6 pb-6 pt-4">
              {navLinks.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="block rounded-2xl px-3 py-3 text-base font-medium tracking-tight text-text transition-colors hover:bg-slate-50 hover:text-primary-navy"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="/eligibility"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex w-full items-center justify-center rounded-2xl bg-primary-navy px-6 py-4 text-base font-semibold text-white shadow-soft"
              >
                Check My Eligibility
              </a>
              <button 
                onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-soft transition-colors hover:bg-orange-600"
              >
                <Upload size={20} />
                Upload Bill
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <UploadBillModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

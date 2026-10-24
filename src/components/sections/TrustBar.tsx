import React, { useState, useEffect } from 'react';
import { ShieldCheck, PoundSterling, Users, MapPin, Handshake, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TrustBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { 
      isRating: true,
      text: "5.0 Rating" 
    },
    { icon: ShieldCheck, text: "Independent Advice" },
    { icon: PoundSterling, text: "Government Funding Experts" },
    { icon: Users, text: "Trusted Installer Network" },
    { icon: MapPin, text: "Nationwide Coverage" },
    { icon: Handshake, text: "End-to-End Support" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3500); // Fades every 3.5 seconds
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section className="relative z-20 -mt-3 bg-transparent pb-6 md:pb-8">
      <div className="container max-w-3xl">
        <div className="flex min-h-[140px] items-center justify-center rounded-[2rem] border border-primary-navy/10 bg-white/88 p-6 shadow-[0_26px_80px_-34px_rgba(14,35,65,0.24)] backdrop-blur-xl">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex w-full flex-col items-center justify-center gap-3 text-center"
            >
              {items[currentIndex].isRating ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex gap-1.5 text-emerald mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-primary-navy">5.0 Rating</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Based on Reviews</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-light text-emerald">
                    {React.createElement(items[currentIndex].icon as any, { size: 28, strokeWidth: 2 })}
                  </div>
                  <span className="text-lg font-semibold text-primary-navy">{items[currentIndex].text}</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

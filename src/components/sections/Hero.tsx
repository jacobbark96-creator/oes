import React from 'react';
import { Wizard } from '../wizard/Wizard';
import { ShieldCheck, Zap, TrendingDown, Star, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-solar-dark pt-20">
      {/* Dynamic Background with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80" 
          alt="Solar Panels" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-solar-dark via-solar-dark/95 to-solar-dark" />
        
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-solar-orange/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" 
        />
      </motion.div>

      <div className="container-wide relative z-10 w-full h-full flex flex-col justify-center py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-white order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <Star className="text-solar-orange fill-solar-orange" size={16} />
                <span className="text-sm font-semibold tracking-wide uppercase">UK's Most Trusted Solar Provider</span>
              </div>
              
              <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.1] mb-8 tracking-tight">
                Power your home <br />
                <motion.span 
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-solar-orange via-amber-400 to-solar-orange bg-[length:200%_auto]"
                >
                  for free.
                </motion.span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-xl leading-relaxed font-light">
                Premium solar solutions that eliminate electricity bills and reduce carbon emissions. Join 5,000+ UK homeowners who have already switched.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: ShieldCheck, label: "25 Year Warranty", desc: "Performance guaranteed" },
                  { icon: TrendingDown, label: "Up to 70% Savings", desc: "Immediate bill reduction" },
                  { icon: Zap, label: "Smart Battery Ready", desc: "Future-proof systems" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex flex-col gap-3 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-solar-orange backdrop-blur-md group-hover:bg-solar-orange group-hover:text-white transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-200">{item.label}</h3>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Bar */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <Award size={24} />
                  <span className="font-bold text-lg">MCS Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={24} />
                  <span className="font-bold text-lg">HIES Member</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={24} />
                  <span className="font-bold text-lg">RECC Approved</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Wizard Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full order-2 relative"
          >
            <div className="absolute inset-0 bg-solar-orange/20 blur-[100px] rounded-full z-0" />
            <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-1 rounded-[2.5rem] shadow-2xl">
              <Wizard />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

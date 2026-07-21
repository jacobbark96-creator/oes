import React from 'react';
import { Wizard } from '../wizard/Wizard';
import { ShieldCheck, Zap, TrendingDown, Star, Award, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      {/* Dynamic Background with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        {/* Base Architecture Image */}
        <img 
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format,compress&fit=crop&w=1920&q=80" 
          alt="Premium Solar Home" 
          className="w-full h-full object-cover opacity-[0.15]"
        />
        
        {/* Subtle Texture/Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        
        {/* Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/95 to-slate-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent opacity-90" />
        
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
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-300/40 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" 
        />
      </motion.div>

      <div className="container-wide relative z-10 w-full h-full flex flex-col justify-center py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-8 text-slate-900 order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                <CheckCircle2 size={16} className="text-solar-orange" />
                <span className="text-sm font-bold tracking-tight text-slate-700">100% Free Matching Service. No hidden fees.</span>
              </div>

              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.05] mb-8 tracking-tighter text-slate-900">
                Find your perfect <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-amber-500">
                  vetted installer.
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium tracking-tight">
                We are not an installer. We are your independent partner helping you compare quotes from top-rated UK solar professionals—completely free of charge.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: ShieldCheck, label: "Vetted Partners", desc: "MCS certified only" },
                  { icon: TrendingDown, label: "Compare Quotes", desc: "Save up to 30%" },
                  { icon: Zap, label: "Independent Advice", desc: "Zero bias, 100% free" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex flex-col gap-2 group p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-solar-orange/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-solar-orange group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm tracking-tight">{item.label}</h3>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Bar */}
              <div className="pt-8 flex flex-wrap items-center gap-8 text-slate-400">
                <div className="flex items-center gap-2">
                  <Award size={20} />
                  <span className="font-bold text-sm tracking-tight">MCS Certified Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span className="font-bold text-sm tracking-tight">HIES Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} />
                  <span className="font-bold text-sm tracking-tight">RECC Approved</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Wizard Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 w-full order-2 relative"
          >
            <div className="absolute inset-0 bg-solar-orange/10 blur-[100px] rounded-full z-0" />
            <div className="relative z-10">
              <Wizard />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

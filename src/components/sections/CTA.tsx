import React from 'react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => {
  return (
    <section className="py-32 bg-solar-orange relative overflow-hidden">
      <motion.div 
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-white/10 rounded-full" 
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0],
        }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-white/10 rounded-full" 
      />
      
      <div className="container-wide text-center relative z-10">
        <motion.h2 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="text-[clamp(2rem,5vw,3.75rem)] font-bold text-white mb-8 tracking-tight"
         >
          Ready to start your <br /> solar journey?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light"
        >
          Join 5,000+ happy customers who have switched to clean, renewable energy with Open Energy Solutions.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white text-solar-dark px-12 py-5 rounded-[2rem] font-bold text-xl hover:bg-gray-50 transition-all shadow-2xl"
        >
          Get My Free Quote
        </motion.button>
      </div>
    </section>
  );
};

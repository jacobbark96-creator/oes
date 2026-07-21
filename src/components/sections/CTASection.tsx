import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary-navy relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight"
          >
            Ready to improve your property's <span className="text-emerald">energy efficiency?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 mb-12 font-medium max-w-2xl mx-auto"
          >
            Let our independent experts guide you to the right solutions, access government funding, and connect you with trusted installers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="/eligibility"
              className="w-full sm:w-auto bg-emerald text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald/20 flex items-center justify-center gap-2"
            >
              Check My Eligibility
              <ArrowRight size={20} />
            </a>
            <a 
              href="/contact"
              className="w-full sm:w-auto bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2"
            >
              <Calendar size={20} className="text-emerald" />
              Book a Free Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

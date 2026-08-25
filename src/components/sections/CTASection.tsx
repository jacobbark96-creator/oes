import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-primary-navy py-[4.5rem] md:py-20 lg:py-24">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-10 text-center shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-sm md:px-10 md:py-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.6rem]"
          >
            Ready to improve your property's <span className="text-emerald">energy efficiency?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl"
          >
            Let our independent experts guide you to the right solutions, access government funding, and connect you with trusted installers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a 
              href="/eligibility?utm_source=internal&utm_medium=website&utm_campaign=bottom_cta"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-emerald-600 hover:shadow-emerald/20 sm:w-auto"
            >
              Check My Eligibility
              <ArrowRight size={20} />
            </a>
            <a 
              href="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
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

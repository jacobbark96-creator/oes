import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const FundingSection: React.FC = () => {
  return (
    <section id="funding" className="bg-white py-[4.5rem] md:py-20 lg:py-24">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] border border-emerald/20 bg-[linear-gradient(135deg,#0E2341_0%,#102C53_54%,#1AAE63_130%)] p-8 shadow-[0_30px_90px_-36px_rgba(14,35,65,0.42)] md:p-12 lg:p-14"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-navy/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-light/90">
                Funding Guidance
              </p>
              <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[3.05rem]">
                Could you qualify for government funding?
              </h2>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-100/88">
                We are specialists in navigating the complex landscape of UK energy grants. We can assess your property and circumstances to find out if you're eligible for free or partially funded upgrades.
              </p>
              
              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "ECO4 Scheme",
                  "Great British Insulation Scheme (GBIS)",
                  "Local Authority Delivery",
                  "Regional Energy Grants"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-2xl border border-white/14 bg-white/10 p-4 backdrop-blur-md">
                    <CheckCircle2 size={20} className="text-white flex-shrink-0" />
                    <span className="font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="/eligibility"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-semibold text-primary-navy shadow-lg transition-all hover:bg-slate-100"
              >
                Check My Eligibility
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="relative hidden min-h-[340px] lg:block">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 shadow-glass backdrop-blur-sm">
                <img 
                  src="/funding-documents.jpg" 
                  alt="Reviewing funding documents" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-navy/35 mix-blend-multiply" />
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/14 bg-white/10 p-5 text-white backdrop-blur-md">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-light/90">
                    We Translate Complexity
                  </p>
                  <p className="text-sm leading-relaxed text-white/85">
                    Clear guidance on grants, scheme fit, installer matching and next steps, without the sales pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

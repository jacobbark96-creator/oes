import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const FundingSection: React.FC = () => {
  return (
    <section id="funding" className="py-24 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-gradient rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl shadow-emerald/20"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-navy/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
                Could you qualify for government funding?
              </h2>
              <p className="text-lg text-emerald-light mb-10 leading-relaxed font-medium">
                We are specialists in navigating the complex landscape of UK energy grants. We can assess your property and circumstances to find out if you're eligible for free or partially funded upgrades.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "ECO4 Scheme",
                  "Great British Insulation Scheme (GBIS)",
                  "Local Authority Delivery",
                  "Regional Energy Grants"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <CheckCircle2 size={20} className="text-white flex-shrink-0" />
                    <span className="font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="/#eligibility"
                className="inline-flex items-center gap-2 bg-primary-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
              >
                Check My Eligibility
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="relative hidden lg:block h-full min-h-[400px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-white/20 shadow-glass transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format,compress&fit=crop&w=1000&q=80" 
                  alt="Reviewing funding documents" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-navy/20 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

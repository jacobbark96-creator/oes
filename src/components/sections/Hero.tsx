import React from 'react';
import { ShieldCheck, Star, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100dvh] lg:min-h-[85vh] flex items-center overflow-hidden bg-bg-grey pt-28 pb-12 md:py-16 md:pt-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-navy/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 text-text order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] mb-6 tracking-tighter text-primary-navy">
                Better energy solutions, <br />
                <span className="text-emerald">the right way.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-normal">
                Open Energy Services helps homeowners, landlords and businesses access government funding and connect with trusted, accredited installation partners across the UK.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a 
                  href="/eligibility"
                  className="bg-emerald text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-600 transition-all shadow-soft hover:shadow-lg hover:shadow-emerald/20 flex items-center gap-2"
                >
                  Check My Eligibility
                  <ArrowRight size={20} />
                </a>
                <a 
                  href="/how-it-works"
                  className="bg-white text-primary-navy px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all border border-slate-200 shadow-sm flex items-center gap-2"
                >
                  <Play size={20} className="text-emerald" />
                  How It Works
                </a>
              </div>

            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 order-1 lg:order-2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 aspect-[4/3] lg:aspect-square group">
              <img 
                src="/solar-hero.jpg" 
                alt="Residential solar panels on a modern home roof" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />
              
              {/* Floating Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-[-2rem] sm:bottom-12 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-glass border border-white/60 sm:w-72"
              >
                <div className="space-y-4">
                  {[
                    "Independent Advice",
                    "Trusted Installer Network",
                    "Funding Specialists"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-light flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={14} className="text-emerald" />
                      </div>
                      <span className="font-semibold text-primary-navy text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-emerald/10 rounded-[2.5rem] -z-10 transform rotate-3" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

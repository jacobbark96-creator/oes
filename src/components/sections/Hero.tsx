import React from 'react';
import { CheckCircle, ArrowRight, Play, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F7F9] pb-16 pt-32 md:pb-20 md:pt-36 lg:pb-24 lg:pt-44">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.18]">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" className="text-slate-200" fill="none" />
              <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-200" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-grey via-transparent to-bg-grey" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-grey via-transparent to-bg-grey" />
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute right-[-10rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-emerald/10 blur-[130px]" />
        <div className="absolute bottom-[-12rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-primary-navy/8 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-navy/10 bg-white/70 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-navy/70 shadow-sm backdrop-blur-sm">
                Independent Energy Consultancy
              </div>
              <h1 className="mb-6 max-w-[15ch] text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-primary-navy">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-block"
                >Reduce your</motion.span>{' '}
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-emerald inline-block"
                >energy costs.</motion.span>{' '}
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block"
                >Without</motion.span>{' '}
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="inline-block"
                >navigating it alone.</motion.span>
              </h1>
              
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-[1.15rem]">
                Open Energy Services independently assesses your energy needs, identifies the solutions that could work for you, and connects you with trusted accredited partners across the UK.
              </p>
              
              <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="flex flex-col gap-2">
                  <a 
                    href="/eligibility"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-navy px-7 py-4 text-base font-semibold text-white shadow-soft transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary-navy/20"
                  >
                    Check My Eligibility
                    <ArrowRight size={20} />
                  </a>
                  <p className="text-xs text-center font-medium text-slate-500">Free • No obligation • Takes around 60 seconds</p>
                </div>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/85 px-7 py-4 text-base font-semibold text-primary-navy shadow-sm backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-white sm:mb-6"
                >
                  <Play size={20} className="text-emerald" />
                  Speak to an Energy Advisor
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 relative lg:order-2 lg:col-span-6 lg:pl-6"
          >
            <div className="relative mx-auto max-w-[42rem] rounded-[2rem] border border-white/70 bg-white/50 p-3 shadow-[0_30px_90px_-30px_rgba(14,35,65,0.28)] backdrop-blur-sm">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-primary-navy/8 group">
                <img 
                  src="/solar-hero.jpg" 
                  alt="Residential solar panels on a modern home roof" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-primary-dark/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <div className="flex items-end justify-between gap-4 rounded-[1.4rem] border border-white/20 bg-primary-navy/55 p-5 text-white backdrop-blur-md">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-light/90">
                        Designed Around Better Outcomes
                      </p>
                      <p className="max-w-xs text-sm leading-relaxed text-white/86">
                        Every recommendation is built around suitability, funding opportunities and the right installer fit.
                      </p>
                    </div>
                    <div className="hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 md:flex">
                      <ArrowUpRight size={20} className="text-emerald-light" />
                    </div>
                  </div>
                </div>
              </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="relative mt-5 grid gap-3 sm:grid-cols-3"
            >
              {[
                { title: 'Free', desc: 'Independent guidance from first enquiry to handover' },
                { title: 'UK-wide', desc: 'Installer coverage with vetted regional delivery partners' },
                { title: 'Funding-led', desc: 'Advice shaped around eligibility, grants and value' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-1 rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-sm backdrop-blur-sm"
                >
                  <span className="font-bold text-primary-navy text-lg">{item.title}</span>
                  <span className="text-xs text-slate-600 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </motion.div>
            <div className="absolute -bottom-10 -right-6 h-36 w-36 rounded-full bg-emerald/12 blur-3xl" />
            <div className="absolute -left-6 top-12 h-24 w-24 rounded-full bg-primary-navy/8 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

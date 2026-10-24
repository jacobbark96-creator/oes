import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Tell us about your property',
      desc: 'We collect the basic information about your home, business or property.'
    },
    {
      num: '02',
      title: 'We assess your needs',
      desc: 'We look at your circumstances, energy usage and requirements.'
    },
    {
      num: '03',
      title: 'We identify your options',
      desc: 'We identify the energy solutions and funding opportunities that may be relevant.'
    },
    {
      num: '04',
      title: 'We match you with trusted partners',
      desc: 'Where appropriate, we connect you with suitable accredited installation partners.'
    },
    {
      num: '05',
      title: 'Compare your options',
      desc: 'You can understand the proposed solution, costs and available options before deciding.'
    },
    {
      num: '06',
      title: 'Get the work completed',
      desc: 'Your chosen installation partner handles the installation while OES helps guide the process.'
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-bg-grey py-[4.5rem] md:py-20 lg:py-24">
      <div className="container max-w-4xl relative z-10">
        <div className="mb-14 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-3xl font-bold tracking-tight text-primary-navy md:text-4xl lg:text-[3.1rem]"
          >
            How it works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 mb-8"
          >
            We guide you through every step—from assessing your needs to finding the right trusted installation partner.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/eligibility"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-navy px-8 py-4 text-base font-semibold text-white shadow-soft transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary-navy/20"
          >
            Check My Eligibility
          </motion.a>
        </div>

        <div className="relative mx-auto w-full rounded-[2rem] border border-slate-200/80 bg-white/50 p-3 shadow-glass backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`group overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
                    isActive 
                      ? 'border-emerald/30 bg-white shadow-[0_20px_60px_-20px_rgba(26,174,99,0.15)]' 
                      : 'border-slate-100 bg-white/80 hover:bg-white hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setActiveStep(isActive ? -1 : index)}
                    className="flex w-full items-center justify-between p-5 md:p-6 text-left outline-none"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold transition-colors duration-300 ${
                        isActive ? 'bg-emerald text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-light group-hover:text-emerald'
                      }`}>
                        {step.num}
                      </div>
                      <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-primary-navy' : 'text-slate-600 group-hover:text-primary-navy'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isActive ? 'rotate-180 bg-emerald-light text-emerald' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                    }`}>
                      <ChevronDown size={18} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-6 pt-0 md:px-6 md:pb-7 md:pl-[5.5rem]">
                          <p className="text-[15px] leading-relaxed text-slate-600 md:text-base">
                            {step.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Tell us about your property',
      desc: 'Complete our simple online eligibility checker or speak with one of our energy consultants to provide basic details about your home.'
    },
    {
      num: '02',
      title: 'We assess your eligibility',
      desc: 'Our experts determine if you qualify for fully-funded or partially-funded government grants like ECO4 or GBIS.'
    },
    {
      num: '03',
      title: 'We identify suitable improvements',
      desc: 'We provide independent advice on the best energy efficiency upgrades (like insulation, solar, or heat pumps) for your specific needs.'
    },
    {
      num: '04',
      title: 'We match you with trusted local installers',
      desc: 'We connect you with fully vetted, accredited installation partners from our nationwide network. We do not carry out installations ourselves.'
    },
    {
      num: '05',
      title: 'Receive quotations',
      desc: 'Get competitive, transparent quotes from our trusted partners. We help you compare them objectively.'
    },
    {
      num: '06',
      title: 'Choose your installer and complete your project',
      desc: 'Select the best partner for your needs. We coordinate the process and provide ongoing support until your installation is complete.'
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-bg-grey py-[4.5rem] md:py-20 lg:py-24">
      <div className="container max-w-5xl relative z-10">
        <div className="mb-14 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-3xl font-bold tracking-tight text-primary-navy md:text-4xl lg:text-[3.1rem]"
          >
            How the process works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            We coordinate everything from initial assessment to connecting you with accredited installers, ensuring a smooth, hassle-free experience.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-8 md:gap-12 lg:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-emerald bg-white shadow-soft z-10 md:flex">
                  <span className="text-emerald font-bold text-sm">{step.num}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-[0_18px_60px_-34px_rgba(14,35,65,0.22)] transition-all duration-300 hover:shadow-[0_28px_70px_-38px_rgba(14,35,65,0.26)] md:p-8">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-light font-bold text-emerald md:hidden">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-primary-navy mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                
                {/* Empty space for alignment */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

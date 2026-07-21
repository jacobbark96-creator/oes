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
    <section id="how-it-works" className="py-16 md:py-20 lg:py-24 bg-bg-grey relative">
      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 tracking-tight"
          >
            How the process works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
          >
            We coordinate everything from initial assessment to connecting you with accredited installers, ensuring a smooth, hassle-free experience.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

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
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-[3px] border-emerald items-center justify-center shadow-soft z-10">
                  <span className="text-emerald font-bold text-sm">{step.num}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="md:hidden w-10 h-10 bg-emerald-light rounded-xl flex items-center justify-center text-emerald font-bold mb-4">
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

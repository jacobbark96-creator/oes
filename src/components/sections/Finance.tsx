import React from 'react';
import { CreditCard, Building2, Wallet, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const options = [
  {
    type: 'PPA',
    name: 'Power Purchase Agreement',
    description: 'Zero upfront cost. You only pay for the energy the system produces at a rate lower than your current provider.',
    benefits: ['No capital outlay', 'Full maintenance included', 'Fixed energy rates'],
    icon: Building2,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    type: 'Finance',
    name: 'Solar Finance',
    description: 'Spread the cost of your system with competitive interest rates and flexible repayment terms.',
    benefits: ['Ownership from day one', 'Monthly savings > Repayments', 'Flexible terms'],
    icon: CreditCard,
    color: 'bg-solar-orange',
    lightColor: 'bg-orange-50',
    textColor: 'text-solar-orange'
  },
  {
    type: 'CAPEX',
    name: 'Direct Purchase',
    description: 'The highest return on investment. Pay upfront and own your energy generation outright.',
    benefits: ['Maximum ROI', 'No monthly payments', 'Increased property value'],
    icon: Wallet,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600'
  }
];

export const Finance: React.FC = () => {
  return (
    <section id="finance" className="py-32 bg-solar-dark relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-finance" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-finance)" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-solar-orange uppercase bg-solar-orange/10 rounded-full"
            >
              Finance Options
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-8 tracking-tight"
            >
              Solar made affordable <br />
              <span className="text-solar-orange">for everyone.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              We offer a range of flexible payment solutions to ensure that clean energy is accessible regardless of your budget.
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 text-solar-orange font-bold text-lg group"
          >
            Compare all options <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[3rem] hover:bg-white/10 transition-all duration-500"
            >
              <div className={`w-16 h-16 ${option.lightColor} ${option.textColor} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-black/20`}>
                <option.icon size={32} />
              </div>
              <h3 className={`text-xs font-bold ${option.textColor} uppercase mb-4 tracking-widest`}>{option.type}</h3>
              <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">{option.name}</h4>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">{option.description}</p>
              
              <div className="space-y-5 mb-12">
                {option.benefits.map((benefit, bIndex) => (
                  <div key={bIndex} className="flex items-center gap-4 text-gray-300">
                    <CheckCircle2 size={20} className={option.textColor} />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-2xl border-2 border-white/10 text-white font-bold text-lg hover:bg-white hover:text-solar-dark transition-all duration-300`}
              >
                Learn More
              </motion.button>
              
              {/* Top Accent line */}
              <div className={`absolute top-0 left-12 right-12 h-1 ${option.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

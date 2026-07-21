import React from 'react';
import { CreditCard, Building2, Wallet, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const options = [
  {
    type: 'PPA',
    name: 'Power Purchase Agreement',
    description: 'Find installers offering zero upfront cost. You only pay for the energy the system produces at a lower rate.',
    benefits: ['No capital outlay', 'Full maintenance included', 'Fixed energy rates'],
    icon: Building2,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    type: 'Finance',
    name: 'Solar Finance',
    description: 'Compare installers providing competitive interest rates and flexible repayment terms to spread the cost.',
    benefits: ['Ownership from day one', 'Monthly savings > Repayments', 'Flexible terms'],
    icon: CreditCard,
    color: 'bg-solar-orange',
    lightColor: 'bg-orange-50',
    textColor: 'text-solar-orange'
  },
  {
    type: 'CAPEX',
    name: 'Direct Purchase',
    description: 'The highest return on investment. We find you the best outright purchase quotes for maximum ROI.',
    benefits: ['Maximum ROI', 'No monthly payments', 'Increased property value'],
    icon: Wallet,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600'
  }
];

interface FinanceProps {
  titleTag?: 'h1' | 'h2';
}

export const Finance: React.FC<FinanceProps> = ({ titleTag = 'h2' }) => {
  const Title = motion[titleTag];
  return (
    <section id="finance" className="py-16 md:py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-finance" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" className="text-slate-900" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-finance)" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold tracking-widest text-slate-600 uppercase bg-white rounded-full border border-slate-200 shadow-sm"
            >
              Finance Options
            </motion.div>
            <Title 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]"
            >
              Compare quotes for <br />
              <span className="text-solar-orange">every budget.</span>
            </Title>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed font-medium tracking-tight max-w-2xl"
            >
              Whether you want to buy outright or spread the cost, we match you with installers offering flexible payment solutions.
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-slate-900 font-bold text-sm group bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm hover:border-solar-orange/30 transition-all"
          >
            Compare all options <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-white border border-slate-200 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:border-solar-orange/20"
            >
              <div className={`w-14 h-14 ${option.lightColor} ${option.textColor} rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-sm border border-slate-100`}>
                <option.icon size={24} strokeWidth={2.5} />
              </div>
              <h3 className={`text-[10px] font-bold ${option.textColor} uppercase mb-3 tracking-widest`}>{option.type}</h3>
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{option.name}</h4>
              <p className="text-slate-500 mb-8 text-sm leading-relaxed font-medium">{option.description}</p>
              
              <div className="space-y-3 mb-10">
                {option.benefits.map((benefit, bIndex) => (
                  <div key={bIndex} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 size={16} className={option.textColor} strokeWidth={2.5} />
                    <span className="font-bold text-sm tracking-tight">{benefit}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 hover:text-solar-dark transition-all duration-300 shadow-sm`}
              >
                Learn More
              </motion.button>
              
              {/* Top Accent line */}
              <div className={`absolute top-0 left-8 right-8 h-1 ${option.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

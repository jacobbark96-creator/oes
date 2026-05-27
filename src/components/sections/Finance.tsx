import React from 'react';
import { CreditCard, Building2, Wallet, ArrowRight } from 'lucide-react';

const options = [
  {
    type: 'PPA',
    name: 'Power Purchase Agreement',
    description: 'Zero upfront cost. You only pay for the energy the system produces at a rate lower than your current provider.',
    benefits: ['No capital outlay', 'Full maintenance included', 'Fixed energy rates'],
    icon: Building2,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    type: 'Finance',
    name: 'Solar Finance',
    description: 'Spread the cost of your system with competitive interest rates and flexible repayment terms.',
    benefits: ['Ownership from day one', 'Monthly savings > Repayments', 'Flexible terms'],
    icon: CreditCard,
    color: 'bg-solar-orange/10 text-solar-orange'
  },
  {
    type: 'CAPEX',
    name: 'Direct Purchase',
    description: 'The highest return on investment. Pay upfront and own your energy generation outright.',
    benefits: ['Maximum ROI', 'No monthly payments', 'Increased property value'],
    icon: Wallet,
    color: 'bg-green-50 text-green-600'
  }
];

export const Finance: React.FC = () => {
  return (
    <section id="finance" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-solar-orange uppercase tracking-widest mb-4">Finance Options</h2>
            <p className="text-4xl md:text-5xl font-bold text-solar-dark mb-6">Solar made affordable for everyone</p>
            <p className="text-xl text-gray-500">
              We offer a range of flexible payment solutions to ensure that clean energy is accessible regardless of your budget.
            </p>
          </div>
          <button className="flex items-center gap-2 text-solar-orange font-bold hover:gap-4 transition-all">
            Compare all options <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div key={index} className="p-10 rounded-3xl border border-gray-100 hover:border-solar-orange/30 transition-all shadow-sm hover:shadow-xl group">
              <div className={`w-14 h-14 ${option.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <option.icon size={28} />
              </div>
              <h3 className="text-xs font-bold text-solar-orange uppercase mb-2 tracking-widest">{option.type}</h3>
              <h4 className="text-2xl font-bold text-solar-dark mb-4">{option.name}</h4>
              <p className="text-gray-500 mb-8 leading-relaxed">{option.description}</p>
              
              <ul className="space-y-4 mb-10">
                {option.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-center gap-3 text-gray-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-solar-orange rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl border-2 border-solar-orange text-solar-orange font-bold hover:bg-solar-orange hover:text-white transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

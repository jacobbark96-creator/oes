import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you carry out installations?",
      answer: "No, Open Energy Services is an independent energy consultancy. We do not carry out installations ourselves. Instead, we provide unbiased advice and connect you with our network of fully vetted, accredited installation partners who complete the work to the highest standards."
    },
    {
      question: "How does installer matching work?",
      answer: "Once we assess your property and determine the best energy efficiency upgrades, we reach out to our nationwide network of accredited partners. We source competitive quotes from installers who specialize in your required upgrades and cover your local area, presenting you with the best options to choose from."
    },
    {
      question: "Is your advice independent?",
      answer: "Absolutely. Because we are not tied to any single manufacturer or installer, our recommendations are 100% independent and tailored entirely to what is best for your property, your budget, and your energy goals."
    },
    {
      question: "Can I choose my own installer?",
      answer: "Yes, you have complete control over the final decision. We provide you with quotes and recommendations from our trusted network, but the choice of which installation partner to proceed with is entirely yours."
    },
    {
      question: "How do funding schemes work?",
      answer: "There are several government-backed schemes available, such as ECO4 and the Great British Insulation Scheme (GBIS). We check your eligibility based on factors like your property's EPC rating, your income, and qualifying benefits. If eligible, these grants can cover some or all of the costs of your energy upgrades."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold tracking-tight text-emerald bg-emerald-light rounded-full"
          >
            Got Questions?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 tracking-tight"
          >
            Frequently asked questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-grey rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-primary-navy text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`text-emerald w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

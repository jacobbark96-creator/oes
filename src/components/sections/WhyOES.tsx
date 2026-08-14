import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const WhyOES: React.FC = () => {
  const benefits = [
    {
      title: "Independent Advice",
      desc: "We aren't tied to a single installation solution. We assess what makes sense for your property or business."
    },
    {
      title: "Trusted Installer Network",
      desc: "We connect customers with trusted, appropriately accredited installation partners."
    },
    {
      title: "Funding Expertise",
      desc: "We help identify funding and finance opportunities that may be available."
    },
    {
      title: "One Point of Contact",
      desc: "We help simplify the process from initial assessment through to finding the right installation partner."
    },
    {
      title: "No Pressure",
      desc: "Customers receive straightforward information and can make their own decision."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-bg-grey py-[4.5rem] md:py-20 lg:py-24">
      <div className="container relative z-10">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_30px_90px_-38px_rgba(14,35,65,0.3)]">
              <img 
                src="/professional-consultant.jpg" 
                alt="Professional Energy Consultant" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy/40 to-transparent" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-primary-navy md:text-4xl lg:text-[3.1rem]">
              Why use OES?
            </h2>

            <div className="flex flex-col gap-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 rounded-3xl border border-white/80 bg-white/72 p-5 shadow-sm backdrop-blur-sm transition-all hover:bg-white">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-light">
                    <CheckCircle2 size={16} className="text-emerald" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-primary-navy mb-1">{benefit.title}</h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

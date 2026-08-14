import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-[4.5rem] md:py-20 lg:py-24 relative">
      <div className="container relative z-10">
        <div className="mb-14 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-3xl font-bold tracking-tight text-primary-navy md:text-4xl lg:text-[3.1rem]"
          >
            What our clients say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            Genuine feedback from homeowners and businesses we've helped.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote: "Placeholder for genuine customer testimonial regarding their experience with OES advising on commercial solar.",
              name: "Customer Name",
              role: "Business Owner",
              location: "Manchester"
            },
            {
              quote: "Placeholder for genuine customer testimonial regarding OES helping a homeowner access ECO4 funding for insulation and a heat pump.",
              name: "Customer Name",
              role: "Homeowner",
              location: "Birmingham"
            },
            {
              quote: "Placeholder for genuine customer testimonial regarding OES guiding a landlord through improving their property's EPC rating.",
              name: "Customer Name",
              role: "Landlord",
              location: "London"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-slate-200/60 bg-slate-50 p-8"
            >
              <div className="mb-6 flex text-emerald">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <Quote size={32} className="mb-4 text-slate-200" />
              <p className="mb-6 text-slate-700 italic">{item.quote}</p>
              <div>
                <p className="font-bold text-primary-navy">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}, {item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

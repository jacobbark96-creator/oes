import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "Manchester",
      text: "Open Energy Services made the entire process so simple. They assessed our home, found us a grant we didn't even know existed, and connected us with a fantastic local installer.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&w=150&q=80"
    },
    {
      name: "David Chen",
      location: "London",
      text: "Their independent advice was exactly what we needed. They took the time to explain all our options without any sales pressure, and the installer they matched us with was excellent.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format,compress&fit=crop&w=150&q=80"
    },
    {
      name: "Emma Thompson",
      location: "Birmingham",
      text: "From the initial eligibility check to the final installation of our heat pump, the team at OES was supportive and communicative. Highly recommend their service.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format,compress&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-bg-grey relative">
      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold tracking-tight text-emerald bg-emerald-light rounded-full"
          >
            Customer Reviews
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 tracking-tight"
          >
            Don't just take our word for it.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <span className="font-bold text-primary-navy">Excellent</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="bg-[#00B67A] p-1.5 rounded-sm">
                  <Star className="text-white w-4 h-4 fill-current" />
                </div>
              ))}
            </div>
            <span className="font-medium text-slate-500">1,200+ reviews on Trustpilot</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-glass"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="bg-[#00B67A] p-1 rounded-sm">
                    <Star className="text-white w-3 h-3 fill-current" />
                  </div>
                ))}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-primary-navy text-sm">{review.name}</h4>
                  <p className="text-slate-500 text-xs font-medium">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

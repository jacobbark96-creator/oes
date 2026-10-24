import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Extracted exact star coordinates from the provided map image
const PINS = [
    { id: 0, top: '95.38%', left: '54.64%', delay: '0.00s', isMajor: false },
    { id: 1, top: '95.06%', left: '50.27%', delay: '0.10s', isMajor: false },
    { id: 2, top: '94.49%', left: '54.91%', delay: '0.20s', isMajor: false },
    { id: 3, top: '93.11%', left: '66.27%', delay: '0.30s', isMajor: false },
    { id: 4, top: '91.17%', left: '57.55%', delay: '0.40s', isMajor: false },
    { id: 5, top: '88.82%', left: '86.91%', delay: '0.50s', isMajor: true },
    { id: 6, top: '87.28%', left: '63.91%', delay: '0.60s', isMajor: false },
    { id: 7, top: '87.03%', left: '76.91%', delay: '0.70s', isMajor: false },
    { id: 8, top: '86.71%', left: '61.27%', delay: '0.80s', isMajor: false },
    { id: 9, top: '86.47%', left: '59.82%', delay: '0.90s', isMajor: false },
    { id: 10, top: '86.14%', left: '61.91%', delay: '1.00s', isMajor: false },
    { id: 11, top: '85.98%', left: '54.36%', delay: '1.10s', isMajor: false },
    { id: 12, top: '85.41%', left: '83.09%', delay: '1.20s', isMajor: false },
    { id: 13, top: '84.85%', left: '82.09%', delay: '1.30s', isMajor: false },
    { id: 14, top: '84.44%', left: '52.73%', delay: '1.40s', isMajor: false },
    { id: 15, top: '84.28%', left: '73.64%', delay: '1.50s', isMajor: false },
    { id: 16, top: '83.23%', left: '79.18%', delay: '1.60s', isMajor: false },
    { id: 17, top: '82.09%', left: '65.09%', delay: '1.70s', isMajor: false },
    { id: 18, top: '78.44%', left: '83.45%', delay: '1.80s', isMajor: false },
    { id: 19, top: '77.96%', left: '66.36%', delay: '1.90s', isMajor: false },
    { id: 20, top: '77.31%', left: '69.73%', delay: '0.00s', isMajor: false },
    { id: 21, top: '76.90%', left: '68.91%', delay: '0.10s', isMajor: false },
    { id: 22, top: '74.15%', left: '62.45%', delay: '0.20s', isMajor: false },
    { id: 23, top: '73.50%', left: '81.55%', delay: '0.30s', isMajor: false },
    { id: 24, top: '72.12%', left: '69.00%', delay: '0.40s', isMajor: false },
    { id: 25, top: '71.15%', left: '62.00%', delay: '0.50s', isMajor: false },
    { id: 26, top: '70.42%', left: '63.36%', delay: '0.60s', isMajor: false },
    { id: 27, top: '69.85%', left: '60.00%', delay: '0.70s', isMajor: false },
    { id: 28, top: '69.77%', left: '57.82%', delay: '0.80s', isMajor: false },
    { id: 29, top: '68.23%', left: '61.18%', delay: '0.90s', isMajor: false },
    { id: 30, top: '67.83%', left: '69.00%', delay: '1.00s', isMajor: true }, // Manchester
    { id: 31, top: '67.18%', left: '60.18%', delay: '1.10s', isMajor: false },
    { id: 32, top: '66.61%', left: '70.91%', delay: '1.20s', isMajor: false },
    { id: 33, top: '66.61%', left: '63.91%', delay: '1.30s', isMajor: false },
    { id: 34, top: '66.53%', left: '62.18%', delay: '1.40s', isMajor: false },
    { id: 35, top: '64.02%', left: '66.36%', delay: '1.50s', isMajor: false },
    { id: 36, top: '63.05%', left: '71.82%', delay: '1.60s', isMajor: false },
    { id: 37, top: '62.64%', left: '58.82%', delay: '1.70s', isMajor: false },
    { id: 38, top: '61.99%', left: '69.64%', delay: '1.80s', isMajor: false },
    { id: 39, top: '58.75%', left: '35.82%', delay: '1.90s', isMajor: false },
    { id: 40, top: '57.21%', left: '38.00%', delay: '0.00s', isMajor: false },
    { id: 41, top: '56.00%', left: '68.55%', delay: '0.10s', isMajor: false },
    { id: 42, top: '54.21%', left: '70.45%', delay: '0.20s', isMajor: false },
    { id: 43, top: '52.11%', left: '68.73%', delay: '0.30s', isMajor: false },
    { id: 44, top: '51.22%', left: '69.18%', delay: '0.40s', isMajor: false },
    { id: 45, top: '50.32%', left: '68.00%', delay: '0.50s', isMajor: false },
    { id: 46, top: '42.30%', left: '50.27%', delay: '0.60s', isMajor: true }, // Edinburgh
    { id: 54, top: '25.45%', left: '49.55%', delay: '1.40s', isMajor: false },
  ];

export const UKCoverage: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-white py-[4.5rem] md:py-20 lg:py-24">
      <div className="container relative z-10">
        <div className="flex flex-row items-center gap-4 md:gap-10 lg:gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 w-[55%] sm:w-[60%] lg:w-[65%]"
          >
            <p className="mb-2 md:mb-4 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-emerald">
              Nationwide Delivery
            </p>
            <h2 className="mb-3 md:mb-5 text-xl sm:text-2xl font-bold leading-tight tracking-tight text-primary-navy md:text-4xl lg:text-[3.05rem]">
              Our trusted installer network covers the UK.
            </h2>
            <p className="mb-4 md:mb-8 text-xs sm:text-sm md:text-lg leading-relaxed text-slate-600">
              No matter where you are based, our extensive network of fully accredited, highly rated installation partners ensures we can match you with local experts who understand your regional requirements.
            </p>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
              {['England', 'Scotland', 'Wales', 'Northern Ireland'].map((region, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-2 rounded-full border border-slate-200 bg-bg-grey px-2 sm:px-3 md:px-4 py-1.5 md:py-2.5">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-emerald" />
                  <span className="font-semibold text-primary-navy text-[9px] sm:text-[10px] md:text-sm leading-none">{region}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 w-[45%] sm:w-[40%] lg:w-[35%] relative flex justify-end"
          >
            <div className="relative w-full max-w-[360px] overflow-hidden rounded-2xl md:rounded-[2rem] border border-slate-200/60 bg-[#93c7e0] shadow-[0_24px_80px_-36px_rgba(14,35,65,0.18)]">
              <img 
                src="/uk-map-custom.jpg" 
                alt="UK Map showing installer network coverage" 
                width={800}
                height={1100}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              
              {/* Custom Map Pins */}
              <div className="absolute inset-0">
                {PINS.map((pin) => (
                  <div 
                    key={pin.id}
                    className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 hover:z-20 cursor-pointer"
                    style={{ top: pin.top, left: pin.left }}
                  >
                    <div 
                      className="absolute h-full w-full rounded-full animate-ping bg-blue-500 opacity-20" 
                      style={{ animationDelay: pin.delay }}
                    />
                    <Star 
                      className={`${pin.isMajor ? 'w-4 h-4 md:w-5 md:h-5' : 'w-3 h-3 md:w-4 md:h-4'} text-white drop-shadow-md relative z-10`} 
                      fill="#3b82f6" 
                      strokeWidth={1.5}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const generatePins = () => {
  // Simple seeded random to prevent hydration mismatch
  const random = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  
  const regions = [
    { cx: 50, cy: 38, rx: 6, ry: 6, count: 4 }, // Scotland
    { cx: 65, cy: 62, rx: 8, ry: 8, count: 15 }, // North West / Manchester
    { cx: 67, cy: 71, rx: 8, ry: 8, count: 12 }, // Midlands / Birmingham
    { cx: 56, cy: 75, rx: 5, ry: 6, count: 3 }, // Wales
    { cx: 58, cy: 82, rx: 8, ry: 5, count: 6 }, // South West
    { cx: 80, cy: 79, rx: 8, ry: 6, count: 12 }, // South East / London
  ];
  
  const pins: { id: number; top: string; left: string; delay: string; isMajor: boolean }[] = [];
  let seed = 42;
  let id = 0;

  // Add major hubs exactly as seen in the image
  const majorHubs = [
    { cx: 50, cy: 43 }, // Glasgow
    { cx: 58, cy: 42.5 }, // Edinburgh
    { cx: 48, cy: 56 }, // Isle of Man
    { cx: 38, cy: 53 }, // Belfast / Ireland
    { cx: 65, cy: 62.5 }, // Manchester
    { cx: 67, cy: 71 }, // Birmingham
    { cx: 80, cy: 79 }, // London
  ];

  majorHubs.forEach(hub => {
    pins.push({
      id: id++,
      top: `${hub.cy}%`,
      left: `${hub.cx}%`,
      delay: `${(random(seed++) * 2).toFixed(2)}s`,
      isMajor: true
    });
  });

  // Add 73 minor pins
  regions.forEach(r => {
    for(let i=0; i<r.count; i++) {
       const angle = random(seed++) * Math.PI * 2;
       const radius = Math.sqrt(random(seed++));
       const x = r.cx + radius * r.rx * Math.cos(angle);
       const y = r.cy + radius * r.ry * Math.sin(angle);
       
       pins.push({
         id: id++,
         top: `${y.toFixed(2)}%`,
         left: `${x.toFixed(2)}%`,
         delay: `${(random(seed++) * 2).toFixed(2)}s`,
         isMajor: false
       });
    }
  });
  
  return pins;
};

const PINS = generatePins();

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
            <div className="relative w-full max-w-[360px] overflow-hidden rounded-2xl md:rounded-[2rem] border border-slate-200/60 bg-[#9ec0e9] shadow-[0_24px_80px_-36px_rgba(14,35,65,0.18)]">
              <img 
                src="/uk-map.png" 
                alt="UK Map showing installer network coverage" 
                width={800}
                height={1066}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-center mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 bg-[#83b4c1]/10 mix-blend-overlay" />
              
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

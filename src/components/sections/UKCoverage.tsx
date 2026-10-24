import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const generatePins = () => {
  // Simple seeded random to prevent hydration mismatch
  const random = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  
  const regions = [
    { cx: 45, cy: 25, rx: 12, ry: 15, count: 12 }, // Scotland
    { cx: 52, cy: 45, rx: 8, ry: 10, count: 15 }, // North
    { cx: 55, cy: 60, rx: 10, ry: 10, count: 14 }, // Midlands
    { cx: 42, cy: 68, rx: 6, ry: 8, count: 6 }, // Wales
    { cx: 40, cy: 80, rx: 10, ry: 6, count: 8 }, // South West
    { cx: 65, cy: 75, rx: 12, ry: 10, count: 12 }, // South East
    { cx: 25, cy: 42, rx: 4, ry: 4, count: 6 }, // NI
  ];
  
  const pins: { id: number; top: string; left: string; delay: string; isMajor: boolean }[] = [];
  let seed = 42;
  let id = 0;

  // Add 6 major hubs
  const majorHubs = [
    { cx: 45, cy: 25 }, // Edinburgh/Glasgow
    { cx: 55, cy: 50 }, // Manchester/Leeds
    { cx: 60, cy: 65 }, // Birmingham
    { cx: 45, cy: 75 }, // Cardiff
    { cx: 75, cy: 80 }, // London
    { cx: 25, cy: 45 }, // Belfast
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
            <div className="relative w-full max-w-[360px] overflow-hidden rounded-2xl md:rounded-[2rem] border border-slate-200/60 bg-bg-grey shadow-[0_24px_80px_-36px_rgba(14,35,65,0.18)]">
              <img 
                src="/uk-map.jpg" 
                alt="UK Map showing installer network coverage" 
                width={800}
                height={1066}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-navy/20 mix-blend-overlay" />
              
              {/* Custom Map Pins */}
              <div className="absolute inset-0">
                {PINS.map((pin) => (
                  <div 
                    key={pin.id}
                    className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 hover:z-20 cursor-pointer"
                    style={{ top: pin.top, left: pin.left }}
                  >
                    {pin.isMajor ? (
                      <>
                        <div 
                          className="h-2 w-2 md:h-3 md:w-3 animate-ping rounded-full bg-emerald absolute opacity-75" 
                          style={{ animationDelay: pin.delay }}
                        />
                        <MapPin className="w-4 h-4 md:w-6 md:h-6 text-emerald drop-shadow-md relative z-10" fill="#1AAE63" />
                      </>
                    ) : (
                      <div 
                        className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-emerald shadow-[0_0_8px_rgba(26,174,99,0.8)] opacity-90 relative z-10" 
                      />
                    )}
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

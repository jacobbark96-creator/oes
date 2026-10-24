import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8">
      <div className="container">
        <div className="mb-10 flex flex-col gap-10 md:flex-row md:flex-wrap lg:mb-12 lg:flex-nowrap lg:gap-8">
          
          <div className="w-full md:w-[45%] lg:w-5/12 lg:pr-10">
            <div className="mb-6 h-14 w-[12rem] overflow-hidden md:h-[4.5rem] md:w-[16rem] lg:h-20 lg:w-[18rem]">
              <img 
                src="/OEMLogo.png" 
                alt="Open Energy Services Logo" 
                className="pointer-events-none relative left-[-1.5rem] top-[-2.2rem] h-[7.5rem] max-w-none object-contain md:left-[-1.95rem] md:top-[-2.9rem] md:h-[10rem] lg:left-[-2.15rem] lg:top-[-3.2rem] lg:h-[11rem]"
              />
            </div>
            <p className="mb-6 max-w-md text-[14px] md:text-[15px] leading-relaxed text-slate-300">
              Independent guidance for homeowners, landlords and businesses seeking funding support and the right accredited installation partners.
            </p>
            <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-light/80">
                Trusted First Point of Contact
              </p>
              <p className="text-[13px] md:text-sm leading-relaxed text-slate-300">
                We simplify the path from initial assessment to installer selection, with clear advice and no pressure.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-6 md:w-[45%] lg:w-4/12 lg:gap-8">
            <div>
              <h3 className="text-[11px] md:text-xs font-bold mb-4 md:mb-5 tracking-widest uppercase text-slate-400">Quick Links</h3>
              <ul className="space-y-3 md:space-y-3.5 text-[14px] md:text-[15px] text-slate-300 font-medium">
                <li><a href="/commercial-solar" className="hover:text-emerald transition-colors">For Businesses</a></li>
                <li><a href="/#homeowners" className="hover:text-emerald transition-colors">For Homeowners</a></li>
                <li><a href="/#landlords" className="hover:text-emerald transition-colors">For Landlords</a></li>
                <li><a href="/funding" className="hover:text-emerald transition-colors">Funding Options</a></li>
                <li><a href="/areas-we-cover" className="hover:text-emerald transition-colors">Areas We Cover</a></li>
                <li><a href="/blog" className="hover:text-emerald transition-colors">Energy Insights</a></li>
                <li><a href="/about" className="hover:text-emerald transition-colors">About OES</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] md:text-xs font-bold mb-4 md:mb-5 tracking-widest uppercase text-slate-400">Solutions</h3>
              <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[15px] font-medium text-slate-300">
                <li><a href="/services" className="hover:text-emerald transition-colors">Solar Energy</a></li>
                <li><a href="/services" className="hover:text-emerald transition-colors">Battery Storage</a></li>
                <li><a href="/services" className="hover:text-emerald transition-colors">Heat Pumps</a></li>
                <li><a href="/services" className="hover:text-emerald transition-colors">Energy Efficiency</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-full lg:w-3/12">
            <h3 className="text-[11px] md:text-xs font-bold mb-4 md:mb-5 tracking-widest uppercase text-slate-400">Contact</h3>
            <ul className="space-y-4 text-[14px] md:text-[15px] text-slate-300 font-medium">
              <li className="flex items-start gap-3">
                <div className="p-1.5 bg-primary-dark rounded-lg flex-shrink-0">
                  <Mail size={16} className="text-emerald" />
                </div>
                <a href="mailto:welcome@openenergyservices.co.uk" className="hover:text-emerald transition-colors break-all md:break-words pt-1">
                  welcome@openenergyservices.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 bg-primary-dark rounded-lg flex-shrink-0">
                  <Phone size={16} className="text-emerald" />
                </div>
                <a href="tel:+441615245535" className="hover:text-emerald transition-colors pt-1">
                  +44 161 524 5535
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 bg-primary-dark rounded-lg flex-shrink-0">
                  <MapPin size={16} className="text-emerald" />
                </div>
                <span className="pt-1 leading-relaxed">
                  1 St Peter's Square,<br />Manchester, M2 3DE
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-[13px] font-medium text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Open Energy Services. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Description (Takes up more space) */}
          <div className="col-span-1 lg:col-span-5 lg:pr-10">
            <div className="mb-6">
              <img 
                src="/OEMLogo.png" 
                alt="Open Energy Services Logo" 
                className="h-14 md:h-16 w-auto object-contain bg-white rounded-lg p-1.5"
              />
            </div>
            <p className="text-slate-300 mb-8 font-normal leading-relaxed text-[15px] max-w-md">
              Your independent energy consultancy. We help homeowners, landlords, and businesses access government funding and connect with trusted, accredited installation partners across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xs font-bold mb-5 tracking-widest uppercase text-slate-400">Company</h3>
            <ul className="space-y-3.5 text-[15px] text-slate-300 font-medium">
              <li><a href="/about" className="hover:text-emerald transition-colors">About Us</a></li>
              <li><a href="/how-it-works" className="hover:text-emerald transition-colors">How It Works</a></li>
              <li><a href="/#accreditations" className="hover:text-emerald transition-colors">Accreditations</a></li>
              <li><a href="/#faq" className="hover:text-emerald transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xs font-bold mb-5 tracking-widest uppercase text-slate-400">Services</h3>
            <ul className="space-y-3.5 text-[15px] text-slate-300 font-medium">
              <li><a href="/services#loft" className="hover:text-emerald transition-colors">Loft Insulation</a></li>
              <li><a href="/services#wall" className="hover:text-emerald transition-colors">Wall Insulation</a></li>
              <li><a href="/services#heat-pumps" className="hover:text-emerald transition-colors">Heat Pumps</a></li>
              <li><a href="/services#solar" className="hover:text-emerald transition-colors">Solar Panels</a></li>
              <li><a href="/funding" className="hover:text-emerald transition-colors">Government Funding</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-xs font-bold mb-5 tracking-widest uppercase text-slate-400">Contact</h3>
            <ul className="space-y-4 text-[15px] text-slate-300 font-medium">
              <li className="flex items-start gap-3">
                <div className="p-1.5 bg-primary-dark rounded-lg flex-shrink-0">
                  <Mail size={16} className="text-emerald" />
                </div>
                <a href="mailto:welcome@openenergyservices.co.uk" className="hover:text-emerald transition-colors break-words pt-1">
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
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-medium text-slate-400">
          <p>© {new Date().getFullYear()} Open Energy Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

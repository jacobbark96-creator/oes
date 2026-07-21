import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Description (Takes up more space) */}
          <div className="col-span-1 lg:col-span-5 lg:pr-10">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/OEMLogo.png" 
                alt="Open Energy Services Logo" 
                className="h-10 w-auto object-contain bg-white rounded-lg p-1"
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                Open Energy Services
              </span>
            </div>
            <p className="text-slate-300 mb-8 font-normal leading-relaxed text-[15px] max-w-md">
              Your independent energy consultancy. We help homeowners, landlords, and businesses access government funding and connect with trusted, accredited installation partners across the UK.
            </p>
            
            {/* Trustpilot & Socials side-by-side */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="bg-[#00B67A] p-1 rounded-sm">
                      <Star className="text-white w-3.5 h-3.5 fill-current" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  <span className="font-semibold text-white">Excellent</span> · 1,200+ reviews
                </p>
              </div>

              <div className="hidden sm:block w-px h-8 bg-slate-700"></div>

              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="p-2 bg-primary-dark rounded-lg hover:bg-emerald transition-colors text-slate-300 hover:text-white"><Facebook size={16} /></a>
                <a href="#" aria-label="Twitter" className="p-2 bg-primary-dark rounded-lg hover:bg-emerald transition-colors text-slate-300 hover:text-white"><Twitter size={16} /></a>
                <a href="#" aria-label="Instagram" className="p-2 bg-primary-dark rounded-lg hover:bg-emerald transition-colors text-slate-300 hover:text-white"><Instagram size={16} /></a>
                <a href="#" aria-label="LinkedIn" className="p-2 bg-primary-dark rounded-lg hover:bg-emerald transition-colors text-slate-300 hover:text-white"><Linkedin size={16} /></a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xs font-bold mb-5 tracking-widest uppercase text-slate-400">Company</h3>
            <ul className="space-y-3.5 text-[15px] text-slate-300 font-medium">
              <li><a href="/about" className="hover:text-emerald transition-colors">About Us</a></li>
              <li><a href="/how-it-works" className="hover:text-emerald transition-colors">How It Works</a></li>
              <li><a href="/#accreditations" className="hover:text-emerald transition-colors">Accreditations</a></li>
              <li><a href="/#reviews" className="hover:text-emerald transition-colors">Reviews</a></li>
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

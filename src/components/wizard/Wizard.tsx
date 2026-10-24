import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Building, Home as BungalowIcon, Flame, Zap, Droplet, Settings, CheckCircle2, ArrowRight, ArrowLeft, Loader2, User, Mail, Phone, MapPin } from 'lucide-react';

export const Wizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    propertyType: '',
    heatingSource: '',
    ownership: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: ''
  });

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(s => s + 1);
  };
  
  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(s => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formPayload = new FormData();
      formPayload.append('_subject', `New Eligibility Lead from ${formData.firstName} ${formData.lastName}`);
      formPayload.append('_captcha', 'false');
      formPayload.append('_template', 'table');
      formPayload.append('First Name', formData.firstName);
      formPayload.append('Last Name', formData.lastName);
      formPayload.append('Email', formData.email);
      formPayload.append('Phone', formData.phone);
      formPayload.append('Postcode', formData.postcode);
      formPayload.append('Property Type', formData.propertyType);
      formPayload.append('Heating Source', formData.heatingSource);
      formPayload.append('Ownership', formData.ownership);

      const response = await fetch('https://formsubmit.co/ajax/jake@openenergyservices.co.uk', {
        method: 'POST',
        body: formPayload,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      if (!result.success) {
        throw new Error('Form submission failed');
      }

      // Track conversions
      if (typeof window !== 'undefined') {
        if ((window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
        if ((window as any).gtag) {
          (window as any).gtag('event', 'generate_lead');
        }
      }

      setIsSubmitting(false);
      nextStep();
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
      alert('There was an issue submitting your details. Please try again.');
    }
  };

  const propertyTypes = [
    { id: 'detached', label: 'Detached', icon: Home },
    { id: 'semi-detached', label: 'Semi-detached', icon: Building2 },
    { id: 'terraced', label: 'Terraced', icon: Building },
    { id: 'flat', label: 'Flat / Apartment', icon: Building2 },
    { id: 'bungalow', label: 'Bungalow', icon: BungalowIcon },
  ];

  const heatingTypes = [
    { id: 'gas', label: 'Gas Boiler', icon: Flame },
    { id: 'electric', label: 'Electric', icon: Zap },
    { id: 'oil', label: 'Oil / LPG', icon: Droplet },
    { id: 'heat-pump', label: 'Heat Pump', icon: Settings },
    { id: 'other', label: 'Other', icon: CheckCircle2 },
  ];

  const ownershipTypes = [
    { id: 'homeowner', label: 'Homeowner (Live here)' },
    { id: 'landlord', label: 'Landlord (Rent it out)' },
    { id: 'tenant', label: 'Tenant (Rent from landlord)' },
  ];

  const totalSteps = 4;
  const progress = ((step - 1) / totalSteps) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[1.5rem] md:rounded-3xl shadow-glass border border-slate-100 overflow-hidden relative min-h-[400px] md:min-h-[500px]">
      {/* Progress Bar */}
      {step <= totalSteps && (
        <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-slate-100">
          <motion.div 
            className="h-full bg-emerald"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      )}

      <div className="p-5 sm:p-8 md:p-12">
        {step <= totalSteps && (
          <div className="mb-5 md:mb-8">
            <p className="text-xs md:text-sm font-bold text-emerald tracking-wider uppercase mb-2">Step {step} of {totalSteps}</p>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: Property Type */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-5 md:mb-6 tracking-tight">What type of property is it?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {propertyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => { updateForm('propertyType', type.id); nextStep(); }}
                    className={`flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                      formData.propertyType === type.id 
                        ? 'border-emerald bg-emerald-light/30' 
                        : 'border-slate-100 hover:border-emerald/30 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-2.5 md:p-3 rounded-xl ${formData.propertyType === type.id ? 'bg-emerald text-white' : 'bg-white text-slate-400 shadow-sm'}`}>
                      <type.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className={`font-semibold text-base md:text-lg ${formData.propertyType === type.id ? 'text-primary-navy' : 'text-slate-600'}`}>
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Heating Source */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-5 md:mb-6 tracking-tight">What is your main heating source?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {heatingTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => { updateForm('heatingSource', type.id); nextStep(); }}
                    className={`flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                      formData.heatingSource === type.id 
                        ? 'border-emerald bg-emerald-light/30' 
                        : 'border-slate-100 hover:border-emerald/30 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-2.5 md:p-3 rounded-xl ${formData.heatingSource === type.id ? 'bg-emerald text-white' : 'bg-white text-slate-400 shadow-sm'}`}>
                      <type.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className={`font-semibold text-base md:text-lg ${formData.heatingSource === type.id ? 'text-primary-navy' : 'text-slate-600'}`}>
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Ownership */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-5 md:mb-6 tracking-tight">Do you own the property?</h2>
              <div className="space-y-3 md:space-y-4">
                {ownershipTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => { updateForm('ownership', type.id); nextStep(); }}
                    className={`w-full flex items-center justify-between p-5 md:p-6 rounded-2xl border-2 text-left transition-all duration-200 ${
                      formData.ownership === type.id 
                        ? 'border-emerald bg-emerald-light/30' 
                        : 'border-slate-100 hover:border-emerald/30 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`font-semibold text-base md:text-lg ${formData.ownership === type.id ? 'text-primary-navy' : 'text-slate-600'}`}>
                      {type.label}
                    </span>
                    <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center shrink-0 ml-4 ${formData.ownership === type.id ? 'border-emerald' : 'border-slate-300'}`}>
                      {formData.ownership === type.id && <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-emerald rounded-full" />}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: Contact Details */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-2 tracking-tight">Your Details</h2>
              <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 font-medium">Where should we send your eligibility results?</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500">First Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User size={18} className="text-slate-400" />
                      </div>
                      <input 
                        type="text" 
                        required
                        value={formData.firstName}
                        onChange={(e) => updateForm('firstName', e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-all outline-none text-primary-navy font-medium"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500">Last Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User size={18} className="text-slate-400" />
                      </div>
                      <input 
                        type="text" 
                        required
                        value={formData.lastName}
                        onChange={(e) => updateForm('lastName', e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-all outline-none text-primary-navy font-medium"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={18} className="text-slate-400" />
                    </div>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-all outline-none text-primary-navy font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone size={18} className="text-slate-400" />
                      </div>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => updateForm('phone', e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-all outline-none text-primary-navy font-medium"
                        placeholder="07700 900000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500">Postcode</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin size={18} className="text-slate-400" />
                      </div>
                      <input 
                        type="text" 
                        required
                        value={formData.postcode}
                        onChange={(e) => updateForm('postcode', e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-all outline-none text-primary-navy font-medium uppercase"
                        placeholder="M2 3DE"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 md:pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-emerald text-white py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-emerald-600 transition-all shadow-soft hover:shadow-lg hover:shadow-emerald/20 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="animate-spin" size={24} /> Processing...</>
                    ) : (
                      <>Check My Eligibility <ArrowRight size={20} /></>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 5: Success */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-emerald" />
              </div>
              <h2 className="text-3xl font-bold text-primary-navy mb-4 tracking-tight">Details Received!</h2>
              <p className="text-lg text-slate-600 mb-8 font-medium max-w-md mx-auto">
                Thank you, {formData.firstName}. Our funding specialists are reviewing your details and will be in touch shortly to confirm your eligibility.
              </p>
              <a 
                href="/"
                className="inline-flex bg-primary-navy text-white px-8 py-3.5 rounded-xl font-bold hover:bg-primary-dark transition-all"
              >
                Return to Homepage
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons (Bottom) */}
        {step > 1 && step <= totalSteps && (
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-start">
            <button 
              onClick={prevStep}
              className="flex items-center gap-2 text-slate-500 font-semibold hover:text-primary-navy transition-colors"
            >
              <ArrowLeft size={18} /> Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

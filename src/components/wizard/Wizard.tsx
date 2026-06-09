import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Send, Upload, CheckCircle2 } from 'lucide-react';
// @ts-ignore
import Autocomplete from 'react-google-autocomplete';

type FormData = {
  name: string;
  address: string;
  isBusiness: 'Yes' | 'No';
  mobile: string;
  email: string;
  evInterest: 'Yes' | 'No';
  roofMaterial: string;
  roofCondition: string;
  phaseType: 'Three Phase' | 'Single Phase' | "I don't know";
  energySpend: string;
  financeOption: 'PPA' | 'Finance' | 'CAPEX';
  billFile?: FileList;
};

const steps = [
  { id: 1, title: 'Personal Info' },
  { id: 2, title: 'Property Details' },
  { id: 3, title: 'Roof & Phase' },
  { id: 4, title: 'Energy & Finance' },
  { id: 5, title: 'Upload Bill' },
];

export const Wizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch, formState: { errors }, trigger, setValue } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const formData = new window.FormData();
      // Required fields for Web3Forms
      formData.append("access_key", "60361693-2cba-4b66-a0da-121ca0055889");
      // To send to a specific email using Web3Forms without changing the account email,
      // it's best to configure it on the Web3Forms dashboard. Alternatively, if your key 
      // is not locked to a single email, you can try routing it, but usually the key ITSELF
      // dictates the recipient inbox.
      // 
      // Assuming you will link the key to jake@openenergyservices.co.uk in Web3Forms:
      formData.append("subject", `New Solar Lead: ${data.name}`);
      formData.append("from_name", data.name);
      formData.append("email", data.email);
      
      // Data fields
      formData.append("Name", data.name);
      formData.append("Address", data.address);
      formData.append("Is Business", data.isBusiness);
      formData.append("Mobile", data.mobile);
      formData.append("Interested in EV", data.evInterest);
      formData.append("Roof Material", data.roofMaterial);
      formData.append("Roof Condition", data.roofCondition);
      formData.append("Phase Type", data.phaseType);
      formData.append("Monthly Energy Spend (£)", data.energySpend);
      formData.append("Finance Option", data.financeOption);

      // File attachment
      if (data.billFile && data.billFile.length > 0) {
        formData.append("attachment", data.billFile[0]);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to submit form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (currentStep === 1) fieldsToValidate = ['name', 'email', 'mobile'];
    if (currentStep === 2) fieldsToValidate = ['address', 'isBusiness'];
    if (currentStep === 3) fieldsToValidate = ['roofMaterial', 'roofCondition', 'phaseType'];
    if (currentStep === 4) fieldsToValidate = ['energySpend', 'evInterest', 'financeOption'];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-xl mx-auto border border-orange-50">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle2 size={48} className="text-green-600" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-solar-dark mb-4">Application Sent!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for your interest. A solar expert from Open Energy Solutions will review your details and contact you shortly at {watch('email')}.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-solar-orange text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl border border-white/20 w-full max-w-xl mx-auto overflow-hidden">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-solar-orange uppercase tracking-wider">Step {currentStep} of 5</span>
          <span className="text-xs font-medium text-gray-400">{steps[currentStep - 1].title}</span>
        </div>
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-solar-orange"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-solar-dark mb-1.5">Full Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-solar-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-solar-dark mb-1.5">Email Address</label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { 
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                      message: 'Please enter a valid email address' 
                    }
                  })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-solar-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-solar-dark mb-1.5">Mobile Number</label>
                <input
                  {...register('mobile', { 
                    required: 'Mobile number is required',
                    pattern: {
                      value: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44|0)[1-9][0-9\s\-]{8,12}$/,
                      message: 'Please enter a valid phone number (e.g. 07123 456789)'
                    }
                  })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-solar-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
                  placeholder="07123 456789"
                />
                {errors.mobile && <p className="text-red-500 text-[10px] mt-1">{errors.mobile.message}</p>}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-solar-dark mb-1.5">Installation Address</label>
                <Autocomplete
                  apiKey="AIzaSyCnvPS7oFR7nUWkE008r9DafN2iCgnCQZA"
                  options={{
                    types: ['address'],
                    componentRestrictions: { country: 'gb' },
                  }}
                  onPlaceSelected={(place) => {
                    if (place.formatted_address) {
                      setValue('address', place.formatted_address, { shouldValidate: true });
                    }
                  }}
                  {...register('address', { required: 'Address is required' })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-solar-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
                  placeholder="Start typing your address..."
                />
                {errors.address && <p className="text-red-500 text-[10px] mt-1">{errors.address.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-solar-dark mb-1.5">Are you a business?</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className={`
                      cursor-pointer border-2 rounded-xl p-3 flex items-center justify-center font-bold text-sm transition-all
                      ${watch('isBusiness') === option ? 'border-solar-orange bg-orange-50 text-solar-orange' : 'border-gray-100 hover:border-gray-200'}
                    `}>
                      <input
                        type="radio"
                        {...register('isBusiness', { required: 'Please select an option' })}
                        value={option}
                        className="hidden"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {errors.isBusiness && <p className="text-red-500 text-[10px] mt-1">{errors.isBusiness.message}</p>}
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-solar-dark mb-1.5">Roof Material</label>
                  <select
                    {...register('roofMaterial', { required: 'Required' })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none bg-white text-sm"
                  >
                    <option value="">Select Material</option>
                    <option value="Tile">Tile</option>
                    <option value="Slate">Slate</option>
                    <option value="Metal">Metal</option>
                    <option value="Flat">Flat Roof</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-solar-dark mb-1.5">Roof Condition</label>
                  <select
                    {...register('roofCondition', { required: 'Required' })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none bg-white text-sm"
                  >
                    <option value="">Select Condition</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Needs Repair">Needs Repair</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-solar-dark mb-1.5">Electrical Phase Type</label>
                <div className="grid grid-cols-1 gap-2">
                  {['Single Phase', 'Three Phase', "I don't know"].map((option) => (
                    <label key={option} className={`
                      cursor-pointer border-2 rounded-xl p-3 flex items-center font-bold text-sm transition-all
                      ${watch('phaseType') === option ? 'border-solar-orange bg-orange-50 text-solar-orange' : 'border-gray-100 hover:border-gray-200'}
                    `}>
                      <input
                        type="radio"
                        {...register('phaseType', { required: 'Required' })}
                        value={option}
                        className="hidden"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-solar-dark mb-1.5">Monthly Energy Spend (£)</label>
                <input
                  type="number"
                  {...register('energySpend', { required: 'Required' })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none text-sm"
                  placeholder="e.g. 150"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-solar-dark mb-1.5">Interested in EV Chargers?</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className={`
                      cursor-pointer border-2 rounded-xl p-3 flex items-center justify-center font-bold text-sm transition-all
                      ${watch('evInterest') === option ? 'border-solar-orange bg-orange-50 text-solar-orange' : 'border-gray-100 hover:border-gray-200'}
                    `}>
                      <input
                        type="radio"
                        {...register('evInterest', { required: 'Required' })}
                        value={option}
                        className="hidden"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-solar-dark mb-1.5">Preferred Finance Option</label>
                <div className="grid grid-cols-3 gap-2">
                  {['PPA', 'Finance', 'CAPEX'].map((option) => (
                    <label key={option} className={`
                      cursor-pointer border-2 rounded-xl p-2.5 flex items-center justify-center text-xs font-bold transition-all
                      ${watch('financeOption') === option ? 'border-solar-orange bg-orange-50 text-solar-orange' : 'border-gray-100 hover:border-gray-200'}
                    `}>
                      <input
                        type="radio"
                        {...register('financeOption', { required: 'Required' })}
                        value={option}
                        className="hidden"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-solar-orange mb-3">
                  <Upload size={24} />
                </div>
                <h3 className="text-xl font-bold text-solar-dark mb-1.5">Upload Your Energy Bill <span className="text-gray-400 text-base font-normal">(Optional)</span></h3>
                <p className="text-sm text-gray-500">
                  Helping us design the most accurate system for your needs.
                </p>
              </div>
              <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-solar-orange transition-colors cursor-pointer group">
                <input
                  type="file"
                  {...register('billFile')}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="bill-upload"
                  title="Upload Bill"
                />
                <div className="pointer-events-none">
                  <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="text-solar-orange" size={24} />
                  </div>
                  <h3 className="font-bold text-solar-dark mb-1 text-sm">
                    {watch('billFile')?.[0]?.name || 'Upload Recent Bill'}
                  </h3>
                  <p className="text-gray-400 text-[10px]">PDF, JPG or PNG (Optional)</p>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl text-[10px] text-gray-500 flex items-start gap-2">
                <CheckCircle2 size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                <p>By submitting, you agree to our privacy policy and consent to being contacted regarding your solar quote.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-3 mt-8">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-100 font-bold text-gray-400 hover:border-gray-200 hover:text-gray-600 transition-all flex items-center justify-center gap-1.5 text-sm"
            >
              <ChevronLeft size={18} />
              Back
            </button>
          )}
          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex-[2] bg-solar-orange text-white px-4 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 flex items-center justify-center gap-1.5 text-sm"
            >
              Next Step
              <ChevronRight size={18} />
            </button>
          ) : (
            <div className="flex-[2] flex gap-2">
              {!watch('billFile')?.[0] ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gray-200 text-gray-700 px-3 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? 'Sending...' : 'Skip & Submit'}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-solar-green text-white px-3 py-3 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100 flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? 'Sending...' : 'Submit with Bill'}
                  {!isSubmitting && <Send size={18} />}
                </button>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

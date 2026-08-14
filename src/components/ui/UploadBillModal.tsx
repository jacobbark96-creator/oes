import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle } from 'lucide-react';

interface UploadBillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadBillModal: React.FC<UploadBillModalProps> = ({ isOpen, onClose }) => {
  const [advisorCode, setAdvisorCode] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !advisorCode) return;

    setStatus('submitting');

    try {
      // Simulate network request and backend processing
      // In production, you would post the FormData to your backend (e.g. Supabase, custom API)
      console.log(`[UploadBill] Submitting bill for advisor code: ${advisorCode}`);
      console.log(`[UploadBill] File: ${file.name} (${Math.round(file.size / 1024)} KB)`);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log(`[UploadBill] Saved to Database.`);
      console.log(`[UploadBill] Emailed to advisor successfully.`);

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setAdvisorCode('');
        setFile(null);
      }, 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-primary-navy/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-[101] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>

            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-light text-emerald">
                  <CheckCircle size={32} />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-primary-navy">Upload Successful</h3>
                <p className="text-slate-500">Your bill has been sent to your advisor.</p>
              </div>
            ) : (
              <>
                <h2 className="mb-2 text-2xl font-bold text-primary-navy">Upload Energy Bill</h2>
                <p className="mb-6 text-slate-500 text-sm">Enter your advisor code and upload your recent energy bill for review.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary-navy">Advisor Code</label>
                    <input
                      type="text"
                      required
                      value={advisorCode}
                      onChange={(e) => setAdvisorCode(e.target.value)}
                      placeholder="e.g. ADV-1234"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary-navy">Energy Bill (PDF/Image)</label>
                    <div className="relative flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-6 hover:bg-slate-100 transition-colors">
                      <input
                        type="file"
                        required
                        accept=".pdf,image/*"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                      />
                      <Upload className="mb-2 text-slate-400" size={24} />
                      <span className="text-sm font-medium text-slate-600 text-center">
                        {file ? file.name : 'Click to upload or drag and drop'}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full rounded-xl bg-orange-500 px-4 py-3 font-bold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Uploading...' : 'Submit Bill'}
                  </button>
                  
                  {status === 'error' && (
                    <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  X,
  Sparkles,
  Phone,
  MessageCircle,
  CheckCircle2,
  Droplet,
  ShieldCheck,
  Send,
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [queryType, setQueryType] = useState('New Purifier Purchase');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = () => {
    if (!name || !mobile) {
      alert('Please provide your name and contact number');
      return;
    }
    const msg = `Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Please share more details.
• Name: ${name}
• Mobile: ${mobile}
• Query Type: ${queryType}
Please connect with me for a free water test and machine guidance.`;

    window.open(
      `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
    onClose();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      id="consultation-modal"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-cyan-100 p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-consultation-modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Request Received!</h3>
            <p className="text-sm text-slate-600">
              Our water expert will call you shortly on <strong>{mobile}</strong> to schedule your free consultation.
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>100% Free & No Obligation</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Get Free Water Consultation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Speak with certified water treatment experts. We test your water TDS & recommend the exact filtration system.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  I need help with
                </label>
                <select
                  value={queryType}
                  onChange={(e) => setQueryType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none"
                >
                  <option value="New Purifier Purchase">Buying a New Home RO / UV Purifier</option>
                  <option value="Water Quality & TDS Check">Free Doorstep Water TDS & Hardness Test</option>
                  <option value="RO Servicing or Repair">RO Machine Repair / Servicing</option>
                  <option value="Commercial RO Setup">Commercial / Office RO Plant (50-500 LPH)</option>
                  <option value="Water Softener">Whole-House Water Softener System</option>
                  <option value="AMC Plan Inquiry">Annual Maintenance (AMC) Package</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Callback</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Certified Technicians
              </span>
              <span className="flex items-center gap-1">
                <Droplet className="w-3.5 h-3.5 text-cyan-500" /> Free Water Purity Test
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

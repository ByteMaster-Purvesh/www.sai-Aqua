import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  Droplet,
  Sparkles,
  Check,
  User,
  Smartphone,
  HelpCircle,
  Compass,
} from 'lucide-react';

interface InquirySectionProps {
  initialService?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    serviceOrProduct: initialService || 'RO + UV Purifier',
    waterSource: 'Borewell / Underground Water',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const serviceProductOptions = [
    'RO Water Purifier',
    'UV Water Purifier',
    'RO + UV Purifier',
    'Commercial RO System (50-500 LPH)',
    'Water Softener System',
    'Alkaline Mineral Purifier',
    'RO Installation Service',
    'Emergency RO Repair',
    'Annual Maintenance (AMC)',
    'Filter / Membrane Replacement',
    'RO Servicing & Sanitization',
    'Free Water Quality / TDS Check',
    'Other / Custom Requirement',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name';
    }

    const cleanedMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanedMobile || cleanedMobile.length < 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.serviceOrProduct) {
      newErrors.serviceOrProduct = 'Please select a service or product';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setInquiryId(`SAI-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  const handleWhatsAppSend = () => {
    if (!formData.name.trim() || !formData.mobile.trim()) {
      setErrors({
        name: !formData.name.trim() ? 'Please provide your name first' : '',
        mobile: !formData.mobile.trim() ? 'Please provide your mobile number' : '',
      });
      return;
    }

    const prefilledText = `Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Please share more details.

Customer Details:
• Name: ${formData.name.trim()}
• Mobile: ${formData.mobile.trim()}
• Service/Product Required: ${formData.serviceOrProduct}
• Primary Water Source: ${formData.waterSource}
• Message: ${formData.message.trim() || 'Please share pricing, models, and arrange a visit.'}`;

    window.open(
      `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
        prefilledText
      )}`,
      '_blank'
    );
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      serviceOrProduct: 'RO + UV Purifier',
      waterSource: 'Borewell / Underground Water',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 relative bg-white overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Fast Callback Guaranteed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Need a Water Purifier?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
            Tell us what you need and our team will contact you.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Grid: Left Consultation/Interactive Helper, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Why Inquire With SAI + Direct Assistance Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-panel border border-cyan-200/80 shadow-xl shadow-cyan-900/5">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                Doorstep Water Consultation & Advice
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Our water technicians will analyze your water's TDS, pH, and hardness levels to prescribe the exact filtration system suitable for your family or enterprise.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Zero Obligation Water Audit</h4>
                    <p className="text-xs text-slate-500">We measure incoming and outgoing TDS at your kitchen sink.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Upfront Quotation</h4>
                    <p className="text-xs text-slate-500">Clear pricing on machines, installations, and warranty coverage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Swift 2-Hour Response</h4>
                    <p className="text-xs text-slate-500">Our customer team calls back promptly during business hours.</p>
                  </div>
                </div>
              </div>

              {/* Direct Quick Helpline */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Immediate Urgent Requirement?
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Helpline</span>
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Chat Directly</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Water Source Guide Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Droplet className="w-4 h-4 fill-cyan-400" />
                </div>
                <h4 className="text-sm font-bold">Quick Purity Recommendation</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-cyan-300">TDS &gt; 300 PPM (Borewell/Tanker):</strong> Needs Multi-Stage RO + UV + TDS Controller.<br />
                <strong className="text-cyan-300">TDS &lt; 250 PPM (Municipal):</strong> Advanced UV + UF Mineral Purifier is best.<br />
                <strong className="text-cyan-300">White Scale on Taps:</strong> Water Softener Resin Unit recommended.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 glass-panel border border-cyan-200 shadow-2xl shadow-cyan-900/10">
              {isSubmitted ? (
                /* Success State */
                <div id="inquiry-success-state" className="text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
                  <div className="w-18 h-18 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    Inquiry Submitted Successfully!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our SAI AGENCY water specialist will call you on <strong className="text-slate-900">{formData.mobile}</strong> shortly to discuss your <strong className="text-blue-600">{formData.serviceOrProduct}</strong> requirement.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-xs mx-auto">
                    <span className="text-xs text-slate-400 block font-semibold">Reference Inquiry ID</span>
                    <span className="text-lg font-mono font-extrabold text-blue-700">{inquiryId}</span>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      id="inquiry-success-whatsapp-btn"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
                    </button>

                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} id="water-inquiry-form" className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="inquiry-name"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 rounded-xl text-sm text-slate-900 bg-slate-50/90 border focus:bg-white focus:outline-none transition-all ${
                            errors.name
                              ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                              : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                          }`}
                        />
                        <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label
                        htmlFor="inquiry-mobile"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="inquiry-mobile"
                          value={formData.mobile}
                          onChange={(e) => {
                            setFormData({ ...formData, mobile: e.target.value });
                            if (errors.mobile) setErrors({ ...errors, mobile: '' });
                          }}
                          placeholder="10-digit mobile number"
                          className={`w-full px-4 py-3 rounded-xl text-sm text-slate-900 bg-slate-50/90 border focus:bg-white focus:outline-none transition-all ${
                            errors.mobile
                              ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                              : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                          }`}
                        />
                        <Smartphone className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      {errors.mobile && (
                        <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="inquiry-email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="your.email@gmail.com"
                          className={`w-full px-4 py-3 rounded-xl text-sm text-slate-900 bg-slate-50/90 border focus:bg-white focus:outline-none transition-all ${
                            errors.email
                              ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                              : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                          }`}
                        />
                        <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Select Service / Product */}
                    <div>
                      <label
                        htmlFor="inquiry-service"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Select Service / Product <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="inquiry-service"
                        value={formData.serviceOrProduct}
                        onChange={(e) => setFormData({ ...formData, serviceOrProduct: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm text-slate-900 bg-slate-50/90 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                      >
                        {serviceProductOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Incoming Water Source */}
                  <div>
                    <label
                      htmlFor="inquiry-water-source"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Primary Water Source (Helps us suggest the best membrane)
                    </label>
                    <select
                      id="inquiry-water-source"
                      value={formData.waterSource}
                      onChange={(e) => setFormData({ ...formData, waterSource: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm text-slate-900 bg-slate-50/90 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="Borewell / Underground Water">Borewell / Underground Water (Usually High TDS)</option>
                      <option value="Municipal / Corporation Tap Water">Municipal / Corporation Tap Water (Medium to Low TDS)</option>
                      <option value="Private Tanker Water Supply">Private Tanker Water Supply (Hard Water)</option>
                      <option value="Society Shared RO / Overhead Tank">Society Shared Overhead Tank</option>
                      <option value="Commercial / Industrial Factory Source">Commercial / Industrial Factory Source</option>
                      <option value="Not Sure - Please check TDS at my home">Not Sure - Please check TDS at my home</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Message / Special Requirements
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need urgent installation tomorrow morning in Kothrud, or current RO motor making buzzing sound..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-slate-900 bg-slate-50/90 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Dual Action Buttons (Send Inquiry + Send Inquiry on WhatsApp) */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Primary Submit Button */}
                    <button
                      type="submit"
                      id="submit-inquiry-btn"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 shadow-md shadow-blue-500/25 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </button>

                    {/* WhatsApp Inquiry Button with prefilled details (Requested specifically in prompt) */}
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      id="whatsapp-inquiry-btn"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Send Inquiry on WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    🔒 We respect your privacy. Your contact details are never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

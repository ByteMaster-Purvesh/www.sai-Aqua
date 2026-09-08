import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Wrench,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Phone,
  Gauge,
  Sparkles,
  Zap,
} from 'lucide-react';

export const ROInstallationSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Specifically for RO Installation. Please share more details.'
  )}`;

  const installationSteps = [
    {
      step: '01',
      title: 'Water Source & TDS Inspection',
      desc: 'Our technician checks your incoming water pressure, TDS level, and selects the ideal inlet point.',
    },
    {
      step: '02',
      title: 'Precision Wall / Under-Sink Mounting',
      desc: 'Sturdy drilling and balanced vibration-free wall mounting or neat under-cabinet positioning.',
    },
    {
      step: '03',
      title: 'Concealed Food-Grade Piping',
      desc: 'Heavy-duty brass divert valve, 100% food-grade virgin pipes, and concealed wire routing.',
    },
    {
      step: '04',
      title: 'Pressure & Leakage Stress Test',
      desc: 'High-pressure test across all tube fittings, membrane housing, and solenoid valves to guarantee zero drops.',
    },
    {
      step: '05',
      title: 'Live TDS Tuning & Demonstration',
      desc: 'Calibrating the TDS controller to 70–150 PPM and demonstrating regular tank maintenance to your family.',
    },
  ];

  return (
    <section id="ro-installation" className="py-24 relative bg-white overflow-hidden border-t border-slate-100">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3">
            <Wrench className="w-3.5 h-3.5 text-blue-600" />
            <span>Certified Technician Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional RO Installation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
            Clean, leak-proof, and aesthetic water purifier installation for all major domestic and commercial brands.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Split: Left Image + Specs, Right Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Premium Photo & Guarantee Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cyan-200/80 group">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80"
                alt="Professional water purifier installation in modern kitchen"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/90 text-slate-950 mb-2 w-fit">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>90-Day Installation Warranty</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black">
                  Zero Leakage Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  Installed using certified food-grade accessories, brass adapters, and precision pressure regulators.
                </p>
              </div>
            </div>

            {/* Quick Pricing & Booking Card */}
            <div className="p-6 rounded-3xl glass-panel border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Installation Fee</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">₹499</span>
                  <span className="text-xs text-slate-500">Starting price</span>
                </div>
                <p className="text-xs text-emerald-600 font-semibold mt-0.5">
                  ✓ Includes Free Pre-Filter Housing Fitting
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="book-installation-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: 5-Step Process Timeline */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              <span>Our 5-Point Precision Installation Process</span>
            </h3>

            <div className="space-y-4">
              {installationSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-950/5 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-black text-sm shrink-0 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout Bar */}
            <div className="mt-8 p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-900">
                <Zap className="w-4 h-4 text-blue-600" />
                <span>Need urgent same-day installation? Technicians available in 2–4 hours.</span>
              </div>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call {siteConfig.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

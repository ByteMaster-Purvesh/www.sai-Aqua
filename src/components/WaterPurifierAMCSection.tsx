import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  RotateCw,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Phone,
  Sparkles,
  Award,
  Zap,
  Check,
  X,
} from 'lucide-react';

export const WaterPurifierAMCSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Specifically for Water Purifier AMC. Please share more details.'
  )}`;

  const amcBenefits = [
    {
      title: '3 Scheduled Periodic Servicing Visits',
      desc: 'Automatic quarterly maintenance checkups to thoroughly clean filters, inspect connections, and sanitize the tank.',
    },
    {
      title: 'Free Replacement of Consumable Filters',
      desc: 'Includes genuine spun sediment filters and activated carbon cartridges replacement at zero extra cost.',
    },
    {
      title: 'Unlimited Emergency Breakdown Visits',
      desc: 'If your RO machine stops working anytime during the year, our technician visits your doorstep with ₹0 service fee.',
    },
    {
      title: 'RO Membrane Flushing & Descaling',
      desc: 'Preventive chemical wash to clear mineral scale deposits, extending membrane lifespan up to 24+ months.',
    },
    {
      title: 'Free Digital TDS & Water Hardness Testing',
      desc: 'Regular verification that your purified drinking water remains between the recommended 70–150 TDS range.',
    },
    {
      title: 'Priority VIP Helpline Dispatch',
      desc: 'Direct technician assignment within 2–4 hours for all AMC contract holders.',
    },
  ];

  return (
    <section id="ro-amc" className="py-24 relative bg-white overflow-hidden border-t border-slate-100">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3">
            <RotateCw className="w-3.5 h-3.5 text-blue-600" />
            <span>365-Day Worry-Free Protection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Water Purifier AMC Plans
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
            Annual Maintenance Contracts designed to protect your family's health and save up to 40% on filter changes and repair visits.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Comparison & Plan Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left: Key AMC Features List */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span>What Is Included in SAI AGENCY AMC?</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amcBenefits.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-300 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Featured AMC Pricing Card with Comparison */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-2xl border border-cyan-500/30 flex-1 flex flex-col justify-between overflow-hidden">
              {/* Decorative badge */}
              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-500/20 border border-cyan-400/40">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Most Popular Choice</span>
              </div>

              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  Comprehensive Annual Plan
                </span>
                <h4 className="text-2xl font-black text-white">Full Protection AMC</h4>
                <p className="text-xs text-slate-300 mt-1">Covers all domestic RO, UV, and Alkaline purifiers</p>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-white">₹2,499</span>
                  <span className="text-sm text-slate-400 line-through">₹3,499</span>
                  <span className="text-xs text-emerald-400 font-bold bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-md">
                    SAVE ₹1,000
                  </span>
                </div>
                <span className="text-xs text-slate-400 block mt-1">Per year / Complete machine protection</span>

                {/* Checklist inside card */}
                <div className="mt-6 space-y-2.5 pt-6 border-t border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>3 Periodic preventive health audits</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Free replacement of 2 pre-filter cartridges</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>100% Free breakdown visits for 365 days</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>TDS balancing & drinking water certification</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Priority same-day dispatch within 2 hours</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="enroll-amc-whatsapp-btn"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/30 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire for AMC on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

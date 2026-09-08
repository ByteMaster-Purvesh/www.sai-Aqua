import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  ShieldAlert,
  Wrench,
  CheckCircle2,
  MessageCircle,
  Phone,
  AlertTriangle,
  Zap,
  Sparkles,
  Clock,
} from 'lucide-react';

export const RORepairMaintenanceSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Specifically for RO Repair & Maintenance. Please share more details.'
  )}`;

  const commonIssues = [
    {
      problem: 'Low or No Water Output',
      solution: 'Choked sediment filter, choked RO membrane, or depleted booster pump pressure diagnosed and repaired.',
      time: '30 mins repair',
    },
    {
      problem: 'Continuous Drain Water Leakage',
      solution: 'Defective Auto Shut-Off (ASV) or faulty Solenoid Valve (SV) replaced with leak-proof parts.',
      time: 'Same-day fix',
    },
    {
      problem: 'Loud Buzzing or Vibrating Motor',
      solution: 'Booster pump head replacement or bearing lubrication to restore whisper-quiet operation.',
      time: '45 mins repair',
    },
    {
      problem: 'Foul Smell or Sour Water Taste',
      solution: 'Full sanitization, depleted activated carbon cartridge replacement, and post-carbon mineral recharge.',
      time: 'Instant sweet taste',
    },
    {
      problem: 'RO Purifier Not Turning On',
      solution: 'Diagnostics of SMPS 24V/36V power adapter, electrical wiring, float switch, and fuse safety.',
      time: 'Quick electrical repair',
    },
    {
      problem: 'Water Dripping From Machine Base',
      solution: 'Push-fit elbow joint replacement, silicone O-ring sealing, and high-pressure housing testing.',
      time: 'Zero-drip guarantee',
    },
  ];

  return (
    <section id="ro-repair" className="py-24 relative bg-slate-50/80 overflow-hidden border-t border-slate-200">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-600" />
            <span>Fast Breakdown Resolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            RO Repair & Maintenance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
            Experienced technicians equipped with genuine multi-brand spares to fix your water purifier on the spot.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 6 Common Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {commonIssues.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center text-xs font-black">
                    !
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    <Clock className="w-3 h-3 text-cyan-600" />
                    {item.time}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.problem}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.solution}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600">✓ Genuine Spares Fitted</span>
                <span className="text-xs font-bold text-slate-400">Fixed Rates</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with Technician Service Image & Genuine Parts Guarantee */}
        <div className="rounded-3xl overflow-hidden glass-panel border border-cyan-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
              alt="Technician testing and servicing water purifier equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/90 hidden lg:block"></div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Doorstep Visit Within 2–4 Hours</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Facing an Urgent Water Purifier Breakdown?
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Don't drink contaminated water. Send us a quick message with your machine's brand or a short video of the issue. Our certified technician will arrive with original spares and test your water purity right in front of you.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="urgent-repair-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Repair on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                id="urgent-repair-call-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

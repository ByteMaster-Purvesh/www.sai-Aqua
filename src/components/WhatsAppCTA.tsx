import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  MessageCircle,
  Phone,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const WhatsAppCTA: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Please share more details.'
  )}`;

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white">
      {/* Decorative ambient glowing circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 border border-emerald-500/30 glass-panel shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Column: Heading, Subheading & Quick Value Points */}
          <div className="space-y-5 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instant WhatsApp Assistance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Connect Directly on WhatsApp with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                SAI AGENCY
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have an issue with your RO or need a new water purifier? Send a photo or video of your water purifier on WhatsApp for instant troubleshooting and fast quotes.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Immediate 5-minute reply</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Same-day doorstep visit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent quotes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Phone Card & WhatsApp Action Button */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col items-center sm:items-stretch gap-4">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-center shadow-xl">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Direct WhatsApp Helpline
              </span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-wide font-mono block">
                {siteConfig.contact.whatsappDisplay}
              </span>
              <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1 mt-1">
                <Clock className="w-3 h-3 text-emerald-400" /> Active 7 Days a Week
              </span>
            </div>

            {/* Direct Big WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-cta-main-btn"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 text-slate-950 group-hover:rotate-12 transition-transform duration-300" />
              <span>Contact on WhatsApp Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-[11px] text-slate-400 text-center">
              Pre-filled inquiry ready: "Hello Sai Agency, I am interested..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

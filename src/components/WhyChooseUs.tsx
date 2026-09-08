import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Award,
  Zap,
  Droplets,
  AlertTriangle,
  Heart,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="why-us" className="py-24 relative bg-slate-50/80 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>The Purity Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose SAI AGENCY?
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            We are dedicated to safeguarding your family's health through certified water treatment engineering and prompt, ethical service.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Interactive Layout: Left Timeline Steps, Right Live Comparison Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Modern Timeline with Animated Check Icons */}
          <div className="lg:col-span-7 space-y-4">
            {siteConfig.whyChooseUs.map((item, index) => {
              const isSelected = activeStep === index;

              return (
                <div
                  key={index}
                  id={`why-choose-${index}`}
                  onClick={() => setActiveStep(index)}
                  className={`group relative p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-white shadow-xl shadow-cyan-500/10 border-cyan-400 -translate-x-1'
                      : 'bg-white/70 hover:bg-white border-slate-200/80 hover:border-cyan-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Animated Check Icon Container */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 scale-105'
                          : 'bg-cyan-50 text-cyan-700 border border-cyan-200/60 group-hover:scale-105'
                      }`}
                    >
                      <CheckCircle className={`w-6 h-6 transition-transform duration-300 ${isSelected ? 'rotate-12' : ''}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs font-extrabold text-slate-400 font-mono">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 bg-cyan-50/70 px-2.5 py-0.5 rounded-md border border-cyan-200/50">
                        <Sparkles className="w-3 h-3 text-cyan-600" />
                        <span>{item.point}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Tap Water vs SAI Pure Water Purity Comparison Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-cyan-200 shadow-2xl shadow-cyan-900/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider block">Lab Tested</span>
                  <h4 className="text-xl font-extrabold text-slate-900">Purity Contrast</h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Droplets className="w-5 h-5" />
                </div>
              </div>

              {/* Tap Water vs Purified Comparison Bars */}
              <div className="space-y-6">
                {/* Raw Tap / Borewell Water */}
                <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
                  <div className="flex items-center justify-between text-xs font-bold text-rose-700 mb-2">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" /> Raw Tap / Borewell
                    </span>
                    <span>TDS: 850 - 1500+ PPM</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-rose-200 overflow-hidden">
                    <div className="w-[85%] h-full bg-rose-500 rounded-full"></div>
                  </div>
                  <p className="text-[11px] text-rose-700 mt-2 font-medium">
                    Heavy dissolved solids, excess hardness, rust, chlorine and microbial risks.
                  </p>
                </div>

                {/* SAI Agency Purified Water */}
                <div className="p-4 rounded-2xl bg-emerald-50/90 border border-emerald-300 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-800 mb-2">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> SAI Agency Purified
                    </span>
                    <span>TDS: 75 - 120 PPM</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-emerald-200 overflow-hidden">
                    <div className="w-[18%] h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                  </div>
                  <p className="text-[11px] text-emerald-800 mt-2 font-medium">
                    100% Pathogen free, optimal pH balance (7.5-8.2), enriched with bio-minerals.
                  </p>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Heart className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Your Family's Health First</div>
                  <div className="text-xs text-slate-600">
                    Trusted by 500+ households across the city for clean drinking water.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

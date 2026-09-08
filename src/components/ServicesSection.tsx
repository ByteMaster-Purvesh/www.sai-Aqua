import React, { useState } from 'react';
import { siteConfig, ServiceItem } from '../config/siteConfig';
import {
  Wrench,
  ShieldCheck,
  RotateCw,
  Filter,
  Activity,
  Droplet,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ServicesSectionProps {
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-600" />;
      case 'RotateCw':
        return <RotateCw className="w-6 h-6 text-indigo-600" />;
      case 'Filter':
        return <Filter className="w-6 h-6 text-teal-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-sky-600" />;
      default:
        return <Wrench className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Fast Doorstep Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            Comprehensive multi-brand water purifier servicing, certified repairs, and original spare replacements with rapid doorstep turnaround.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => {
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-3xl p-7 bg-white border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? '-translate-y-2 shadow-2xl shadow-cyan-500/15 border-cyan-400 bg-gradient-to-b from-white to-sky-50/30'
                    : 'shadow-md shadow-slate-900/5 border-slate-200 hover:border-cyan-200'
                }`}
              >
                {/* Top Border Animated Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-t-3xl transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>

                <div>
                  {/* Icon & Turnaround Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-cyan-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100/90 border border-slate-200/60">
                      <Clock className="w-3 h-3 text-cyan-600" />
                      <span>{service.turnaroundTime}</span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Book Service Button Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 font-semibold block uppercase">Starts At</span>
                    <span className="text-base font-extrabold text-blue-700">{service.startingPrice}</span>
                  </div>

                  <button
                    onClick={() => onBookService(service.title)}
                    id={`book-service-${service.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 group-hover:shadow-md transition-all transform group-hover:translate-x-0.5"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Multi-Compatibility Banner */}
        <div className="mt-14 py-8 px-6 rounded-3xl glass-panel border border-slate-200 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
            We Service & Repair All Major Water Purifier Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base font-bold text-slate-700">
            <span className="px-3 py-1 bg-slate-100 rounded-lg">Kent RO</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg">Aquaguard / Eureka Forbes</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg">Pureit / Unilever</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg">Livpure</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg">Havells</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg">Blue Star</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg">Custom Assembled ROs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Filter,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Phone,
  Droplet,
  Sparkles,
  Calendar,
  Layers,
} from 'lucide-react';

export const FilterMembraneSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Specifically for Filter / Membrane Replacement. Please share more details.'
  )}`;

  const filterStages = [
    {
      stage: 'Stage 1',
      name: 'Spun Polypropylene Sediment Filter',
      cycle: 'Every 3–6 Months',
      function: 'Captures physical impurities, mud, sand, rust, and silt to safeguard the internal membrane.',
      badge: 'First Line of Defense',
    },
    {
      stage: 'Stage 2',
      name: 'High-Absorption Activated Carbon Block',
      cycle: 'Every 6–12 Months',
      function: 'Eliminates chlorine, volatile organic compounds (VOCs), agricultural pesticides, and odor.',
      badge: 'De-Chlorination',
    },
    {
      stage: 'Stage 3',
      name: 'TFC Reverse Osmosis (RO) Membrane',
      cycle: 'Every 18–24 Months',
      function: '0.0001 micron pores reject heavy metals (lead, arsenic, mercury) and reduce TDS up to 95%.',
      badge: 'Core Desalination',
    },
    {
      stage: 'Stage 4',
      name: 'High-Power UV / Ultra-Filtration (UF)',
      cycle: 'Every 12 Months',
      function: 'Lethal UV-C radiation disinfects water, killing 99.99% of bacteria, viruses, and waterborne pathogens.',
      badge: 'Microbial Safety',
    },
    {
      stage: 'Stage 5',
      name: 'Silver-Impregnated Post-Carbon Polisher',
      cycle: 'Every 12 Months',
      function: 'Prevents bacterial recontamination in storage tank and restores natural crisp sweet taste.',
      badge: 'Sweet Taste Restorer',
    },
    {
      stage: 'Stage 6',
      name: 'Bio-Alkaline & Mineral Enricher',
      cycle: 'Every 12 Months',
      function: 'Replenishes healthy Calcium, Magnesium & Potassium ions, lifting water pH to optimal 8.0–9.5.',
      badge: 'Health Infusion',
    },
  ];

  return (
    <section id="ro-filters" className="py-24 relative bg-slate-50/80 overflow-hidden border-t border-slate-200">
      {/* Soft background ambient blurs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3">
            <Filter className="w-3.5 h-3.5 text-blue-600" />
            <span>100% Genuine Sealed Cartridges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Filter & Membrane Replacement
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
            Restore sweet taste and pure water output with factory-sealed, certified filter media and authentic RO membranes.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 6 Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filterStages.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-lg">
                    {item.stage}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3 text-cyan-600" />
                    {item.cycle}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.function}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-md">
                  {item.badge}
                </span>
                <span className="text-xs font-semibold text-emerald-600">✓ Sealed Original</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live TDS Verification Bar & Action Callout */}
        <div className="rounded-3xl p-8 bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
              <span>Before & After Digital TDS Verification</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black">
              Unsure if your filters or membrane need replacement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our technician carries a calibrated digital TDS meter and tests your purified water live at your kitchen sink. No unnecessary replacements—honest advice guaranteed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="filter-replacement-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-400/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Replacement on WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              <span>{siteConfig.contact.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

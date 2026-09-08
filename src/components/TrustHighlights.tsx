import React, { useState } from 'react';
import { Award, Wrench, Zap, Headphones, CheckCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const TrustHighlights: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-125" />;
      case 'Wrench':
        return <Wrench className="w-7 h-7 text-cyan-600 transition-transform duration-300 group-hover:scale-125" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-amber-500 transition-transform duration-300 group-hover:scale-125" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7 text-teal-600 transition-transform duration-300 group-hover:scale-125" />;
      default:
        return <Sparkles className="w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-125" />;
    }
  };

  return (
    <section id="trust-highlights" className="relative py-12 -mt-8 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.highlights.map((highlight) => {
            const isHovered = hoveredCard === highlight.id;
            return (
              <div
                key={highlight.id}
                id={`trust-card-${highlight.id}`}
                onMouseEnter={() => setHoveredCard(highlight.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-3xl p-6 sm:p-7 glass-panel transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isHovered
                    ? '-translate-y-2.5 shadow-2xl shadow-cyan-500/20 border-cyan-400/80 bg-white/95'
                    : 'shadow-md shadow-slate-900/5 border-slate-200/70 hover:border-cyan-300/80'
                }`}
              >
                {/* Border Glow Gradient Line on Top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>

                {/* Soft ambient radial background on hover */}
                <div
                  className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-cyan-200/40 blur-2xl transition-opacity duration-300 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>

                {/* Icon Container with Scaling Effect */}
                <div className="relative mb-5 flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-cyan-100 flex items-center justify-center shadow-inner group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors duration-300">
                    {getIcon(highlight.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider group-hover:text-cyan-600 transition-colors">
                    SAI ASSURED
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {highlight.desc}
                </p>

                {/* Subtle verified check footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

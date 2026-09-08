import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Tag,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const SpecialOffers: React.FC = () => {
  const handleWhatsAppOffer = (offerTitle: string, price: string) => {
    const message = `Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Specifically for the ${offerTitle} deal (${price}). Please share more details.`;
    window.open(
      `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="offers" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white">
      {/* Glow Effects in dark theme */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 mb-3 shadow-inner">
            <Tag className="w-3.5 h-3.5 text-cyan-400" />
            <span>Limited Period Deals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Special Offers Available
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 max-w-2xl mx-auto">
            Get the right water purification solution at the right price.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.offers.map((offer) => {
            const isPopular = offer.popular;

            return (
              <div
                key={offer.id}
                id={`offer-card-${offer.id}`}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-900/90 to-blue-900/60 border-cyan-400 shadow-2xl shadow-cyan-500/20 lg:-translate-y-3'
                    : 'glass-panel-dark border-slate-700/70 hover:border-cyan-500/60 shadow-xl'
                }`}
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider text-slate-900 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 shadow-lg shadow-cyan-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                    <span>{offer.badge}</span>
                  </div>
                )}

                <div>
                  {/* Top Badge for non-popular */}
                  {!isPopular && (
                    <div className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700 mb-4">
                      <Zap className="w-3 h-3 text-cyan-400" />
                      <span>{offer.badge}</span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {offer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {offer.price}
                      </span>
                      {offer.duration && (
                        <span className="text-xs text-slate-400 font-medium">/{offer.duration}</span>
                      )}
                      {offer.originalPrice && (
                        <span className="text-sm text-slate-400 line-through ml-1">
                          {offer.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-cyan-400 font-semibold block mt-1">
                      Includes Doorstep Visit & Inspection
                    </span>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mt-6 pt-6 border-t border-slate-800">
                    {offer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-8 mt-6">
                  <button
                    onClick={() => handleWhatsAppOffer(offer.title, offer.price)}
                    id={`claim-offer-${offer.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                      isPopular
                        ? 'text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/25'
                        : 'text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-cyan-400'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Get Offer on WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Price Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 max-w-xl mx-auto flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Special promo packages are subject to local water TDS evaluation and availability. Customized AMC plans available.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

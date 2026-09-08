import React, { useState } from 'react';
import { siteConfig, Product } from '../config/siteConfig';
import {
  Sparkles,
  MessageCircle,
  Eye,
  Star,
  CheckCircle2,
  SlidersHorizontal,
  ArrowUpRight,
  Droplet,
} from 'lucide-react';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Filter products by selected category
  const filteredProducts = activeTab === 'all'
    ? siteConfig.products
    : siteConfig.products.filter((p) => p.category === activeTab);

  const filterTabs = [
    { id: 'all', label: 'All Purifiers' },
    { id: 'domestic', label: 'Domestic RO & UV' },
    { id: 'alkaline', label: 'Alkaline & Mineral' },
    { id: 'commercial', label: 'Commercial Plants' },
    { id: 'softener', label: 'Water Softeners' },
  ];

  const handleWhatsAppInquiry = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = `Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Specifically for ${product.name} (${product.price}). Please share more details.`;
    window.open(
      `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section id="products" className="py-24 relative bg-slate-50/70 overflow-hidden">
      {/* Background soft ambient shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200/70 mb-3">
            <Droplet className="w-3.5 h-3.5 text-cyan-600 fill-cyan-500" />
            <span>High Purity Water Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Water Purifier Solutions
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            Engineered for high TDS borewell water, municipal supply, and tanker water. Certified food-grade materials with multi-stage mineral protection.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`product-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 -translate-y-0.5'
                    : 'bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-100/80 border border-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isHovered = hoveredCardId === product.id;

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                onMouseEnter={() => setHoveredCardId(product.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className={`group relative rounded-3xl bg-white border transition-all duration-300 flex flex-col overflow-hidden ${
                  isHovered
                    ? '-translate-y-2 shadow-2xl shadow-cyan-500/15 border-cyan-300'
                    : 'shadow-md shadow-slate-900/5 border-slate-200 hover:border-cyan-200'
                }`}
              >
                {/* Product Image Section with Zoom */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Soft Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-900 bg-white/95 shadow-md backdrop-blur-md border border-cyan-100">
                      <Sparkles className="w-3 h-3 text-cyan-600" />
                      <span>{product.badge}</span>
                    </div>
                  )}

                  {/* Rating Pill */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold text-slate-900 bg-white/90 shadow-sm backdrop-blur-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
                  </div>

                  {/* Price Banner Overlay at Bottom of Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between text-white">
                    <div>
                      <span className="text-2xl font-black tracking-tight">{product.price}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-xs text-slate-300 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/90 text-white backdrop-blur-xs">
                      GST Included
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Subtitle / Category tag */}
                    <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">
                      {product.subtitle}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Feature Pills */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-xs text-slate-700 font-medium truncate"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: View Details & Enquire on WhatsApp */}
                  <div className="pt-6 mt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                    {/* View Details Button */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      id={`view-details-${product.id}`}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/80 transition-colors border border-slate-200"
                    >
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span>View Details</span>
                    </button>

                    {/* Enquire on WhatsApp Button */}
                    <button
                      onClick={(e) => handleWhatsAppInquiry(product, e)}
                      id={`whatsapp-enquiry-${product.id}`}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/25 transition-all group-hover:shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="truncate">WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Banner */}
        <div className="mt-14 p-6 rounded-3xl glass-panel border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
              <Droplet className="w-6 h-6 fill-cyan-500 text-cyan-600" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Not sure which water purifier is right for your water source?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Get a 100% Free Doorstep Water TDS & Hardness Test. Our water specialists will advise the ideal setup.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hello ${siteConfig.business.name}, I want to request a Free Doorstep Water TDS & Hardness Test.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shrink-0 shadow-md shadow-blue-500/20"
          >
            <span>Book Free Water Test</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

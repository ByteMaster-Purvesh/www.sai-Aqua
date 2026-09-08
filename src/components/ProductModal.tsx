import React, { useEffect } from 'react';
import { Product, siteConfig } from '../config/siteConfig';
import {
  X,
  Star,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
  Award,
  Droplet,
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onBookConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const msg = `Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Specifically for ${product.name} (${product.price}). Please share more details.`;
    window.open(
      `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <div
      id="product-details-modal"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-cyan-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          id="close-product-modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center backdrop-blur-md shadow-md transition-all"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Image & Price Left/Top Column */}
          <div className="md:col-span-5 bg-slate-50 relative flex flex-col justify-between p-6 border-b md:border-b-0 md:border-r border-slate-200">
            <div>
              {/* Badge */}
              {product.badge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-800 bg-blue-100/90 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>{product.badge}</span>
                </div>
              )}

              {/* Image */}
              <div className="rounded-2xl overflow-hidden aspect-square bg-white border border-slate-200 shadow-sm flex items-center justify-center p-2 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 justify-center text-xs font-bold text-slate-700">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="mt-6 p-4 rounded-2xl bg-white border border-cyan-100 shadow-xs text-center">
              <span className="text-xs text-slate-400 font-semibold block uppercase">Special Demo Price</span>
              <div className="flex items-baseline justify-center gap-2 mt-1">
                <span className="text-3xl font-black text-slate-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
                )}
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold block mt-1">
                ✓ Free Standard Installation Included
              </span>
            </div>
          </div>

          {/* Details Right Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-600">
                {product.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {product.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Core Purification Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Technical Specifications
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Purification Stages</span>
                    <span className="font-semibold text-slate-800 text-right max-w-[60%]">
                      {product.specifications.purificationStages}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Storage Tank</span>
                    <span className="font-semibold text-slate-800">
                      {product.specifications.storageCapacity}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Filtration Speed</span>
                    <span className="font-semibold text-slate-800">
                      {product.specifications.purificationCapacity}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Membrane Type</span>
                    <span className="font-semibold text-slate-800">
                      {product.specifications.membraneType}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">TDS Reduction</span>
                    <span className="font-semibold text-slate-800">
                      {product.specifications.tdsReduction}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Warranty Support</span>
                    <span className="font-semibold text-emerald-600">
                      {product.specifications.warranty}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleWhatsAppInquiry}
                id="modal-whatsapp-inquire-btn"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookConsultation();
                }}
                id="modal-book-consult-btn"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Doorstep Visit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

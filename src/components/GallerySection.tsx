import React, { useState } from 'react';
import { siteConfig, GalleryItem } from '../config/siteConfig';
import {
  Eye,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Layers,
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'installation', label: 'Installations' },
    { id: 'servicing', label: 'Technician Servicing' },
    { id: 'commercial', label: 'Commercial Plants' },
    { id: 'products', label: 'Pure Water & Products' },
  ];

  const filteredItems = activeCategory === 'all'
    ? siteConfig.gallery
    : siteConfig.gallery.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="py-24 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200/70 mb-3">
            <Camera className="w-3.5 h-3.5 text-cyan-600" />
            <span>Recent Projects & Doorstep Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Work / Project Gallery
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            A showcase of our recent water purifier installations, commercial RO plants, technician servicing, and crystal clean drinking water setups.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-100 aspect-[4/3] shadow-md hover:shadow-2xl hover:shadow-cyan-900/15 transition-all duration-300 border border-slate-200"
            >
              {/* Image with slight zoom effect on hover */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                {/* "View" icon button */}
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                  <Eye className="w-6 h-6" />
                </div>

                <h4 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-300">
                  <Sparkles className="w-3 h-3" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden max-h-[70vh] shadow-2xl border border-white/20 bg-black">
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Caption bar */}
            <div className="mt-4 text-center text-white max-w-xl">
              <h3 className="text-lg font-bold">
                {filteredItems[selectedImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {filteredItems[selectedImageIndex].description}
              </p>
              <span className="text-xs text-cyan-400 font-semibold mt-2 inline-block">
                Image {selectedImageIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

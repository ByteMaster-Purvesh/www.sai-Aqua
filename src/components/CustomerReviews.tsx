import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const testimonials = siteConfig.testimonials;

  // Auto slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="reviews"
      className="py-24 relative overflow-hidden bg-slate-50/70"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Valued Customers Say
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            Honest feedback from homeowners, commercial offices, and clinics who rely on SAI AGENCY every single day.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Testimonial Card */}
          <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-200/80 shadow-2xl shadow-cyan-950/5 transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              {/* 5-Star Rating */}
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-xs"
                  />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-700">5.0 Star Rating</span>
              </div>

              {/* Service/Product Tag */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-200">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-600" />
                {testimonials[currentIndex].serviceOrProduct}
              </span>
            </div>

            {/* Quote Icon & Text */}
            <div className="relative">
              <Quote className="w-12 h-12 text-cyan-200/50 absolute -top-4 -left-2 -z-10" />
              <p className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed italic">
                "{testimonials[currentIndex].review}"
              </p>
            </div>

            {/* Author Info */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md shadow-slate-900/10"
                />
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 font-medium">
                    <span>{testimonials[currentIndex].location}</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-semibold">{testimonials[currentIndex].date}</span>
                  </p>
                </div>
              </div>

              {/* Google Verified Seal */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100/80 px-3 py-1.5 rounded-xl border border-slate-200/60">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Verified Client Review</span>
              </div>
            </div>
          </div>

          {/* Controls: Prev & Next Buttons */}
          <button
            onClick={handlePrev}
            id="testimonial-prev-btn"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-slate-700 shadow-xl border border-slate-200 hover:text-blue-600 hover:border-cyan-300 flex items-center justify-center transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            id="testimonial-next-btn"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-slate-700 shadow-xl border border-slate-200 hover:text-blue-600 hover:border-cyan-300 flex items-center justify-center transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                id={`testimonial-dot-${idx}`}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-blue-600 shadow-sm shadow-blue-500/50'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-14 max-w-2xl mx-auto text-center flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="font-black text-slate-900 text-base">4.9 / 5.0</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
          </div>
          <span>•</span>
          <span className="font-semibold text-slate-700">Based on 450+ Verified Ratings</span>
          <span>•</span>
          <span className="text-emerald-600 font-bold">100% Doorstep Satisfaction</span>
        </div>
      </div>
    </section>
  );
};

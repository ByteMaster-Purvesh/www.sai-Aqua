import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  ShieldCheck,
  CheckCircle2,
  Droplet,
  Award,
  Users,
  Clock,
  HeartHandshake,
  ArrowRight,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    customers: 0,
    installations: 0,
    support: 0,
    focus: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counts up
          const duration = 1800; // ms
          const startTime = performance.now();

          const animateCounts = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              customers: Math.floor(easeOut * 500),
              installations: Math.floor(easeOut * 1000),
              support: Math.floor(easeOut * 24),
              focus: Math.floor(easeOut * 100),
            });

            if (progress < 1) {
              requestAnimationFrame(animateCounts);
            } else {
              setCounts({
                customers: 500,
                installations: 1000,
                support: 24,
                focus: 100,
              });
            }
          };

          requestAnimationFrame(animateCounts);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white"
    >
      {/* Subtle background blurs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>About SAI AGENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {siteConfig.business.aboutHeading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Split Layout: Left Visual, Right Business Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Premium Water Purifier / Clean Water Visual with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Pure Water and Modern RO Purifier System"
                  className="w-full h-[440px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Visual Glass Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10"></div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold mb-2">
                    <Droplet className="w-3.5 h-3.5 text-cyan-300 fill-cyan-300" />
                    <span>Micro-filtration & Mineral Balance</span>
                  </div>
                  <h4 className="text-xl font-bold leading-tight">
                    Every drop purified to scientific perfection
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1">
                    Eliminates heavy metals, cysts, pesticide residue and excess salts while preserving essential minerals.
                  </p>
                </div>
              </div>

              {/* Floating Quality Assurance Badge (Top-Right) */}
              <div className="absolute -top-6 -right-3 sm:-right-6 glass-panel p-4 rounded-2xl shadow-xl shadow-cyan-900/10 border border-cyan-200 max-w-[210px] animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">Certified RO Tech</div>
                    <div className="text-[10px] text-cyan-700 font-semibold">TDS reduction up to 95%</div>
                  </div>
                </div>
              </div>

              {/* Floating Doorstep Service Guarantee Badge (Bottom-Left) */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 glass-panel p-4 rounded-2xl shadow-xl shadow-blue-900/10 border border-blue-200 max-w-[220px] animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">100% Genuine Spares</div>
                    <div className="text-[10px] text-emerald-700 font-semibold">With warranty certificate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Information & Animated Statistics */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Delivering Health, Safety & Mineral-Rich Water Since 2018
            </h3>

            {/* Core Content requested */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {siteConfig.business.aboutContent}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are looking to purchase a new domestic RO system for your apartment, need emergency breakdown repairs, or require custom commercial water plants for your facility, SAI AGENCY stands as your trusted one-stop partner.
            </p>

            {/* Business Features Bullet Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Certified multi-brand technicians',
                'Pre & post installation TDS audit',
                'Transparent pricing with zero hidden fees',
                'Automated maintenance reminder alerts',
                'Dedicated commercial & domestic teams',
                'Quick WhatsApp booking assistance',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Animated Statistics Grid (Requested: 500+ Happy Customers, 1000+ Installations, 24/7 Support, 100% Customer Focus) */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* 500+ Happy Customers */}
                <div className="glass-card-subtle p-4 rounded-2xl text-center border border-cyan-100 hover:border-cyan-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-2">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {counts.customers}
                    <span className="text-blue-600">+</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Happy Customers</div>
                </div>

                {/* 1000+ Installations */}
                <div className="glass-card-subtle p-4 rounded-2xl text-center border border-cyan-100 hover:border-cyan-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 mx-auto mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {counts.installations}
                    <span className="text-cyan-600">+</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Installations</div>
                </div>

                {/* 24/7 Support */}
                <div className="glass-card-subtle p-4 rounded-2xl text-center border border-cyan-100 hover:border-cyan-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 mx-auto mb-2">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {counts.support}
                    <span className="text-teal-600">/7</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Support</div>
                </div>

                {/* 100% Customer Focus */}
                <div className="glass-card-subtle p-4 rounded-2xl text-center border border-cyan-100 hover:border-cyan-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mx-auto mb-2">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {counts.focus}
                    <span className="text-indigo-600">%</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Customer Focus</div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all duration-200"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Direct Helpline</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

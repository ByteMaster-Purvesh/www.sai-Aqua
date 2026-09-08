import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Droplet,
  ShieldCheck,
  Wrench,
  Award,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Activity,
  Zap,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Handle smooth mouse parallax movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Please share more details.'
  )}`;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  // Parallax transform calculations
  const rotateX = mousePos.y * -14;
  const rotateY = mousePos.x * 16;
  const transX = mousePos.x * 20;
  const transY = mousePos.y * 20;

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex items-center bg-gradient-to-b from-sky-50/70 via-white to-blue-50/40"
    >
      {/* Background Subtle Gradient Lighting Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute top-40 right-10 w-[30rem] h-[30rem] bg-blue-200/35 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Floating Water Droplet SVGs in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
        <div
          className="absolute top-24 left-[12%] text-cyan-300/60 animate-float"
          style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
        >
          <Droplet className="w-8 h-8 fill-cyan-200/50 text-cyan-400" />
        </div>
        <div
          className="absolute top-1/3 left-[4%] text-blue-300/40 animate-float-slow"
          style={{ transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)` }}
        >
          <Droplet className="w-12 h-12 fill-blue-200/40 text-blue-400" />
        </div>
        <div
          className="absolute bottom-28 left-[45%] text-teal-300/50 animate-float-reverse"
          style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
        >
          <Droplet className="w-6 h-6 fill-teal-200/40 text-teal-400" />
        </div>
        <div
          className="absolute top-20 right-[15%] text-sky-400/50 animate-float"
          style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
        >
          <Droplet className="w-10 h-10 fill-sky-200/40 text-sky-400" />
        </div>
        <div
          className="absolute bottom-20 right-[8%] text-cyan-400/40 animate-float-slow"
          style={{ transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -18}px)` }}
        >
          <Droplet className="w-7 h-7 fill-cyan-200/50 text-cyan-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-blue-700 bg-white/90 shadow-sm border border-blue-100 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-slate-800 font-bold">#1 Rated Water Purifier & RO Service in Town</span>
              <span className="text-blue-400">•</span>
              <span className="text-cyan-600">100% Genuine Spares</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {siteConfig.business.heroHeading}
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 leading-snug">
              {siteConfig.business.heroSubheading}
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {siteConfig.business.heroSupportingText}
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Multi-Stage RO + UV + Alkaline Technology</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Prompt Doorstep Service in 2-4 Hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Free Pre-Installation Water TDS Audit</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Certified Genuine Filter Membranes</span>
              </div>
            </div>

            {/* Hero Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('products')}
                id="hero-explore-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Fast Customer Guarantee Bar */}
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1 text-slate-600">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> Same-Day Visit
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> 1-Year Warranty
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-600">
                <Award className="w-3.5 h-3.5 text-cyan-600" /> 100% Genuine Spares
              </span>
            </div>
          </div>

          {/* Right Column: 3D Water Purifier Hero Presentation with Mouse Parallax */}
          <div className="lg:col-span-5 flex items-center justify-center perspective-1000 relative">
            {/* 3D Transform Stage Container */}
            <div
              id="hero-3d-visual-container"
              className="relative w-full max-w-md aspect-[4/5] sm:aspect-square flex items-center justify-center preserve-3d transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${transX * 0.5}px, ${
                  transY * 0.5
                }px, 0px)`,
              }}
            >
              {/* Backing Ambient Halo & Light Disc */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/20 to-teal-300/25 blur-2xl -z-10"></div>
              
              {/* Main Premium Water Purifier Presentation Card */}
              <div
                className="relative w-[85%] sm:w-[88%] rounded-3xl p-6 glass-panel border border-cyan-200/90 shadow-2xl shadow-cyan-900/15 overflow-hidden preserve-3d"
                style={{
                  transform: 'translateZ(30px)',
                }}
              >
                {/* Purifier Top Bar & Status Lights */}
                <div className="flex items-center justify-between border-b border-cyan-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-sm">
                      <Droplet className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-800 tracking-wider">SAI RO SMART 2026</div>
                      <div className="text-[10px] text-cyan-600 font-semibold">Active Alkaline + Copper</div>
                    </div>
                  </div>

                  {/* LED Indicator Status Lights */}
                  <div className="flex items-center gap-1.5">
                    <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      RO ACTIVE
                    </span>
                  </div>
                </div>

                {/* Purifier Central Visual: Sleek Modern Aesthetic Appliance */}
                <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 p-5 text-white shadow-inner overflow-hidden border border-cyan-500/30">
                  {/* Internal ambient glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/25 rounded-full blur-xl"></div>
                  
                  {/* Digital TDS Monitor Display HUD */}
                  <div className="bg-slate-950/80 border border-cyan-400/40 rounded-xl p-3 mb-4 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[11px] text-cyan-300 font-medium mb-1">
                      <span className="flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5 text-cyan-400" /> Real-time Purity
                      </span>
                      <span className="text-emerald-400 font-bold">OPTIMAL</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-3xl font-black tracking-tight text-white">72</span>
                        <span className="text-xs text-cyan-300 ml-1 font-bold">PPM TDS</span>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400">Purification Status</div>
                        <div className="text-xs text-cyan-400 font-bold">99.9% Mineral Balance</div>
                      </div>
                    </div>
                  </div>

                  {/* Water Tank Level Chamber with Illuminated Bubbles */}
                  <div className="relative h-32 rounded-xl bg-gradient-to-t from-blue-600/40 via-cyan-500/20 to-transparent border border-cyan-400/30 p-3 flex flex-col justify-between overflow-hidden">
                    <div className="flex justify-between items-center text-[10px] text-cyan-200/80 font-semibold z-10">
                      <span>STORAGE TANK</span>
                      <span className="bg-cyan-500/30 px-2 py-0.5 rounded text-cyan-200">10 LITRES FULL</span>
                    </div>

                    {/* Animated Water Surface Waves */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-500/35 to-blue-600/10 pointer-events-none">
                      <div className="w-full h-2 bg-cyan-300/60 blur-xs"></div>
                    </div>

                    {/* Floating water particles inside tank */}
                    <div className="absolute bottom-2 left-6 w-2 h-2 rounded-full bg-cyan-300/80 animate-float"></div>
                    <div className="absolute bottom-6 left-24 w-1.5 h-1.5 rounded-full bg-white/70 animate-float-reverse"></div>
                    <div className="absolute bottom-4 right-12 w-2.5 h-2.5 rounded-full bg-cyan-200/60 animate-float-slow"></div>

                    {/* Dispenser Nozzle & Droplet */}
                    <div className="relative z-10 flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center border border-cyan-300/40">
                          <Droplet className="w-3.5 h-3.5 text-cyan-300 animate-bounce" />
                        </div>
                        <span className="text-xs font-bold text-cyan-100">Crystal Fresh Flow</span>
                      </div>
                      <span className="text-[10px] text-emerald-300 font-semibold">15 LPH Speed</span>
                    </div>
                  </div>

                  {/* Filter Stage Multi-Indicator */}
                  <div className="grid grid-cols-4 gap-1.5 mt-3 pt-3 border-t border-slate-800 text-[9px] text-center font-semibold">
                    <div className="bg-slate-900/90 py-1 rounded border border-slate-700/60 text-cyan-300">RO MEMB</div>
                    <div className="bg-slate-900/90 py-1 rounded border border-slate-700/60 text-cyan-300">UV STERIL</div>
                    <div className="bg-slate-900/90 py-1 rounded border border-slate-700/60 text-cyan-300">ALKALINE</div>
                    <div className="bg-slate-900/90 py-1 rounded border border-slate-700/60 text-cyan-300">COPPER+</div>
                  </div>
                </div>

                {/* Card Footer Guarantee */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Tested & Certified
                  </span>
                  <span className="font-bold text-blue-700">ISO 9001:2015 Approved</span>
                </div>
              </div>

              {/* 4 Animated Floating Badge Elements Around the Product (Requested in prompt) */}
              
              {/* 1. Pure Water */}
              <div
                id="floating-badge-pure-water"
                className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl glass-panel border border-cyan-200 shadow-xl shadow-cyan-900/10 flex items-center gap-2.5 text-slate-800 font-bold text-xs sm:text-sm animate-float preserve-3d"
                style={{
                  transform: `translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 60px)`,
                }}
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 shadow-inner">
                  <Droplet className="w-4 h-4 fill-cyan-500 text-cyan-600" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 leading-tight">Pure Water</div>
                  <div className="text-[10px] text-cyan-600 font-semibold">99.9% Impurity Free</div>
                </div>
              </div>

              {/* 2. Advanced Filtration */}
              <div
                id="floating-badge-advanced-filtration"
                className="absolute top-24 -right-4 sm:-right-8 px-4 py-2.5 rounded-2xl glass-panel border border-blue-200 shadow-xl shadow-blue-900/10 flex items-center gap-2.5 text-slate-800 font-bold text-xs sm:text-sm animate-float-reverse preserve-3d"
                style={{
                  transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 75px)`,
                }}
              >
                <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 leading-tight">Advanced Filtration</div>
                  <div className="text-[10px] text-blue-600 font-semibold">7-Stage RO + UV + TDS</div>
                </div>
              </div>

              {/* 3. Expert Service */}
              <div
                id="floating-badge-expert-service"
                className="absolute -bottom-4 -left-2 sm:-left-4 px-4 py-2.5 rounded-2xl glass-panel border border-teal-200 shadow-xl shadow-teal-900/10 flex items-center gap-2.5 text-slate-800 font-bold text-xs sm:text-sm animate-float-slow preserve-3d"
                style={{
                  transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 50px)`,
                }}
              >
                <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 shadow-inner">
                  <Wrench className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 leading-tight">Expert Service</div>
                  <div className="text-[10px] text-teal-600 font-semibold">Doorstep within 2-4 hrs</div>
                </div>
              </div>

              {/* 4. Trusted Quality */}
              <div
                id="floating-badge-trusted-quality"
                className="absolute -bottom-6 -right-2 sm:-right-6 px-4 py-2.5 rounded-2xl glass-panel border border-amber-200 shadow-xl shadow-amber-900/10 flex items-center gap-2.5 text-slate-800 font-bold text-xs sm:text-sm animate-float preserve-3d"
                style={{
                  transform: `translate3d(${mousePos.x * 30}px, ${mousePos.y * 30}px, 70px)`,
                }}
              >
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-inner">
                  <Award className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 leading-tight">Trusted Quality</div>
                  <div className="text-[10px] text-amber-600 font-semibold">100% Genuine Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

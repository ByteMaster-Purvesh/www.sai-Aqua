import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Droplets, Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = ['home', 'about', 'products', 'services', 'offers', 'why-us', 'gallery', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="top-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-lg shadow-cyan-950/5 py-3.5 border-b border-cyan-100/80'
          : 'bg-white/80 backdrop-blur-md py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="navbar-brand-logo"
            className="group flex items-center gap-3 cursor-pointer focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300">
              <Droplets className="w-6 h-6 animate-pulse-subtle" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {siteConfig.business.name}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200/60">
                  <ShieldCheck className="w-3 h-3 mr-0.5 text-cyan-600" /> RO Expert
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500 tracking-wide">
                {siteConfig.business.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-blue-600 font-semibold bg-blue-50/80 shadow-sm'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                'Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Please share more details.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-whatsapp-direct"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-300"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{siteConfig.contact.whatsappDisplay}</span>
            </a>

            <button
              onClick={onOpenConsultation}
              id="navbar-consultation-btn"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              id="mobile-consultation-quick-btn"
              className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 shadow-sm"
            >
              Consult
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="navbar-mobile-toggle"
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="navbar-mobile-menu"
          className="lg:hidden glass-panel border-b border-cyan-100 px-4 pt-3 pb-6 mt-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-200/80 flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call {siteConfig.contact.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md shadow-blue-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

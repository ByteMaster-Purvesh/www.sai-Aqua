import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  ShieldCheck,
  Heart,
  ArrowUp,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Special Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const productLinks = [
    'RO Water Purifier',
    'UV Water Purifier',
    'RO + UV Dual Purifier',
    'Commercial RO Systems',
    'Whole-House Water Softener',
    'Alkaline Mineral Booster',
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-12 overflow-hidden border-t border-slate-800">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-400"></div>

      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Col 1: Brand Info & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {siteConfig.business.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 tracking-wide">
                  {siteConfig.business.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Dedicated to delivering certified, mineral-rich drinking water with professional installation, prompt emergency servicing, and transparent AMC packages.
            </p>

            {/* Social Media Links (Clickable & Easy to replace in siteConfig.ts) */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Connect on Social Media
              </span>
              <div className="flex items-center gap-3 pt-1">
                {/* Instagram */}
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-instagram"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:bg-pink-500/10 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                {/* Facebook */}
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-facebook"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-whatsapp"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>

                {/* YouTube */}
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-youtube"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500 hover:bg-red-500/10 text-slate-300 hover:text-red-400 flex items-center justify-center transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors text-slate-400 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Purifier Products */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map((prod, idx) => (
                <li key={idx}>
                  <a
                    href="#products"
                    className="hover:text-cyan-400 transition-colors text-slate-400"
                  >
                    {prod}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Information
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{siteConfig.contact.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-cyan-400 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cyan-400 transition-colors truncate">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs">{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 SAI AGENCY. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

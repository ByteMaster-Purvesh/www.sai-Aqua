import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle, X, HelpCircle, Droplet } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Please share more details.'
  )}`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex items-end flex-col select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip speech bubble on hover or initial state */}
      {showTooltip && (
        <div className="mb-3 mr-1 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-emerald-200 text-xs font-semibold text-slate-800 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <div>
            <span className="text-emerald-700 font-bold block">Need Help with RO?</span>
            <span className="text-[11px] text-slate-500 font-normal">Chat with our water expert</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Action Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative inline-flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-600/35 hover:shadow-2xl hover:shadow-emerald-600/50 hover:scale-105 transition-all duration-300 active:scale-95"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
        </div>

        {/* Text with dynamic expansion */}
        <div className="flex flex-col text-left pr-1">
          <span className="text-xs font-black tracking-wide leading-tight">
            {isHovered ? 'Need Help?' : 'Chat on WhatsApp'}
          </span>
          <span className="text-[10px] text-emerald-100 font-medium">Instant Doorstep Reply</span>
        </div>
      </a>
    </div>
  );
};

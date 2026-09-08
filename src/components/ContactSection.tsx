import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Navigation,
  ShieldCheck,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-info" className="py-24 relative bg-slate-50/80 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact SAI AGENCY
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            Reach out to our water purification experts for inquiries, machine purchases, maintenance bookings, or emergency service visits.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Clickable Action Cards (Call, WhatsApp, Email, Google Maps) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* 1. Clickable Call Card */}
          <div className="group rounded-3xl p-6 bg-white border border-slate-200 shadow-md hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Helpline</span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-1 mb-2">Phone Call</h3>
              <p className="text-sm font-semibold text-blue-700">{siteConfig.contact.phone}</p>
              <p className="text-xs text-slate-500 mt-1">Speak directly with a technician</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                id="contact-action-call"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* 2. Clickable WhatsApp Card */}
          <div className="group rounded-3xl p-6 bg-white border border-slate-200 shadow-md hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Instant Messaging</span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-1 mb-2">WhatsApp Chat</h3>
              <p className="text-base font-black text-emerald-700 font-mono">{siteConfig.contact.whatsappDisplay}</p>
              <p className="text-xs text-slate-500 mt-1">Send photos of RO machine or filter</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Please share more details.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-action-whatsapp"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 3. Clickable Email Card */}
          <div className="group rounded-3xl p-6 bg-white border border-slate-200 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Formal Inquiries</span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-1 mb-2">Email Address</h3>
              <p className="text-sm font-semibold text-cyan-700 truncate">{siteConfig.contact.email}</p>
              <p className="text-xs text-slate-500 mt-1">Get commercial proposals</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                id="contact-action-email"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* 4. Clickable Google Maps Card */}
          <div className="group rounded-3xl p-6 bg-white border border-slate-200 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Physical Store</span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-1 mb-2">Business Location</h3>
              <p className="text-xs font-semibold text-slate-700 line-clamp-2">
                {siteConfig.contact.address.street}, {siteConfig.contact.address.city}
              </p>
              <p className="text-xs text-slate-500 mt-1">{siteConfig.contact.workingHours}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-action-maps"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Google Map + Detailed Address Block */}
        <div className="rounded-3xl overflow-hidden glass-panel border border-cyan-200 shadow-2xl shadow-cyan-950/5 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Details Panel */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50 to-blue-50/40">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold mb-4">
                <Clock className="w-3.5 h-3.5" /> Working Hours
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                Visit Our Store & Service Center
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Explore live demonstration units of residential ROs, commercial water plants, and water softeners at our showroom.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Registered Office & Showroom:</strong>
                    <span className="text-xs sm:text-sm text-slate-600">{siteConfig.contact.address.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Operational Hours:</strong>
                    <span className="text-xs sm:text-sm text-slate-600">{siteConfig.contact.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Doorstep Service Area:</strong>
                    <span className="text-xs sm:text-sm text-slate-600">All city zones within 25km radius</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Easy parking available</span>
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
              >
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Embedded Interactive Map Container */}
          <div className="lg:col-span-7 h-[360px] sm:h-[420px] lg:h-auto min-h-[350px] relative bg-slate-100">
            <iframe
              title="SAI AGENCY Google Map Location"
              src={siteConfig.contact.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

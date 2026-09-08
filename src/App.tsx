import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { ROInstallationSection } from './components/ROInstallationSection';
import { RORepairMaintenanceSection } from './components/RORepairMaintenanceSection';
import { WaterPurifierAMCSection } from './components/WaterPurifierAMCSection';
import { FilterMembraneSection } from './components/FilterMembraneSection';
import { SpecialOffers } from './components/SpecialOffers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { CustomerReviews } from './components/CustomerReviews';
import { InquirySection } from './components/InquirySection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { ConsultationModal } from './components/ConsultationModal';
import { Product } from './config/siteConfig';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleBookService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500 selection:text-white antialiased flex flex-col">
      {/* Top Navbar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Sections Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Highlights Section */}
        <TrustHighlights />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Products Section */}
        <ProductsSection onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* 5. Services Overview Section */}
        <ServicesSection onBookService={handleBookService} />

        {/* 6. Dedicated RO Installation Section */}
        <ROInstallationSection />

        {/* 7. Dedicated RO Repair & Maintenance Section */}
        <RORepairMaintenanceSection />

        {/* 8. Dedicated Water Purifier AMC Section */}
        <WaterPurifierAMCSection />

        {/* 9. Dedicated Filter / Membrane Replacement Section */}
        <FilterMembraneSection />

        {/* 10. Special Offers Section */}
        <SpecialOffers />

        {/* 11. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 12. Our Work / Project Gallery Section */}
        <GallerySection />

        {/* 13. Customer Reviews Section */}
        <CustomerReviews />

        {/* 14. Customer Inquiry Form Section */}
        <InquirySection initialService={preselectedService} />

        {/* 15. Contact Details Section */}
        <ContactSection />

        {/* 16. Prominent WhatsApp CTA Section */}
        <WhatsAppCTA />
      </main>

      {/* 17. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onBookConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Free Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}

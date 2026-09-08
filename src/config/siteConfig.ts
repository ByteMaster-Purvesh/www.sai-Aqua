// Central Configuration File for SAI AGENCY
// Easily change business details, contact numbers, WhatsApp, products, services, offers, and gallery images here.

export interface Product {
  id: string;
  name: string;
  category: 'domestic' | 'commercial' | 'softener' | 'alkaline';
  subtitle: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  image: string;
  features: string[];
  specifications: {
    purificationStages: string;
    storageCapacity: string;
    purificationCapacity: string;
    membraneType: string;
    tdsReduction: string;
    warranty: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  startingPrice: string;
  turnaroundTime: string;
  highlights: string[];
}

export interface SpecialOffer {
  id: string;
  title: string;
  badge: string;
  popular?: boolean;
  price: string;
  originalPrice: string;
  duration?: string;
  description: string;
  features: string[];
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  serviceOrProduct: string;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'installation' | 'servicing' | 'commercial' | 'products';
  image: string;
  description: string;
}

export const siteConfig = {
  // Business Identity
  business: {
    name: "SAI AGENCY",
    tagline: "Water Purifier / RO Products & Services",
    heroHeading: "Pure Water. Better Life.",
    heroSubheading: "Complete Water Purifier & RO Solutions for Your Home & Business",
    heroSupportingText:
      "Quality water purification products, professional installation, servicing and maintenance solutions you can trust.",
    aboutHeading: "Your Trusted Water Purifier Partner",
    aboutContent:
      "SAI AGENCY provides reliable water purification products and professional services designed to deliver clean, safe and healthy drinking water. With years of field expertise across domestic and commercial setups, our certified technicians ensure uninterrupted access to pure water for you and your family.",
    foundedYear: 2018,
    gstin: "27AAACS1234F1Z8",
  },

  // Contact Details & Live Action Links
  contact: {
    phone: "+91 96574 94749",
    phoneRaw: "+919657494749",
    whatsappNumber: "919657494749",
    whatsappDisplay: "+91 96574 94749",
    email: "info@saiagencywater.com",
    supportEmail: "support@saiagencywater.com",
    defaultWhatsAppMessage:
      "Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Please share more details.",
    address: {
      street: "Shop No. 4, Sai Krupa Commercial Complex, Near Shivaji Chowk",
      area: "Main Road",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411038",
      country: "India",
      fullAddress: "Shop No. 4, Sai Krupa Commercial Complex, Near Shivaji Chowk, Pune, Maharashtra 411038, India",
    },
    workingHours: "Mon - Sat: 9:00 AM - 8:30 PM | Sunday: 10:00 AM - 4:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=Water+Purifier+Services+Pune",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360662281!2d73.79292837330768!3d18.524616453265057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d3e3f32!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  // Social Media Links (Clickable placeholders, easy to replace)
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/919657494749?text=Hello%20Sai%20Agency,%20I%20am%20interested%20in%20your%20Water%20Purifier%20/%20RO%20products%20and%20services.%20Please%20share%20more%20details.",
    youtube: "https://youtube.com",
  },

  // Statistics
  stats: [
    { label: "Happy Customers", value: 500, suffix: "+", icon: "Users" },
    { label: "Installations", value: 1000, suffix: "+", icon: "ShieldCheck" },
    { label: "Support", value: 24, suffix: "/7", icon: "Clock" },
    { label: "Customer Focus", value: 100, suffix: "%", icon: "HeartHandshake" },
  ],

  // Key Highlights / Trust Pillars
  highlights: [
    {
      id: "quality",
      title: "100% Quality Products",
      desc: "Certified food-grade components, original RO membranes and certified NSF/ISO filter cartridges.",
      icon: "Award",
    },
    {
      id: "installation",
      title: "Expert Installation",
      desc: "Factory-trained certified technicians ensuring zero leakage, neat piping, and optimal water pressure.",
      icon: "Wrench",
    },
    {
      id: "fast-service",
      title: "Fast Service",
      desc: "Prompt same-day doorstep service visits with rapid breakdown troubleshooting in under 2-4 hours.",
      icon: "Zap",
    },
    {
      id: "support",
      title: "Customer Support",
      desc: "Dedicated helpline, scheduled reminder alerts for filter changes, and genuine warranty fulfillment.",
      icon: "Headphones",
    },
  ],

  // Why Choose Us Timeline / Features
  whyChooseUs: [
    {
      title: "Quality Products",
      desc: "Only certified multi-stage RO machines, NSF-rated membranes, and food-grade water storage tanks.",
      point: "Guaranteed 100% genuine components & spare parts",
    },
    {
      title: "Professional Installation",
      desc: "Concealed aesthetic plumbing, high-durability brass diverters, and precision wall-mounting fixtures.",
      point: "Leak-proof setup tested at 50+ PSI water pressure",
    },
    {
      title: "Experienced Service Team",
      desc: "Certified technicians trained on all major brands and advanced commercial reverse osmosis setups.",
      point: "Over 8+ years of dedicated water purification experience",
    },
    {
      title: "Genuine Replacement Filters",
      desc: "Direct-sourced spun sediment, coconut-shell activated carbon, and authentic RO membranes.",
      point: "Barcode-verified genuine cartridges with seal integrity",
    },
    {
      title: "Fast Response",
      desc: "Swift dispatch to your home or commercial premises with scheduled appointment time slots.",
      point: "Guaranteed same-day service turnaround",
    },
    {
      title: "Affordable Solutions",
      desc: "Transparent and honest pricing without hidden charges. Customized solutions for every budget.",
      point: "Best value packages and flexible AMC options",
    },
  ],

  // Products (100% water-purifier / RO / clean drinking water images)
  products: [
    {
      id: "ro-purifier",
      name: "RO Water Purifier",
      category: "domestic",
      subtitle: "Multi-Stage High TDS Purifier",
      description: "Advanced multi-stage Reverse Osmosis purification that effectively eliminates dissolved impurities, heavy metals, and high salinity up to 2000 TDS.",
      price: "₹8,499",
      originalPrice: "₹11,999",
      badge: "Best Seller",
      rating: 4.9,
      reviewsCount: 142,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
      features: ["7-Stage Purification", "Up to 2000 TDS Handling", "10 Litres Storage Tank", "Smart LED Indicators"],
      specifications: {
        purificationStages: "7 Stages (Sediment + Carbon + RO + UV + TDS + Post-Carbon + Minerals)",
        storageCapacity: "10 Litres food-grade tank",
        purificationCapacity: "15 Litres/Hour",
        membraneType: "High-Recovery 80 GPD RO Membrane",
        tdsReduction: "Up to 95% TDS Reduction",
        warranty: "1 Year Comprehensive Onsite Warranty",
      },
    },
    {
      id: "uv-purifier",
      name: "UV Water Purifier",
      category: "domestic",
      subtitle: "Microbe & Pathogen Defense",
      description: "High-intensity Ultraviolet disinfection with ultra-filtration membrane, ideal for municipal tap water sources with low TDS (under 250 PPM).",
      price: "₹6,499",
      originalPrice: "₹8,999",
      badge: "Energy Saver",
      rating: 4.8,
      reviewsCount: 98,
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80",
      features: ["11W UV Disinfection Tube", "Ultra-Filtration Membrane", "Zero Water Wastage", "Low Power Consumption"],
      specifications: {
        purificationStages: "4 Stages (Sediment + Activated Carbon + UV Chamber + UF Membrane)",
        storageCapacity: "8 Litres Detachable Tank",
        purificationCapacity: "30 Litres/Hour",
        membraneType: "0.01 Micron Hollow Fiber UF",
        tdsReduction: "Maintains natural essential minerals",
        warranty: "1 Year Manufacturer Warranty",
      },
    },
    {
      id: "ro-uv-purifier",
      name: "RO + UV Dual Purifier",
      category: "domestic",
      subtitle: "Complete Total Purity Shield",
      description: "Combines Reverse Osmosis desalination with Ultraviolet sterilization and active TDS control for safe drinking water from borewell and tanker sources.",
      price: "₹10,499",
      originalPrice: "₹14,999",
      badge: "Most Popular",
      rating: 4.9,
      reviewsCount: 215,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      features: ["RO + UV + UF + TDS Controller", "Active Copper Infusion", "Digital Purity Display", "Automatic Flush Cycle"],
      specifications: {
        purificationStages: "8 Stages with Copper & Zinc Infusion",
        storageCapacity: "12 Litres Tank with UV in-tank LED",
        purificationCapacity: "20 Litres/Hour",
        membraneType: "High Rejection 100 GPD RO Membrane",
        tdsReduction: "Up to 96% with automated mineral modulator",
        warranty: "1 Year Full Warranty + 2 Free Preventative Services",
      },
    },
    {
      id: "commercial-ro",
      name: "Commercial RO System",
      category: "commercial",
      subtitle: "Heavy-Duty 50 to 500 LPH Plants",
      description: "Engineered for schools, offices, restaurants, gyms, and manufacturing facilities with stainless steel skid, automated control panels, and multi-membrane racks.",
      price: "₹28,999",
      originalPrice: "₹38,000",
      badge: "Commercial Grade",
      rating: 5.0,
      reviewsCount: 64,
      image: "https://images.unsplash.com/photo-1584771145729-0bd9fda6529b?auto=format&fit=crop&w=800&q=80",
      features: ["50 to 500 LPH Output", "SS 304 High-Pressure Skid", "Dual Pressure Gauges & Flowmeters", "Industrial Sand & Carbon Vessels"],
      specifications: {
        purificationStages: "Industrial Pre-Treatment + High Flow Micron + Commercial TFC RO",
        storageCapacity: "Compatible with 200L - 2000L External Tanks",
        purificationCapacity: "50 to 500 Litres/Hour (Customizable)",
        membraneType: "4040 Commercial Grade High Flow Membrane",
        tdsReduction: "95% - 98% TDS Rejection",
        warranty: "1 Year Industrial Warranty with AMC Option",
      },
    },
    {
      id: "water-softener",
      name: "Water Softener System",
      category: "softener",
      subtitle: "Whole-House Hard Water Solution",
      description: "Eliminates scaling, hard water stains on tiles, bathroom fixtures, and prevents hair fall by replacing harsh Calcium and Magnesium ions with gentle Sodium.",
      price: "₹18,500",
      originalPrice: "₹24,000",
      badge: "Whole-House Care",
      rating: 4.8,
      reviewsCount: 82,
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
      features: ["High-Exchange Cation Resin", "Automatic Regeneration Valve", "Protects Geysers & Washing Machines", "Zero Water Wastage"],
      specifications: {
        purificationStages: "Ion Exchange Resin Filtration + Sediment Pre-Filter",
        storageCapacity: "Integrated Brine Tank (60 Litres)",
        purificationCapacity: "1500 - 3000 Litres/Day Flow Rate",
        membraneType: "High Capacity Food Grade Ion Exchange Resin",
        tdsReduction: "Zero Hardness (Under 20 PPM as CaCO3)",
        warranty: "2 Years Vessel & Valve Warranty",
      },
    },
    {
      id: "alkaline-purifier",
      name: "Alkaline Mineral Purifier",
      category: "alkaline",
      subtitle: "pH 8.5+ Health Enriched Water",
      description: "Restores vital natural minerals (Calcium, Magnesium, Potassium) and raises water pH to healthy alkaline levels with negative ORP antioxidant properties.",
      price: "₹12,499",
      originalPrice: "₹16,999",
      badge: "Health Specialist",
      rating: 4.9,
      reviewsCount: 116,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      features: ["pH 8.0 - 9.5 Balance", "Negative ORP Active Hydrogen", "Rich in Ca, Mg & K Minerals", "Enhances Taste & Metabolism"],
      specifications: {
        purificationStages: "RO Membrane + Bio-Alkaline Bioceramic Post-Filter + Antibacterial Carbon",
        storageCapacity: "9 Litres Food Grade Tank",
        purificationCapacity: "15 Litres/Hour",
        membraneType: "High Rejection TFC RO Membrane",
        tdsReduction: "90-95% Reduction with remineralization",
        warranty: "1 Year Full Warranty + Free Mineral Filter Inspection",
      },
    },
  ] as Product[],

  // Services
  services: [
    {
      id: "ro-installation",
      title: "RO Installation",
      shortDesc: "Professional unboxing, wall-mounting, concealed plumbing connections and TDS calibration.",
      fullDesc: "Complete wall-mounting and installation service by certified technicians. Includes inlet connector, high-grade food pipe laying, pressure check, electrical safety verification, and live TDS tuning.",
      iconName: "Wrench",
      startingPrice: "₹499",
      turnaroundTime: "Within 2-4 Hours",
      highlights: ["Clean concealed piping", "Pressure regulation", "TDS meter testing", "Doorstep demonstration"],
    },
    {
      id: "ro-repair",
      title: "RO Repair & Maintenance",
      shortDesc: "Quick troubleshooting for motor noise, water leakage, low water flow, or foul taste.",
      fullDesc: "Comprehensive diagnostics of RO booster pump, SMPS adapter, auto-cut float valve, solenoid valve, and internal pipes with guaranteed genuine replacement parts.",
      iconName: "ShieldCheck",
      startingPrice: "₹349",
      turnaroundTime: "Same Day Visit",
      highlights: ["No hidden costs", "Multi-brand expertise", "Pump & SMPS testing", "90-day repair warranty"],
    },
    {
      id: "annual-maintenance",
      title: "Water Purifier AMC",
      shortDesc: "Year-round peace of mind with scheduled periodic checkups and breakdown coverage.",
      fullDesc: "Preventive maintenance plan designed to keep your drinking water safe 365 days a year. Covers free service visits, mandatory filter cleaning, membrane flushing, and priority emergency response.",
      iconName: "RotateCw",
      startingPrice: "₹2,499 / Year",
      turnaroundTime: "Priority Dispatch",
      highlights: ["3 scheduled checkups", "Unlimited breakdown visits", "Free filter servicing", "Priority helpline"],
    },
    {
      id: "filter-replacement",
      title: "Filter / Membrane Replacement",
      shortDesc: "Replacement of spun sediment filters, activated carbon cartridges, and RO membranes.",
      fullDesc: "We only install authentic, sealed filter cartridges that prevent bacteria growth and maintain crisp sweet water taste. Includes free water purity testing before and after replacement.",
      iconName: "Filter",
      startingPrice: "₹699",
      turnaroundTime: "Immediate Service",
      highlights: ["100% Genuine cartridges", "Sediment + Carbon swap", "Pre-filter bowl cleaning", "Sweet taste restored"],
    },
    {
      id: "ro-servicing",
      title: "Deep RO Sanitization & Servicing",
      shortDesc: "Chemical flushing of membrane, tank disinfection, and multi-point purity audit.",
      fullDesc: "Full overhaul service to restore filtration speed and water freshness. Cleans internal limescale deposits, flushes out bio-films from the storage tank, and re-calibrates the TDS controller.",
      iconName: "Sparkles",
      startingPrice: "₹599",
      turnaroundTime: "Within 3 Hours",
      highlights: ["Storage tank sanitization", "Membrane chemical flush", "Electrical adapter check", "Leak-tight guarantee"],
    },
    {
      id: "water-quality-check",
      title: "Free Water Quality / TDS Audit",
      shortDesc: "Complimentary doorstep test of your incoming tap or borewell water TDS and hardness.",
      fullDesc: "Our water expert visits your home with a calibrated digital TDS meter and chemical hardness reagents. Get an instant report showing whether your current water is safe for drinking.",
      iconName: "Droplet",
      startingPrice: "FREE (Complimentary)",
      turnaroundTime: "Book Anytime",
      highlights: ["Digital TDS reading", "pH balance test", "Hardness check", "Custom purifier advice"],
    },
  ] as ServiceItem[],

  // Special Promotional Offers
  offers: [
    {
      id: "home-ro",
      title: "Home RO Package",
      badge: "Limited Time Deal",
      popular: false,
      price: "₹7,499",
      originalPrice: "₹10,999",
      description: "Complete turnkey drinking water setup designed specifically for 3-5 member residential homes.",
      features: [
        "7-Stage RO + UV Water Purifier",
        "Free Standard Wall Installation",
        "Complimentary External Pre-Filter Kit",
        "1st Year Comprehensive Warranty",
        "Free Digital TDS Water Quality Test",
      ],
      whatsappMessage: "Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Specifically the Home RO Package at ₹7,499. Please share more details.",
    },
    {
      id: "ro-service-pkg",
      title: "RO Service Package",
      badge: "Special Maintenance",
      popular: false,
      price: "₹999",
      originalPrice: "₹1,499",
      description: "Deep health overhaul and sanitization package to restore peak filtration speed and purity.",
      features: [
        "Full Multi-Stage Filter Health Audit",
        "Food-Grade Tank Sanitization & De-scaling",
        "Booster Pump Pressure & SMPS Voltage Check",
        "Free Spun Sediment Pre-Filter Cartridge",
        "Water TDS & Hardness Certificate",
      ],
      whatsappMessage: "Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Specifically the RO Service Package at ₹999. Please share more details.",
    },
    {
      id: "amc-plan",
      title: "Water Purifier AMC Plan",
      badge: "Best Value",
      popular: true,
      price: "₹2,499",
      originalPrice: "₹3,499",
      duration: "per year",
      description: "The most trusted worry-free protection plan. Keep your water purifier operating like new year-round.",
      features: [
        "3 Scheduled Periodic Maintenance Visits",
        "Unlimited Breakdown Callouts (Free)",
        "Includes Sediment & Carbon Filter Replacement",
        "Membrane Descaling & Chemical Flushing",
        "Zero Labor & Visit Charges for 365 Days",
        "Priority VIP Technician Dispatch",
      ],
      whatsappMessage: "Hello Sai Agency, I am interested in your Water Purifier / RO products and services. Specifically the Annual Maintenance AMC Plan at ₹2,499. Please share more details.",
    },
  ] as SpecialOffer[],

  // Our Work / Project Gallery (ONLY water-purifier, RO equipment, installation, technician servicing, and pure water)
  gallery: [
    {
      id: "g1",
      title: "Modern Kitchen RO Installation",
      category: "installation",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=900&q=80",
      description: "Under-sink RO purifier installation with dedicated goose-neck drinking water faucet and concealed food-grade piping.",
    },
    {
      id: "g2",
      title: "Technician Precision Servicing & TDS Test",
      category: "servicing",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
      description: "Certified water technician inspecting inlet pressure, pump performance, and tuning digital TDS controller.",
    },
    {
      id: "g3",
      title: "Commercial 250 LPH RO Water Plant",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1584771145729-0bd9fda6529b?auto=format&fit=crop&w=900&q=80",
      description: "Multi-vessel industrial RO plant with automated control panel commissioned for a corporate office cafeteria.",
    },
    {
      id: "g4",
      title: "Genuine RO Filter & Membrane Replacement",
      category: "servicing",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80",
      description: "Replacing depleted sediment filter cartridge and installing certified high-rejection 80 GPD RO membrane.",
    },
    {
      id: "g5",
      title: "Dual Domestic Wall-Mounted Purifier Setup",
      category: "installation",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
      description: "Wall-mounted RO + UV purifier installed with zero visible dangling wires and heavy-duty brass diverter valve.",
    },
    {
      id: "g6",
      title: "Crystal Pure Alkaline Drinking Water",
      category: "products",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
      description: "Mineral-rich alkaline water (pH 8.5) produced directly through SAI AGENCY multi-stage filtration system.",
    },
    {
      id: "g7",
      title: "Commercial RO System Maintenance & Flushing",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
      description: "Preventive chemical descaling and high-pressure pump overhaul on commercial 100 LPH water filtration system.",
    },
    {
      id: "g8",
      title: "Pure Safe Drinking Water for Family",
      category: "products",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80",
      description: "Healthy 100% purified water free from harmful bacteria, dissolved solids, microplastics, and heavy metals.",
    },
  ] as GalleryItem[],

  // Testimonials
  testimonials: [
    {
      id: "t1",
      name: "Rajesh Kulkarni",
      location: "Kothrud, Pune",
      rating: 5,
      review: "Excellent service and very professional team. Highly recommended. They arrived within 2 hours of calling, tested my borewell water TDS (which was over 1200), and installed our RO+UV unit cleanly without any exposed messy wires.",
      serviceOrProduct: "RO + UV Purifier Installation",
      date: "Verified Customer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      id: "t2",
      name: "Sneha Sharma",
      location: "Baner, Pune",
      rating: 5,
      review: "Good quality RO and quick installation. The water taste improved remarkably on day one. Their technician explained all the maintenance tips patiently and gave us a genuine invoice and warranty card.",
      serviceOrProduct: "Home RO Package",
      date: "Verified Customer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      id: "t3",
      name: "Amit Deshmukh",
      location: "Wakad, Pune",
      rating: 5,
      review: "Very responsive service and reasonable pricing. I have been using their Annual Maintenance AMC package for 2 years now. Prompt reminders for filter changes and zero breakdown hassles.",
      serviceOrProduct: "Water Purifier AMC",
      date: "Verified Customer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      id: "t4",
      name: "Dr. Kavita Joshi",
      location: "Aundh, Pune",
      rating: 5,
      review: "We installed an Alkaline RO at our clinic. SAI AGENCY team was extremely knowledgeable about pH balancing and TDS control. The water is crisp, light and our staff and patients love it.",
      serviceOrProduct: "Alkaline Water Purifier",
      date: "Verified Customer",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      id: "t5",
      name: "Vikram Mehta",
      location: "Hinjewadi, Pune",
      rating: 5,
      review: "Got our 100 LPH commercial RO plant installed for our IT office cafeteria. Unbelievable efficiency and neat stainless steel finish. Truly top-tier engineering by SAI AGENCY.",
      serviceOrProduct: "Commercial RO System",
      date: "Verified Customer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80",
    },
  ] as Testimonial[],
};

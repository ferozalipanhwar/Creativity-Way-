import React from 'react';
import { ContactSection } from '../components/ContactSection.tsx';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      {/* Banner */}
      <div className="bg-[#091B32] text-white py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
            CREATIVITY WAY GENERAL TRADING LLC
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            Contact Our UAE Storage Team
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Get in touch for quotations, warehouse layout designs, site measurement visits, and commercial shelving inquiries across Dubai, Abu Dhabi, Sharjah, and all Emirates.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

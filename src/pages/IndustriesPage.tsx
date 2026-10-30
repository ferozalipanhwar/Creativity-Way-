import React from 'react';
import { IndustriesWeServe } from '../components/IndustriesWeServe.tsx';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndustriesPageProps {
  onOpenQuoteModal: (industry?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      {/* Banner */}
      <div className="bg-[#091B32] text-white py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
            INDUSTRY VERTICALS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            Specialized Storage Solutions for UAE Industries
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            From logistics hubs in Dubai South and JAFZA to retail supermarket chains and industrial manufacturing facilities across Sharjah and Abu Dhabi.
          </p>
        </div>
      </div>

      {/* Industries Component */}
      <IndustriesWeServe onOpenQuoteModal={onOpenQuoteModal} />

      {/* Engineering Standards Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
          <h3 className="text-2xl font-bold text-[#102A4C] mb-6">
            Sector-Specific Compliance & Engineering
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-[#102A4C] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47721]" />
                Warehousing & 3PL Logistics
              </h4>
              <p className="text-xs leading-relaxed">
                Engineered for maximum cubic space utilization, standard reach trucks, narrow aisle forklifts, and heavy pallet weight distribution.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-[#102A4C] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47721]" />
                Retail & Supermarkets
              </h4>
              <p className="text-xs leading-relaxed">
                High-end durable powder coating, aesthetic shelf profiles, price ticket rails, wire front risers, and rapid boltless shelf adjustment.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-[#102A4C] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47721]" />
                Industrial & Manufacturing
              </h4>
              <p className="text-xs leading-relaxed">
                2 to 3-ton capacity per beam level, heavy steel column crash guards, certified anchor footings, and structural mezzanine extensions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
    </div>
  );
};

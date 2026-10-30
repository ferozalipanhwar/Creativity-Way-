import React from 'react';
import {
  Warehouse,
  ShoppingCart,
  Factory,
  Boxes,
  Store,
  Cpu,
  PlusSquare,
  ShoppingBag,
  ArrowRight,
  Check
} from 'lucide-react';
import { INDUSTRIES, IMAGES } from '../data/companyData.ts';

interface IndustriesWeServeProps {
  onOpenQuoteModal: (industry?: string) => void;
}

export const IndustriesWeServe: React.FC<IndustriesWeServeProps> = ({ onOpenQuoteModal }) => {
  // Mapping of industry visual contexts
  const industryImages: Record<string, string> = {
    warehouses: IMAGES.palletRacking,
    supermarkets: IMAGES.supermarketShelving,
    factories: IMAGES.palletRacking,
    'distribution-centers': IMAGES.heroWarehouse,
    'retail-shops': IMAGES.supermarketShelving,
    'industrial-facilities': IMAGES.mezzanineFloor,
    pharmacies: IMAGES.wireMeshAndDucking,
    'mini-marts': IMAGES.supermarketShelving,
  };

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Warehouse':
        return <Warehouse className="w-5 h-5" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-5 h-5" />;
      case 'Factory':
        return <Factory className="w-5 h-5" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'Store':
        return <Store className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Cross':
        return <PlusSquare className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return <Warehouse className="w-5 h-5" />;
    }
  };

  return (
    <section id="industries-section" className="py-20 lg:py-28 bg-[#091B32] text-white relative overflow-hidden">
      {/* Subtle background ambient graphic */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-[#F47721]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-[#102A4C]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
            SECTORS & APPLICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Industries We Serve Across the UAE
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tailored industrial racking, commercial display shelving, and structural storage engineering built for diverse industry sectors.
          </p>
        </div>

        {/* 8 Industries Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className="group bg-white/5 hover:bg-white/10 rounded-xl overflow-hidden border border-white/10 hover:border-[#F47721]/60 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-md"
            >
              {/* Image Header with Scrim */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-800">
                <img
                  src={industryImages[industry.id] || IMAGES.palletRacking}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091B32] via-[#091B32]/40 to-transparent" />
                
                {/* Sector Icon & Badge */}
                <div className="absolute top-3 left-3 bg-[#102A4C]/90 backdrop-blur-xs text-white p-2 rounded-lg border border-white/15 text-[#F47721]">
                  {getIndustryIcon(industry.iconName)}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#F47721] uppercase tracking-wider">
                    {industry.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-[#F47721] transition-colors mb-2">
                  {industry.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {industry.description}
                </p>

                {/* Key Solutions List */}
                <div className="mt-auto space-y-1.5 pt-3 border-t border-white/10 mb-4">
                  {industry.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Check className="w-3 h-3 text-[#F47721] shrink-0" />
                      <span className="truncate">{sol}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Consultation Link */}
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(`Industry: ${industry.name}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 group-hover:text-[#F47721] transition-colors mt-auto cursor-pointer"
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

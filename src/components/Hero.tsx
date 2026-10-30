import React from 'react';
import { ArrowRight, Boxes, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/companyData.ts';

interface HeroProps {
  onOpenQuoteModal: (category?: string) => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreProducts }) => {
  return (
    <section className="relative overflow-hidden bg-[#091B32] text-white">
      {/* Background Industrial Warehouse Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroWarehouse}
          alt="Creativity Way modern industrial warehouse racking infrastructure in UAE"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Navy Gradient Scrims ensuring high contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#091B32]/95 via-[#091B32]/85 to-[#091B32]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091B32] via-transparent to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl">
          {/* Small Heading / Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F47721] mb-6">
            <Boxes className="w-4 h-4 text-[#F47721]" />
            <span>STORAGE SOLUTIONS FOR A BETTER TOMORROW</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 text-balance">
            ALL YOUR <span className="text-[#F47721] underline decoration-[#F47721]/30 underline-offset-8">STORAGE NEEDS</span> IN ONE PLACE
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-10 font-normal">
            Reliable racking and shelving solutions for warehouses, factories, retail and more. Built with certified heavy-duty steel and engineered for UAE industrial operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F47721] hover:bg-[#D96414] text-white text-base font-bold px-7 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F47721] focus:ring-offset-2 focus:ring-offset-[#091B32]"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreProducts}
              type="button"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-base font-semibold px-7 py-4 rounded-lg border border-white/20 backdrop-blur-xs transition-all duration-200 cursor-pointer hover:border-white/40"
            >
              <span>Explore Our Products</span>
            </button>
          </div>

          {/* Key Value Highlights Strip */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0" />
              <span>Heavy Duty 2–3 Ton Racks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0" />
              <span>Turnkey UAE Installation</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0" />
              <span>Custom Sizes & Mezzanines</span>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Trust Ribbon */}
      <div className="relative z-10 bg-[#102A4C]/95 border-t border-white/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F47721]" />
            <span className="font-semibold text-white">Creativity Way General Trading LLC</span>
            <span className="hidden md:inline text-slate-400">· Premium Industrial Storage Systems</span>
          </div>
          <div className="flex items-center gap-6">
            <span>ISO Spec Steel Grades</span>
            <span className="text-white/20">|</span>
            <span>Fast Dispatch UAE</span>
            <span className="text-white/20">|</span>
            <span>Commercial & Industrial Grade</span>
          </div>
        </div>
      </div>
    </section>
  );
};

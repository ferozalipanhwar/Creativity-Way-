import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, ShieldCheck, CheckCircle2, ArrowRight, Award, Factory, Truck } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../data/companyData.ts';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';

interface AboutPageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      {/* Page Header Banner */}
      <div className="bg-[#091B32] text-white py-16 lg:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
            ABOUT CREATIVITY WAY
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            Building Smarter Storage Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Creativity Way General Trading LLC provides storage and shelving solutions for commercial, industrial and retail environments. We focus on quality materials, practical designs, customized solutions and reliable customer support.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#091B32] via-[#091B32]/90 to-transparent pointer-events-none" />
      </div>

      {/* Main Narrative & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A4C]">
              Reliable Industrial & Commercial Storage Systems
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Founded on principles of structural safety, efficient space design, and responsive UAE customer service, Creativity Way General Trading LLC supplies and installs high-density pallet racking, steel shelving, and raised storage platforms.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              From small retail stockrooms requiring organized manual picking shelves to multi-tier distribution logistics facilities requiring heavy-load pallet racks and mezzanines, we tailor each storage layout to the exact dimensions of your space and cargo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <Target className="w-6 h-6 text-[#F47721] mb-2" />
                <h3 className="font-bold text-sm text-[#102A4C] mb-1">Our Mission</h3>
                <p className="text-xs text-slate-600">
                  Deliver robust, long-lasting storage infrastructure that optimizes cubic space and streamlines logistics across the UAE.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <Compass className="w-6 h-6 text-[#102A4C] mb-2" />
                <h3 className="font-bold text-sm text-[#102A4C] mb-1">Our Vision</h3>
                <p className="text-xs text-slate-600">
                  To be the preferred storage equipment supplier in the United Arab Emirates through quality steel, honest engineering, and dependable delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={IMAGES.heroWarehouse}
                alt="Creativity Way warehouse storage infrastructure"
                className="w-full h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091B32]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-xs border border-slate-200">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#F47721] shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-[#102A4C]">Engineered Structural Integrity</h4>
                    <p className="text-xs text-slate-600">High-tensile structural steel with electro-statically applied protective finishes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Principles */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-[#F47721] uppercase tracking-wider block mb-1">
              QUALITY & RELIABILITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A4C]">
              How We Approach Every Storage Project
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#F4F6F8] border border-slate-200">
              <span className="w-8 h-8 rounded-lg bg-[#102A4C] text-[#F47721] flex items-center justify-center font-bold text-sm mb-3">
                01
              </span>
              <h4 className="text-base font-bold text-[#102A4C] mb-2">
                Space Planning & Layout Design
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We analyze your floor footprint, ceiling clearance, aisle turning radius, and forklift requirements to maximize safe storage density.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F4F6F8] border border-slate-200">
              <span className="w-8 h-8 rounded-lg bg-[#102A4C] text-[#F47721] flex items-center justify-center font-bold text-sm mb-3">
                02
              </span>
              <h4 className="text-base font-bold text-[#102A4C] mb-2">
                Quality Certified Materials
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All components use certified high-yield steel beams, safety locking pins, and seismic-rated baseplates designed for heavy loads.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F4F6F8] border border-slate-200">
              <span className="w-8 h-8 rounded-lg bg-[#102A4C] text-[#F47721] flex items-center justify-center font-bold text-sm mb-3">
                03
              </span>
              <h4 className="text-base font-bold text-[#102A4C] mb-2">
                Turnkey UAE Installation
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our experienced assembly technicians deliver, erect, align, anchor, and safety-check your storage racks on-site anywhere in the UAE.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us component */}
        <WhyChooseUs />

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-[#091B32] rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Discuss Your Storage Project?
            </h3>
            <p className="text-sm text-slate-300">
              Our specialists are available for layout consultations and fast price estimations across the UAE.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="shrink-0 bg-[#F47721] hover:bg-[#D96414] text-white font-bold px-7 py-3.5 rounded-lg shadow-sm transition-colors text-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

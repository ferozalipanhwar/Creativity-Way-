import React from 'react';
import { Target, Compass, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../data/companyData.ts';

interface AboutUsProps {
  onOpenQuoteModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about-section" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Warehouse Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={IMAGES.palletRacking}
                alt="Creativity Way heavy duty pallet racking installation in UAE"
                className="w-full h-[440px] sm:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091B32]/75 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#102A4C] text-[#F47721] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102A4C]">Quality Structural Steel</h4>
                    <p className="text-xs text-slate-600">Supplying & installing storage systems across UAE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Border Box */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-48 h-48 border-2 border-[#F47721]/30 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
              ABOUT CREATIVITY WAY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A4C] tracking-tight mb-6">
              Building Smarter Storage Solutions
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Creativity Way General Trading LLC provides storage and shelving solutions for commercial, industrial and retail environments. We focus on quality materials, practical designs, customized solutions and reliable customer support.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="p-5 rounded-xl bg-[#F4F6F8] border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#F47721] mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#102A4C] mb-2">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To supply safe, high-load industrial racking and versatile commercial shelving that optimize storage capacity and operational workflows for businesses across the UAE.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F4F6F8] border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#102A4C] mb-3">
                  <Compass className="w-5 h-5 text-[#F47721]" />
                </div>
                <h3 className="text-base font-bold text-[#102A4C] mb-2">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To be the trusted storage equipment partner in the region, recognized for structural integrity, honest technical guidance, and seamless turnkey execution.
                </p>
              </div>
            </div>

            {/* Quality & Reliability Highlights */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F47721] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  <strong>Structural Integrity:</strong> Certified high-yield steel beams, safety locking pins, and seismic-rated baseplates.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F47721] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  <strong>Turnkey UAE Delivery:</strong> Dedicated transport and trained installation crews operating in all 7 Emirates.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F47721] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  <strong>Practical Engineering:</strong> CAD bay calculations, customized beam heights, and civil defense compliant wire mesh options.
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 bg-[#102A4C] hover:bg-[#091B32] text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow-sm hover:shadow transition-colors cursor-pointer"
              >
                <span>Request Facility Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#F47721]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

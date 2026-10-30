import React from 'react';
import { ProjectGallery } from '../components/ProjectGallery.tsx';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface GalleryPageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      {/* Banner */}
      <div className="bg-[#091B32] text-white py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
            PORTFOLIO SHOWCASE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            Project Gallery & Installations
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            A visual showcase of our completed storage infrastructure projects, warehouse pallet racks, retail gondola shelving, and custom mezzanine floors across the UAE.
          </p>
        </div>
      </div>

      <ProjectGallery />

      {/* Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#102A4C] mb-2">
              Have a Similar Storage Project in Mind?
            </h3>
            <p className="text-sm text-slate-600">
              Our site engineers can visit your facility in Dubai, Sharjah, Abu Dhabi, or any Northern Emirate to conduct a preliminary measurement survey.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Facility Project')}
            className="shrink-0 bg-[#F47721] hover:bg-[#D96414] text-white font-bold px-7 py-3.5 rounded-lg shadow-sm transition-colors text-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Request Site Survey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

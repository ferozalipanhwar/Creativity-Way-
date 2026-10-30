import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/companyData.ts';
import { GalleryProject } from '../types/index.ts';

export const ProjectGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    'All',
    'Warehouse',
    'Pallet Racking',
    'Supermarket',
    'Heavy Duty',
    'Mezzanine'
  ];

  const filteredProjects = GALLERY_PROJECTS.filter((proj) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Pallet Racking') return proj.category === 'Warehouse';
    return proj.category === selectedFilter;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredProjects.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  const currentProject: GalleryProject | undefined =
    lightboxIndex !== null ? filteredProjects[lightboxIndex] : undefined;

  return (
    <section id="gallery-section" className="py-20 lg:py-28 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
            PROJECT PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A4C] tracking-tight mb-4">
            Industrial Installations & Storage Projects
          </h2>
          <p className="text-base text-slate-600">
            Explore our completed warehouse racking, supermarket shelving fitouts, and structural mezzanine platforms across the UAE.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200/80 shadow-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  selectedFilter === tab
                    ? 'bg-[#102A4C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091B32]/90 via-[#091B32]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-[#102A4C]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                  {project.category}
                </div>

                {/* Click Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Card Content at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#F47721] font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#F47721] transition-colors leading-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            type="button"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-[#F47721] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevLightbox}
            type="button"
            className="absolute left-2 sm:left-6 text-white hover:text-[#F47721] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 focus:outline-none hidden sm:flex items-center justify-center"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextLightbox}
            type="button"
            className="absolute right-2 sm:right-6 text-white hover:text-[#F47721] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 focus:outline-none hidden sm:flex items-center justify-center"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="relative max-w-5xl w-full bg-[#091B32] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col md:flex-row">
            {/* Image Preview */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[70vh]">
              <img
                src={currentProject.imageUrl}
                alt={currentProject.title}
                className="w-full h-full object-contain max-h-[70vh]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Project Details Panel */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-white overflow-y-auto">
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-[#F47721]/20 text-[#F47721] text-xs font-bold uppercase tracking-wider mb-3">
                  {currentProject.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white leading-tight">
                  {currentProject.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-4">
                  <MapPin className="w-4 h-4 text-[#F47721]" />
                  <span>{currentProject.location}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <h4 className="text-xs font-bold text-[#F47721] uppercase tracking-wider mb-1">
                    Technical Specifications
                  </h4>
                  <p className="text-xs text-slate-300">
                    {currentProject.details}
                  </p>
                </div>
              </div>

              {/* Navigation in mobile */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400">
                  Project {lightboxIndex + 1} of {filteredProjects.length}
                </span>
                <div className="flex sm:hidden gap-2">
                  <button
                    onClick={prevLightbox}
                    className="p-2 rounded-lg bg-white/10 text-white"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextLightbox}
                    className="p-2 rounded-lg bg-white/10 text-white"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

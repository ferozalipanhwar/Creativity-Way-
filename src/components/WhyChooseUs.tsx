import React from 'react';
import { ShieldCheck, Ruler, Truck, Headphones, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData.ts';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#F47721]" />;
      case 'Ruler':
        return <Ruler className="w-7 h-7 text-[#F47721]" />;
      case 'Truck':
        return <Truck className="w-7 h-7 text-[#F47721]" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7 text-[#F47721]" />;
      default:
        return <CheckCircle2 className="w-7 h-7 text-[#F47721]" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
            WHY CREATIVITY WAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A4C] tracking-tight mb-4">
            Engineered for Industrial Reliability in the UAE
          </h2>
          <p className="text-base text-slate-600">
            We deliver end-to-end storage infrastructure combining heavy-grade structural materials with dependable UAE delivery and assembly.
          </p>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="group relative p-7 rounded-2xl bg-[#F4F6F8] hover:bg-white border border-slate-200/80 hover:border-[#102A4C]/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5"
            >
              {/* Feature Number */}
              <span className="text-3xl font-extrabold text-slate-300 group-hover:text-[#F47721]/30 transition-colors self-end mb-1">
                0{index + 1}
              </span>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-[#102A4C]/5 border border-slate-200/90 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.icon)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#102A4C] mb-3 group-hover:text-[#102A4C]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

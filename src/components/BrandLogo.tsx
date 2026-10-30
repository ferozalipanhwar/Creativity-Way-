import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[10px] md:text-[11px] tracking-widest',
    lg: 'text-xs tracking-widest',
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Industrial Storage Rack SVG Emblem */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center shrink-0 rounded-lg p-1 bg-gradient-to-br ${
          isDark ? 'from-white/10 to-white/5 border border-white/10' : 'from-slate-100 to-slate-50 border border-slate-200'
        }`}
      >
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Left Upright Frame Column (Navy) */}
          <rect x="6" y="4" width="4.5" height="32" rx="1.5" fill={isDark ? '#FFFFFF' : '#102A4C'} />
          {/* Right Upright Frame Column (Navy) */}
          <rect x="29.5" y="4" width="4.5" height="32" rx="1.5" fill={isDark ? '#FFFFFF' : '#102A4C'} />
          
          {/* Frame Punch Slots (Perforations) */}
          <circle cx="8.25" cy="10" r="0.9" fill={isDark ? '#091B32' : '#F4F6F8'} />
          <circle cx="8.25" cy="18" r="0.9" fill={isDark ? '#091B32' : '#F4F6F8'} />
          <circle cx="8.25" cy="26" r="0.9" fill={isDark ? '#091B32' : '#F4F6F8'} />
          <circle cx="31.75" cy="10" r="0.9" fill={isDark ? '#091B32' : '#F4F6F8'} />
          <circle cx="31.75" cy="18" r="0.9" fill={isDark ? '#091B32' : '#F4F6F8'} />
          <circle cx="31.75" cy="26" r="0.9" fill={isDark ? '#091B32' : '#F4F6F8'} />

          {/* Diagonal Structural Bracing */}
          <path d="M10.5 8L29.5 16" stroke={isDark ? '#94A3B8' : '#64748B'} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10.5 24L29.5 16" stroke={isDark ? '#94A3B8' : '#64748B'} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10.5 24L29.5 32" stroke={isDark ? '#94A3B8' : '#64748B'} strokeWidth="1.8" strokeLinecap="round" />

          {/* Top Industrial Orange Load Beam with Connector Tabs */}
          <rect x="8.5" y="11" width="23" height="3.5" rx="1" fill="#F47721" />
          
          {/* Bottom Industrial Orange Load Beam */}
          <rect x="8.5" y="27" width="23" height="3.5" rx="1" fill="#F47721" />

          {/* Stylized Forward Logistics "Way" Accent arrow in orange */}
          <path d="M17 19.5L21 23.5L25 19.5" stroke="#F47721" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Typography: Company Name and Subtitle */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-extrabold ${titleSizes[size]} tracking-tight ${
            isDark ? 'text-white' : 'text-[#102A4C]'
          }`}
        >
          Creativity <span className="text-[#F47721]">Way</span>
        </span>
        {showSubtitle && (
          <span
            className={`font-semibold uppercase ${subtitleSizes[size]} ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            General Trading LLC
          </span>
        )}
      </div>
    </div>
  );
};

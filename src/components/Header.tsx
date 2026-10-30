import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface HeaderProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Industries', path: '/industries' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#091B32] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F47721]" />
              Industrial Storage & Commercial Shelving Supplier in UAE
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-400">Delivery & Assembly Across All 7 Emirates</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-3.5 h-3.5 text-[#F47721]" />
              +971 4 288 XXXX
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-3.5 h-3.5 text-[#F47721]" />
              sales@creativityway.ae
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-100 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Logo & Name */}
          <Link to="/" className="shrink-0 flex items-center focus:outline-none" aria-label="Creativity Way Home">
            <BrandLogo size="md" variant="light" showSubtitle={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors relative py-1.5 whitespace-nowrap ${
                    isActive
                      ? 'text-[#F47721] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#F47721] after:rounded-full'
                      : 'text-slate-700 hover:text-[#102A4C]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#F47721] hover:bg-[#D96414] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#F47721] focus:ring-offset-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#F47721]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-md text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#102A4C]/5 text-[#F47721] font-bold'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#F47721] hover:bg-[#D96414] text-white font-bold py-3 px-4 rounded-lg shadow-sm"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-[#F47721]" />
                  <span>Call: +971 4 288 XXXX / +971 50 XXX XXXX</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-[#F47721]" />
                  <span>Email: sales@creativityway.ae</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

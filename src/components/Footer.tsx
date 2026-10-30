import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Linkedin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData.ts';

interface FooterProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#091B32] text-white border-t border-white/10">
      {/* Top Banner / Quick Quote Strip */}
      <div className="bg-[#102A4C] border-b border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to Optimize Your Storage Space?
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Contact our engineering team for free site consultations and civil defense compliant racking designs.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            type="button"
            className="shrink-0 bg-[#F47721] hover:bg-[#D96414] text-white font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-colors text-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block focus:outline-none">
              <BrandLogo size="lg" variant="dark" showSubtitle={true} />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Creativity Way General Trading LLC provides storage and shelving solutions for commercial, industrial and retail environments across the United Arab Emirates.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#linkedin"
                aria-label="LinkedIn profile placeholder"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F47721] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook page placeholder"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F47721] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram profile placeholder"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F47721] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter profile placeholder"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F47721] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#F47721] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F47721] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#F47721] transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#F47721] transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F47721] transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F47721] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-white/10">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    to={`/product/${prod.id}`}
                    className="hover:text-[#F47721] transition-colors flex items-center justify-between"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[10px] text-slate-400">{prod.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-white/10">
              Contact UAE [Placeholders]
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.addressPlaceholder}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.phonePlaceholder}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.emailPlaceholder}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 block mb-1.5">
                UAE Coverage:
              </span>
              <p className="text-xs text-slate-300">
                Dubai · Abu Dhabi · Sharjah · Ajman · RAK · Fujairah · UAQ
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Creativity Way General Trading LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Industrial Storage Solutions</span>
            <span>·</span>
            <span className="text-slate-400">Warehouse Racking UAE</span>
            <span>·</span>
            <span className="text-slate-400">Commercial Shelving</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

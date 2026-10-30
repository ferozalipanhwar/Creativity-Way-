import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Ruler, Building2 } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData.ts';
import { QuoteFormData } from '../types/index.ts';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialCategory = '',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productCategory: initialCategory || 'Pallet Racks',
    requiredDimensions: '',
    loadCapacityRequired: 'Standard (1–2 Tons/level)',
    projectDetails: '',
    uaeEmirate: 'Dubai',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, productCategory: initialCategory }));
    }
  }, [initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Partial<Record<keyof QuoteFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setQuoteRef(`CW-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-[#091B32] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F47721] flex items-center justify-center text-white">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Request a Free Project Quote</h3>
              <p className="text-[11px] text-slate-300">Creativity Way General Trading LLC · UAE Storage Systems</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-70px)] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Quotation Request Logged
              </span>
              <h4 className="text-2xl font-bold text-[#102A4C] mb-2">
                Thank You, {formData.fullName}!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">
                We have received your request for <strong>{formData.productCategory}</strong>.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 inline-block font-mono font-bold text-base text-[#102A4C] mb-5">
                Reference ID: {quoteRef}
              </div>

              <div className="bg-[#F4F6F8] p-4 rounded-xl text-xs text-slate-600 text-left max-w-md mx-auto mb-6 space-y-1">
                <p><strong>Company:</strong> {formData.companyName}</p>
                <p><strong>Contact Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> +971 {formData.phone}</p>
                <p><strong>Location:</strong> {formData.uaeEmirate}, UAE</p>
                {formData.requiredDimensions && <p><strong>Dimensions:</strong> {formData.requiredDimensions}</p>}
              </div>

              <p className="text-xs text-slate-500 mb-6">
                Our sales engineer will contact you with formal specs and cost estimation within 24 hours.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="bg-[#102A4C] hover:bg-[#091B32] text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name <span className="text-[#F47721]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sultan Al Qasimi"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company Name <span className="text-[#F47721]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Logistics LLC"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                  />
                  {errors.companyName && <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email <span className="text-[#F47721]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sultan@company.ae"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone (+971) <span className="text-[#F47721]">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-2.5 text-xs font-bold text-slate-500 bg-slate-100 border border-r-0 border-slate-300 rounded-l-lg">
                      +971
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="50 123 4567"
                      className="w-full px-3 py-2 text-sm rounded-r-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Storage Product Category
                  </label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name}
                      </option>
                    ))}
                    <option value="Supermarket Shelving">Supermarket Shelving</option>
                    <option value="Custom Warehouse Configuration">Custom Warehouse Configuration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Delivery Emirate
                  </label>
                  <select
                    value={formData.uaeEmirate}
                    onChange={(e) => setFormData({ ...formData, uaeEmirate: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                  >
                    {COMPANY_INFO.emiratesCovered.map((emirate) => (
                      <option key={emirate} value={emirate}>{emirate}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Space Dimensions / Pallet Positions
                </label>
                <input
                  type="text"
                  value={formData.requiredDimensions}
                  onChange={(e) => setFormData({ ...formData, requiredDimensions: e.target.value })}
                  placeholder="e.g. 6m High, 4 Levels, 250 Pallets or 150 sqm floor"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Notes & Loading Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Specify weight per level, type of forklift, or any civil defense mesh requirements..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#F47721] hover:bg-[#D96414] text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? <span>Submitting...</span> : <span>Send Quote Request</span>}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

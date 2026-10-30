import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, Shield, PhoneCall, ArrowRight } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../data/companyData.ts';
import { QuoteFormData } from '../types/index.ts';

interface GetAQuoteSectionProps {
  initialCategory?: string;
}

export const GetAQuoteSection: React.FC<GetAQuoteSectionProps> = ({ initialCategory = '' }) => {
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

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your company or business name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid business email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief processing for realistic UX
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedRef = `CW-${Math.floor(100000 + Math.random() * 900000)}`;
      setQuoteRef(generatedRef);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      productCategory: 'Pallet Racks',
      requiredDimensions: '',
      loadCapacityRequired: 'Standard (1–2 Tons/level)',
      projectDetails: '',
      uaeEmirate: 'Dubai',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="quote-section" className="relative py-20 lg:py-28 bg-[#091B32] text-white overflow-hidden">
      {/* Background Warehouse Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={IMAGES.heroWarehouse}
          alt="Creativity Way warehouse storage"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#091B32]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Info, and direct Call CTA */}
          <div className="lg:col-span-5">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
              LET'S BUILD YOUR SPACE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Get a Free Quote
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Tell us your requirements and we will get back to you shortly. Our storage specialists provide rapid turnaround on drawings, capacity calculations, and transparent pricing.
            </p>

            {/* Quick Contact Link */}
            <div className="flex items-center gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#F47721] hover:bg-[#D96414] text-white text-sm font-bold px-5 py-3 rounded-lg shadow-sm transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Value Guarantees */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#F47721]">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Manufacturer Pricing</h4>
                  <p className="text-xs text-slate-400">Honest estimates with no middleman markups</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#F47721]">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Fast UAE Response</h4>
                  <p className="text-xs text-slate-400">Response within 24 business hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200">
              {isSubmitted ? (
                /* Demo Success Message */
                <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">
                    Quote Request Received
                  </span>
                  <h3 className="text-2xl font-bold text-[#102A4C] mb-2">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Your quote request for <strong>{formData.productCategory}</strong> has been logged under Reference ID:
                  </p>
                  
                  <div className="inline-block bg-slate-100 border border-slate-200 rounded-xl px-5 py-3 font-mono font-bold text-lg text-[#102A4C] mb-6">
                    {quoteRef}
                  </div>

                  <div className="bg-[#F4F6F8] p-4 rounded-xl text-xs text-slate-600 text-left mb-6 space-y-1.5">
                    <p><strong>Company:</strong> {formData.companyName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Location:</strong> {formData.uaeEmirate}, UAE</p>
                  </div>

                  <p className="text-xs text-slate-500 mb-6">
                    A Creativity Way technical sales consultant will review your specifications and contact you shortly.
                  </p>

                  <button
                    onClick={resetForm}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 bg-[#102A4C] hover:bg-[#091B32] text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* The Request Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-200 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-[#102A4C]">
                      Request a Project Quotation
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out your storage specifications for an itemized estimate.
                    </p>
                  </div>

                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-[#F47721]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Mohammed Al Hashimi"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-300 focus:ring-[#102A4C] focus:border-[#102A4C]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name <span className="text-[#F47721]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Al Safa Logistics LLC"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 ${
                          errors.companyName
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-300 focus:ring-[#102A4C] focus:border-[#102A4C]'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-[#F47721]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.ae"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-300 focus:ring-[#102A4C] focus:border-[#102A4C]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-[#F47721]">*</span>
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-xs font-bold text-slate-600 bg-slate-100 border border-r-0 border-slate-300 rounded-l-lg">
                          +971
                        </span>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="50 123 4567"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-r-lg border bg-white focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-slate-300 focus:ring-[#102A4C] focus:border-[#102A4C]'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Product Category & UAE Emirate */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Product Category
                      </label>
                      <select
                        value={formData.productCategory}
                        onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                      >
                        <option value="Pallet Racks">Pallet Racks</option>
                        <option value="Ducking Panel Racks">Ducking Panel Racks</option>
                        <option value="Wire Mesh Racks">Wire Mesh Racks</option>
                        <option value="Heavy Duty Racks">Heavy Duty Racks</option>
                        <option value="Mezzanine Floors">Mezzanine Floors</option>
                        <option value="Medium Duty Racks">Medium Duty Racks</option>
                        <option value="Supermarket Shelving">Supermarket Shelving</option>
                        <option value="Custom Storage Solution">Custom Storage Solution</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Location (Emirate)
                      </label>
                      <select
                        value={formData.uaeEmirate}
                        onChange={(e) => setFormData({ ...formData, uaeEmirate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                      >
                        {COMPANY_INFO.emiratesCovered.map((emirate) => (
                          <option key={emirate} value={emirate}>{emirate}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Required Dimensions */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Required Dimensions / Space Footprint
                    </label>
                    <input
                      type="text"
                      value={formData.requiredDimensions}
                      onChange={(e) => setFormData({ ...formData, requiredDimensions: e.target.value })}
                      placeholder="e.g. 5m Height × 30m Length × 1.1m Depth (or 500 sqm floor area)"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Details & Load Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Describe your stored inventory, weight per level, preferred delivery timeframe, or site access details..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#F47721] hover:bg-[#D96414] text-white text-base font-bold py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Preparing Estimate...</span>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    Free technical consultation · No obligation · All 7 UAE Emirates serviced
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

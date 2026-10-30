import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Building2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Business Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleWhatsAppClick = () => {
    // Standard UAE WhatsApp placeholder click handler
    alert('Connecting to Creativity Way WhatsApp Business line (+971 50 XXX XXXX). Please use the business enquiry form or placeholder line during business hours.');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) newErrors.email = 'Please provide your email';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A4C] tracking-tight mb-4">
            Contact Creativity Way
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Reach out to our warehouse racking and commercial storage specialists for project inquiries, technical assessments, and site visits across the UAE.
          </p>
        </div>

        {/* 2-Column Layout: Contact Information vs Business Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Contact Details Cards & UAE Hubs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#102A4C] pb-4 border-b border-slate-100 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#F47721]" />
                Corporate Information
              </h3>

              {/* Phone Placeholder */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#102A4C]/5 text-[#F47721] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Phone Numbers [Placeholder]
                  </span>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">
                    {COMPANY_INFO.phonePlaceholder}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Direct lines for technical sales & dispatch</p>
                </div>
              </div>

              {/* Email Placeholder */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#102A4C]/5 text-[#F47721] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Email Inquiries [Placeholder]
                  </span>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">
                    {COMPANY_INFO.emailPlaceholder}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Expect response within 24 business hours</p>
                </div>
              </div>

              {/* Address Placeholder */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#102A4C]/5 text-[#F47721] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    UAE Location [Placeholder]
                  </span>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">
                    {COMPANY_INFO.addressPlaceholder}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Central warehouse staging & fabrication facilities</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#102A4C]/5 text-[#F47721] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Working Hours
                  </span>
                  <div className="text-sm font-semibold text-slate-800 mt-0.5">
                    {COMPANY_INFO.workingHours}
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp [Placeholder]</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Instant consultation for warehouse measurements and photo reviews
                </p>
              </div>
            </div>

            {/* UAE Service Coverage Banner */}
            <div className="bg-[#102A4C] text-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-sm font-bold text-[#F47721] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                All 7 Emirates Serviced
              </h4>
              <p className="text-xs text-slate-200 mb-4 leading-relaxed">
                Our logistics and mobile installation teams operate throughout the United Arab Emirates.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {COMPANY_INFO.emiratesCovered.map((emirate) => (
                  <span
                    key={emirate}
                    className="text-xs font-medium px-2.5 py-1 rounded bg-white/10 text-slate-200"
                  >
                    {emirate}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Business Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-slate-200/90 shadow-sm">
              <h3 className="text-2xl font-bold text-[#102A4C] mb-2">
                Send a Business Enquiry
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Have questions about our racking specifications, installation timelines, or site visits? Leave us a message.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-1">
                    Enquiry Submitted Successfully
                  </h4>
                  <p className="text-sm text-emerald-700 mb-5">
                    Thank you, {formData.name}. Our commercial sales department will reply to {formData.email} shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Business Inquiry',
                        message: '',
                      });
                    }}
                    className="text-xs font-bold text-[#102A4C] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-[#F47721]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Mansoor"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Business Email <span className="text-[#F47721]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@enterprise.ae"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 5X XXX XXXX"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Enquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                    >
                      <option value="General Business Inquiry">General Business Inquiry</option>
                      <option value="Warehouse Site Survey Request">Warehouse Site Survey Request</option>
                      <option value="Supermarket Shelving Project">Supermarket Shelving Project</option>
                      <option value="Mezzanine Floor Feasibility">Mezzanine Floor Feasibility</option>
                      <option value="Custom Dimensions / Engineering">Custom Dimensions / Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message <span className="text-[#F47721]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify your storage requirements, warehouse height, location in the UAE, and project timeline..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#102A4C] hover:bg-[#091B32] text-white font-bold py-3.5 px-6 rounded-lg shadow-sm transition-all cursor-pointer"
                  >
                    <span>Send Business Message</span>
                    <Send className="w-4 h-4 text-[#F47721]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* UAE Location Map Placeholder & Distribution Hubs Visualizer */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-[#F47721] uppercase tracking-wider block">
                LOCATION MAP [PLACEHOLDER]
              </span>
              <h3 className="text-xl font-bold text-[#102A4C]">
                UAE Operations & Distribution Network
              </h3>
            </div>
            <div className="text-xs text-slate-500">
              Servicing Dubai, Abu Dhabi, Sharjah, and Northern Emirates
            </div>
          </div>

          {/* Interactive Schematic UAE Map Layout */}
          <div className="relative w-full h-72 sm:h-80 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center p-6">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
            
            <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Hub 1: Dubai Industrial */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#102A4C] text-[#F47721] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102A4C]">Dubai Staging Center</h4>
                  <p className="text-xs text-slate-600">Al Quoz & Dubai Industrial City</p>
                  <span className="text-[10px] text-[#F47721] font-semibold">Central Logistics & Inventory</span>
                </div>
              </div>

              {/* Hub 2: Sharjah Industrial */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#102A4C] text-[#F47721] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102A4C]">Sharjah Warehouse</h4>
                  <p className="text-xs text-slate-600">Sharjah Industrial Area</p>
                  <span className="text-[10px] text-[#F47721] font-semibold">Fabrication & Panel Assembly</span>
                </div>
              </div>

              {/* Hub 3: Abu Dhabi Coverage */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#102A4C] text-[#F47721] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102A4C]">Abu Dhabi Projects</h4>
                  <p className="text-xs text-slate-600">ICAD & Musaffah</p>
                  <span className="text-[10px] text-[#F47721] font-semibold">Heavy Industrial Site Installations</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 right-4 text-[10px] text-slate-400 bg-white/80 px-2 py-1 rounded">
              Schematic Location Placeholder · Verified Coordinates Pending
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

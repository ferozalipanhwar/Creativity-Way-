import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  Ruler,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Boxes,
  Truck,
  Settings
} from 'lucide-react';
import { PRODUCTS } from '../data/companyData.ts';
import { ProductCard } from '../components/ProductCard.tsx';

interface ProductDetailPageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImageIndex(0);
  }, [id]);

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#F4F6F8] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back Link */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link to="/" className="hover:text-[#102A4C]">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#102A4C]">Products</Link>
            <span>/</span>
            <span className="text-[#F47721] font-semibold">{product.name}</span>
          </nav>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A4C] hover:text-[#F47721] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Products</span>
          </Link>
        </div>

        {/* Main Product Overview Block */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Gallery Column (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Primary Selected Image */}
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src={product.galleryImages[selectedImageIndex] || product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#102A4C]/90 text-white text-xs font-bold px-3 py-1 rounded-md backdrop-blur-xs">
                  {product.category}
                </div>
              </div>

              {/* Thumbnails Row */}
              {product.galleryImages.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative aspect-4/3 w-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImageIndex === idx
                          ? 'border-[#F47721] ring-2 ring-[#F47721]/30'
                          : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} angle ${idx + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Fast Delivery & Assembly Note */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#F47721]" />
                  Delivery & Site Installation in all 7 UAE Emirates
                </span>
                <span className="font-bold text-[#102A4C]">Direct Supply</span>
              </div>
            </div>

            {/* Product Meta Column (6 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-xs font-extrabold tracking-widest text-[#F47721] uppercase mb-1">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#102A4C] tracking-tight mb-2">
                {product.name}
              </h1>
              <p className="text-sm font-semibold text-slate-500 mb-6">
                {product.tagline}
              </p>

              <div className="text-slate-700 text-sm leading-relaxed space-y-4 mb-6">
                <p>{product.fullDescription}</p>
              </div>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-3.5 rounded-lg bg-[#F4F6F8] border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">
                    Load Capacity
                  </span>
                  <span className="text-sm font-bold text-[#102A4C]">
                    {product.specifications.loadCapacity.split('(')[0]}
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F4F6F8] border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">
                    Steel Grade
                  </span>
                  <span className="text-sm font-bold text-[#102A4C]">
                    {product.specifications.material.split('/')[0]} Certified
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(product.name)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F47721] hover:bg-[#D96414] text-white text-base font-bold py-3.5 px-6 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <span>Get a Quote for this Rack</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 text-sm font-bold text-[#102A4C] bg-white transition-colors"
                >
                  Contact Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Technical Specifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Key Benefits (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#102A4C] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#F47721]" />
                Key System Benefits
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Engineered to maximize cubic warehouse utilization and protect inventory.
              </p>

              <div className="space-y-3.5">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F47721]/10 text-[#F47721] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Ideal Applications
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.idealApplications.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#F4F6F8] border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specifications Table & Customization (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
              <h3 className="text-xl font-bold text-[#102A4C] flex items-center gap-2">
                <Ruler className="w-5 h-5 text-[#F47721]" />
                Technical Specifications (Sample Layout)
              </h3>
            </div>

            {/* Engineering Disclaimer */}
            <div className="p-3.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5 mb-6">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Sample Technical Layout:</strong> The specifications listed below represent sample configurations. Final dimensions, frame upright profiles, and safe working load capacities depend on your specific warehouse layout, pallet sizes, forklift models, and structural engineering requirements.
              </span>
            </div>

            {/* Detailed Spec Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2.5 px-3 font-bold text-slate-500 w-1/3 bg-slate-50">Height</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">{product.specifications.height}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2.5 px-3 font-bold text-slate-500 bg-slate-50">Beam Length / Span</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">{product.specifications.length}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2.5 px-3 font-bold text-slate-500 bg-slate-50">Frame Width / Depth</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">{product.specifications.width}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2.5 px-3 font-bold text-slate-500 bg-slate-50">Safe Load Capacity</td>
                    <td className="py-2.5 px-3 font-bold text-[#F47721]">{product.specifications.loadCapacity}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2.5 px-3 font-bold text-slate-500 bg-slate-50">Steel Material</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">{product.specifications.material}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2.5 px-3 font-bold text-slate-500 bg-slate-50">Surface Finish</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">{product.specifications.finish}</td>
                  </tr>
                  {product.specifications.levels && (
                    <tr className="border-b border-slate-100">
                      <td className="py-2.5 px-3 font-bold text-slate-500 bg-slate-50">Configurable Levels</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">{product.specifications.levels}</td>
                    </tr>
                  )}
                  {product.specifications.pitchAdjustment && (
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-slate-500 bg-slate-50">Pitch Adjustment</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">{product.specifications.pitchAdjustment}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Customization Options */}
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Settings className="w-4 h-4 text-[#F47721]" />
                Available Customization Options
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {product.customizationOptions.map((opt, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 rounded bg-slate-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-[#F47721] uppercase tracking-wider block">
                COMPATIBLE SYSTEMS
              </span>
              <h3 className="text-2xl font-bold text-[#102A4C]">
                Related Storage Equipment
              </h3>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-[#102A4C] hover:text-[#F47721] flex items-center gap-1"
            >
              <span>View All 6 Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onOpenQuoteModal={onOpenQuoteModal}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ProductCard } from './ProductCard.tsx';
import { PRODUCTS } from '../data/companyData.ts';

interface ProductGridProps {
  onOpenQuoteModal: (category?: string) => void;
  showFilters?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onOpenQuoteModal, showFilters = true }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'heavy' | 'shelving' | 'mezzanine'>('all');

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'heavy') return ['pallet-racks', 'heavy-duty-racks'].includes(product.id);
    if (activeFilter === 'shelving') return ['ducking-panel-racks', 'wire-mesh-racks', 'medium-duty-racks'].includes(product.id);
    if (activeFilter === 'mezzanine') return product.id === 'mezzanine-floors';
    return true;
  });

  return (
    <section id="products-section" className="py-20 lg:py-28 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
            OUR PRODUCTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A4C] tracking-tight mb-4">
            Storage Racks & Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We supply and install all kinds of storage systems.
          </p>

          {/* Filter Tabs */}
          {showFilters && (
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200/80 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#102A4C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                All Products (6)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('heavy')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'heavy'
                    ? 'bg-[#102A4C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Heavy Duty & Pallet Racks
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('shelving')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'shelving'
                    ? 'bg-[#102A4C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Shelving & Decking Panels
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('mezzanine')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'mezzanine'
                    ? 'bg-[#102A4C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Mezzanine Floors
              </button>
            </div>
          )}
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenQuoteModal={onOpenQuoteModal}
            />
          ))}
        </div>

        {/* Bottom Custom Engineering Callout */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold text-[#102A4C] mb-1">
              Need a Custom Height or Specific Bay Configuration?
            </h4>
            <p className="text-sm text-slate-600">
              Our engineering team custom designs upright heights from 2m to 12m with tailored beam load ratings up to 4.5 tons per level.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Custom Configuration')}
            type="button"
            className="shrink-0 bg-[#F47721] hover:bg-[#D96414] text-white font-bold px-6 py-3 rounded-lg shadow-sm hover:shadow transition-colors text-sm cursor-pointer whitespace-nowrap"
          >
            Request Custom Specification
          </button>
        </div>
      </div>
    </section>
  );
};

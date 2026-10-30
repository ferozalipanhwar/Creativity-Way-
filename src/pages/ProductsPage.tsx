import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { PRODUCTS } from '../data/companyData.ts';
import { ProductCard } from '../components/ProductCard.tsx';

interface ProductsPageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Warehouse', 'Medium to Heavy', 'Safety & Decking', 'Multi-Tier', 'Commercial'];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.idealApplications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Warehouse') return ['pallet-racks', 'heavy-duty-racks'].includes(product.id);
    if (selectedCategory === 'Medium to Heavy') return ['ducking-panel-racks', 'medium-duty-racks'].includes(product.id);
    if (selectedCategory === 'Safety & Decking') return ['wire-mesh-racks', 'ducking-panel-racks'].includes(product.id);
    if (selectedCategory === 'Multi-Tier') return product.id === 'mezzanine-floors';
    if (selectedCategory === 'Commercial') return product.id === 'medium-duty-racks';
    return true;
  });

  return (
    <div className="bg-[#F4F6F8] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Search Bar */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#F47721] uppercase block mb-2">
            OUR COMPLETE CATALOG
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102A4C] tracking-tight mb-4">
            Industrial Storage Racks & Systems
          </h1>
          <p className="text-base text-slate-600 mb-8">
            Explore our six primary industrial storage categories, engineered with high-yield structural steel and precision powder coated finishes.
          </p>

          {/* Search Input */}
          <div className="relative max-w-lg mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by rack type, application, or industry..."
              className="w-full pl-11 pr-4 py-3.5 text-sm rounded-xl border border-slate-300 bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-[#102A4C]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#102A4C] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenQuoteModal={onOpenQuoteModal}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center max-w-md mx-auto border border-slate-200 mb-16">
            <p className="text-base text-slate-600 mb-4">No storage products found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-[#F47721] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Technical Comparison Matrix */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-16">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#F47721] uppercase tracking-wider block">
              QUICK SELECTION GUIDE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#102A4C]">
              Technical Specifications Comparison
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Sample specifications for planning purposes. Final capacities are engineered to customer requirements.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#102A4C] text-white">
                  <th className="py-3 px-3.5 rounded-l-lg font-bold">Product System</th>
                  <th className="py-3 px-3.5 font-bold">Standard Height</th>
                  <th className="py-3 px-3.5 font-bold">Span / Length</th>
                  <th className="py-3 px-3.5 font-bold">Load Rating</th>
                  <th className="py-3 px-3.5 font-bold">Best For</th>
                  <th className="py-3 px-3.5 rounded-r-lg font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PRODUCTS.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-3.5 font-bold text-[#102A4C]">
                      {p.name}
                    </td>
                    <td className="py-3 px-3.5 text-slate-600">
                      {p.specifications.height.split('(')[0]}
                    </td>
                    <td className="py-3 px-3.5 text-slate-600">
                      {p.specifications.length}
                    </td>
                    <td className="py-3 px-3.5 font-semibold text-[#F47721]">
                      {p.specifications.loadCapacity.split('(')[0]}
                    </td>
                    <td className="py-3 px-3.5 text-slate-500 max-w-xs truncate">
                      {p.idealApplications[0]}
                    </td>
                    <td className="py-3 px-3.5 text-right">
                      <button
                        onClick={() => onOpenQuoteModal(p.name)}
                        className="text-xs font-bold text-[#102A4C] hover:text-[#F47721] underline"
                      >
                        Quote
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

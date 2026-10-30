import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Check } from 'lucide-react';
import { ProductItem } from '../types/index.ts';

interface ProductCardProps {
  product: ProductItem;
  onOpenQuoteModal: (category: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenQuoteModal }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Tag */}
        <div className="absolute top-3 left-3 bg-[#102A4C]/90 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
          <Layers className="w-3 h-3 text-[#F47721]" />
          <span>{product.category}</span>
        </div>

        {/* Load Preview Badge */}
        <div className="absolute bottom-3 right-3 bg-white/95 text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm border border-slate-200">
          {product.specifications.loadCapacity.split('(')[0].trim()}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#102A4C] group-hover:text-[#F47721] transition-colors mb-2">
          {product.name}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
          {product.shortDescription}
        </p>

        {/* Highlighted Feature Bullets */}
        <div className="mt-auto pt-4 border-t border-slate-100 space-y-2 mb-6">
          {product.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <Check className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-[#102A4C] bg-slate-100 hover:bg-[#102A4C] hover:text-white rounded-lg transition-colors duration-200"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => onOpenQuoteModal(product.name)}
            type="button"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-white bg-[#F47721] hover:bg-[#D96414] rounded-lg transition-colors duration-200 cursor-pointer shadow-2xs"
          >
            <span>Get Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
};

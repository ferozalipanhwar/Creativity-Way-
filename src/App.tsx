/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { BackToTop } from './components/BackToTop.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';

import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ProductsPage } from './pages/ProductsPage.tsx';
import { ProductDetailPage } from './pages/ProductDetailPage.tsx';
import { IndustriesPage } from './pages/IndustriesPage.tsx';
import { GalleryPage } from './pages/GalleryPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteCategory, setSelectedQuoteCategory] = useState<string>('');

  const handleOpenQuoteModal = (category?: string) => {
    if (category) {
      setSelectedQuoteCategory(category);
    } else {
      setSelectedQuoteCategory('Pallet Racks');
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F4F6F8] font-sans antialiased text-slate-800">
        {/* Sticky Header with Brand Wordmark, Nav Links & CTA */}
        <Header onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/products"
              element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetailPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/industries"
              element={<IndustriesPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            {/* Fallback to Home */}
            <Route
              path="*"
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
          </Routes>
        </main>

        {/* Corporate Dark Navy Footer */}
        <Footer onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Floating Controls & Modals */}
        <BackToTop />
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
          initialCategory={selectedQuoteCategory}
        />
      </div>
    </BrowserRouter>
  );
}

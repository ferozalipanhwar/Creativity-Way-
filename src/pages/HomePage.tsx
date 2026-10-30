import React from 'react';
import { Hero } from '../components/Hero.tsx';
import { ProductGrid } from '../components/ProductGrid.tsx';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';
import { IndustriesWeServe } from '../components/IndustriesWeServe.tsx';
import { AboutUs } from '../components/AboutUs.tsx';
import { ProjectGallery } from '../components/ProjectGallery.tsx';
import { GetAQuoteSection } from '../components/GetAQuoteSection.tsx';

interface HomePageProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* 3. Hero Section */}
      <Hero
        onOpenQuoteModal={onOpenQuoteModal}
        onExploreProducts={scrollToProducts}
      />

      {/* 4. Products Section */}
      <ProductGrid onOpenQuoteModal={onOpenQuoteModal} />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. About Us */}
      <AboutUs onOpenQuoteModal={() => onOpenQuoteModal('Facility Consultation')} />

      {/* 7. Industries We Serve */}
      <IndustriesWeServe onOpenQuoteModal={onOpenQuoteModal} />

      {/* 9. Project Gallery */}
      <ProjectGallery />

      {/* 10. Get a Free Quote Section */}
      <GetAQuoteSection />
    </div>
  );
};

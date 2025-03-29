import React from 'react';
import HeroSection from '../components/HeroSection';
import NewArrivalsSection from '../components/NewArrivalsSection';
import PopularProductsSection from '../components/PopularProductsSection';
import CollectionsCarousel from '../components/CollectionsCarousel';
import LoyaltyProgram from '../components/LoyaltyProgram';
import BlogSection from '../components/BlogSection';
import CategoriesSection from '../components/CategoriesSection';
import AboutUs from '../components/AboutUs';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  return (
    <div className="home">
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="categories">
          <CategoriesSection />
        </section>
        <section id="collections">
          <CollectionsCarousel />
        </section>
        <section id="new-arrivals">
          <NewArrivalsSection />
        </section>
        <section id="popular-products">
          <PopularProductsSection />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="loyalty">
          <LoyaltyProgram />
        </section>
        <section id="about">
          <AboutUs />
        </section>
      </main>
    </div>
  );
};

export default Home;

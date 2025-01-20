"use client";
import HeroSection from '@/components/HeroSection';
import PricingPage from '@/components/PricingPage';
import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-16 p-8 sm:p-20">
      {/* Hero Section */}
      <div className="w-full max-w-4xl mx-auto">
        <HeroSection />
      </div>

      {/* Pricing Page */}
      <div>
        <PricingPage />
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/6124c8c100c7e052d7ca933a/1631292290936-05KIWUWRMU7NWVJIUN6E/FortLauderdale_Spa_Luxury_Medspa_Best.jpg"
          alt="Luxury Medical Spa"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in">
            Experience Transformative Wellness
          </h1>
          <p className="font-montserrat text-lg md:text-xl text-white/90 mb-8 animate-slide-up">
            Discover a new level of luxury wellness at Beverly Hills' premier medical spa
          </p>
          <button className="btn-primary group">
            Book Your Consultation
            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

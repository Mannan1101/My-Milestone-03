import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="bg-[url('/BG-PIC.jpg')] bg-cover bg-center w-full h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-gray-800 mb-4">
          Welcome to My Blog
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-8 font-bold max-w-3xl mx-auto">
          Welcome to my adventure blog—a place where curiosity meets courage! I’ve always been captivated by the thrill of exploring the unknown, from scaling rugged mountains to navigating winding forest trails. Through this blog, I’ll share tales of daring escapades, awe-inspiring landscapes, and lessons learned on the road less traveled. Whether you’re an adrenaline junkie or simply seeking inspiration, join me in embracing the spirit of adventure. Let’s explore, dream, and conquer the extraordinary together!


        </p>

        {/* Button */}
        <button
          type="button"
          className="w-[180px] h-[30px] sm:w-[220px] sm:h-[60px] bg-gray-700 text-white rounded-lg transform hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
        >
          <Link href="/Blog">
            See What&#39;s New
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
import React from 'react';
import Image from 'next/image';
import Text from './Text';

const Hero: React.FC = () => {
  return (
    <div className="bg-transparent container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 min-h-screen flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0 text-center lg:text-left mb-8 lg:mb-0">
        <Text />
        <p className="text-base sm:text-lg my-3 sm:my-5">
          Fast, user-friendly and engaging - turn HR into people and culture and streamline your daily operations with your own branded app.
        </p>
        
        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col items-center lg:items-start">
          <span className="text-sm sm:text-base">Dive into Bodx — and start building.</span>
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12 justify-center lg:justify-start">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">75.2%</p>
            <p className="text-xs sm:text-sm md:text-base">Average daily activity</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">~20k</p>
            <p className="text-xs sm:text-sm md:text-base">Average daily users</p>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <Image
            src="/screen-bg.png"
            alt="Hero SVG"
            width={1000}
            height={800}
            layout="responsive"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
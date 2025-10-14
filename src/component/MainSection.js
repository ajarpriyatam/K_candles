import React, { useState, useEffect } from "react";

const MainSection = () => {
  // Image URLs for the slider
  const sliderImages = [
    "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg?_gl=1*1l66aon*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODYyMzIkbzUkZzEkdDE3NjAzODYyNjQkajI4JGwwJGgw",
    "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg?_gl=1*1wstoeo*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODcwNTgkajI5JGwwJGgw",
    "https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg",
    "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?_gl=1*19jd7qh*_ga*NzY5NzI4OTM1LjE3NTgxNzM0MDk.*_ga_8JE65Q40S6*czE3NjAzODczOTUkajUxJGwwJGgw"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section
      id="home"
      className="w-full min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#FFF8F3] via-beige to-[#FFF8F3] relative overflow-hidden pt-20"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-80' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/5 via-transparent to-[#C08860]/5 pointer-events-none z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A574]/10 rounded-full blur-3xl animate-pulse z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C08860]/10 rounded-full blur-3xl animate-pulse delay-1000 z-10" />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        <div className="z-10 flex flex-col items-center backdrop-blur-sm p-8 md:p-12 rounded-3xl">
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] via-[#C08860] to-[#D4A574] drop-shadow-lg mb-4 text-center tracking-tight">
          Diwali Special Sale is Live!
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-700 text-center mb-8 max-w-3xl font-light tracking-wide">
          Glow brighter this Diwali with our premium candles
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#collection"
            className="px-8 py-4 bg-gradient-to-r from-[#D4A574] to-[#C08860] text-beige font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4A574]/50 transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
          </a>
          <a
            href="#featured"
            className="px-8 py-4 border-2 border-[#D4A574] text-[#D4A574] font-semibold rounded-full hover:bg-[#D4A574] hover:text-beige transition-all duration-300 transform hover:scale-105"
          >
            View Collections
          </a>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl font-bold text-[#D4A574]">500+</p>
            <p className="text-sm md:text-base text-gray-600">Products</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl font-bold text-[#D4A574]">50+</p>
            <p className="text-sm md:text-base text-gray-600">Fragrances</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl font-bold text-[#D4A574]">10k+</p>
            <p className="text-sm md:text-base text-gray-600">Happy Customers</p>
          </div>
        </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-[#D4A574] scale-125' 
                : 'bg-beige/50 hover:bg-beige/75'
            }`}
          />
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-[#D4A574] rounded-full flex items-start justify-center p-2 bg-beige/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-[#D4A574] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default MainSection;

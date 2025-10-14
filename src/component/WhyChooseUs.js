import React from "react";
import { FaLeaf, FaStar, FaShieldAlt, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaLeaf,
      title: "Pure Materials",
      description: "Our candles feature premium waxes, essential oils, and natural fragrances for a clean, consistent burn and delightful scent.",
      color: "#266B37"
    },
    {
      icon: FaStar,
      title: "Wide Range",
      description: "Explore a variety of candle styles, sizes, and scents for any occasion. We have something special for everyone.",
      color: "#D4A574"
    },
    {
      icon: FaShieldAlt,
      title: "Quality Guarantee",
      description: "Our candles are carefully handcrafted by skilled artisans, reflecting meticulous attention to detail and quality.",
      color: "#C08860"
    },
    {
      icon: FaHeadset,
      title: "Customer Support",
      description: "We're here for you anytime, day or night. Your satisfaction is our priority.",
      color: "#D4A574"
    }
  ];

  return (
    <section className="w-full py-16 bg-beige">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[44px] text-[#D4A574] font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Experience the difference with KAVERA's commitment to excellence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-beige rounded-2xl p-8 border-2 border-gray-200 hover:border-[#D4A574]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D4A574]/20"
              >
                {/* Background Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl rounded-2xl"
                  style={{ backgroundColor: feature.color }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <IconComponent 
                        className="w-8 h-8"
                        style={{ color: feature.color }}
                      />
                    </div>
                    <div 
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ backgroundColor: feature.color }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-[#D4A574]/10 via-[#C08860]/10 to-[#D4A574]/10 rounded-2xl p-8 border-2 border-[#D4A574]/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#D4A574] mb-2">10k+</p>
              <p className="text-gray-600 text-sm md:text-base">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#D4A574] mb-2">500+</p>
              <p className="text-gray-600 text-sm md:text-base">Products</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#D4A574] mb-2">50+</p>
              <p className="text-gray-600 text-sm md:text-base">Unique Fragrances</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#D4A574] mb-2">100%</p>
              <p className="text-gray-600 text-sm md:text-base">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


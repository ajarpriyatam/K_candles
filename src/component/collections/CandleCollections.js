import React from "react";
import { Link } from "react-router-dom";

const CandleCollections = () => {
  const collections = [
    {
      name: "Aroma Gift Set",
      image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg",
      description: "Perfect gifts for loved ones",
      link: "/giftsets/collection",
      color: "#FF8C42"
    },
    {
      name: "T-Light Candles",
      image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg",
      description: "Perfect for meditation and ambiance",
      link: "/tlight/collection",
      color: "#FF6B35"
    },
    {
      name: "Jar & Container Candles",
      image: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg",
      description: "Long-lasting luxury scents",
      link: "/jar/collection",
      color: "#266B37"
    },
    {
      name: "Pillar Candles",
      image: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg",
      description: "Classic elegance for any space",
      link: "/pillar/collection",
      color: "#FF8C42"
    },
    {
      name: "Home Decor",
      image: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg",
      description: "Enhance your living space",
      link: "/homedecor/collection",
      color: "#FF6B35"
    },
    {
      name: "Intelligent Automatic Aroma System HVAC",
      image: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg",
      description: "Intelligent Aroma System for Office Spaces & Luxury Homes, HVAC, AHU Several...",
      link: "/hvac/collection",
      color: "#FF8C42"
    },
    {
      name: "Humidifiers",
      image: "https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg",
      description: "Maintain perfect humidity for your space",
      link: "/humidifiers/collection",
      color: "#FF6B35"
    },
    {
      name: "Raw Material",
      image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg",
      description: "We also provide all types of Waxes, Wicks, Fragrances, Moulds, Etc. We...",
      link: "/rawmaterial/collection",
      color: "#266B37"
    }
  ];

  return (
    <section id="collection" className="w-full py-16 px-[5%] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[44px] text-gray-900 font-bold mb-4">
            Our Collections
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Discover our curated collection of luxury candles and home fragrances
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={index}
              to={collection.link}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-200 hover:border-gray-300"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#FF8C42] transition-colors duration-300">
                  {collection.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {collection.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-[#FF8C42] text-sm font-medium">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Special Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#FF8C42]/10 via-[#FF6B35]/10 to-[#FF8C42]/10 rounded-2xl p-8 text-center border border-[#FF8C42]/20">
          <p className="text-[#FF8C42] text-lg md:text-xl font-semibold mb-2">
            🎉 Diwali Special Sale is Live! 🎉
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Get up to 70% off on selected items. Limited time offer!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CandleCollections;


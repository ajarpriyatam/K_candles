import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GiCandleFlame } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  // Debug: Log product data to see what's available
  console.log("ProductCard props:", {
    name: props.name,
    scent: props.scent,
    candleType: props.candleType,
    price: props.price
  });

  // Calculate discount percentage if there's an original price
  const discountPercent = props.originalPrice 
    ? Math.round(((props.originalPrice - props.price) / props.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative w-full h-full bg-beige rounded-xl overflow-hidden shadow-lg hover:shadow-[#D4A574]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200 hover:border-[#D4A574]/50 hover:bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${props._id}`)}
    >
       {/* Sale Badge */}
       {discountPercent > 0 && (
         <div className="absolute left-3 top-3 z-40 bg-[#C08860] text-beige px-3 py-1 rounded-full text-xs font-bold">
           Sale {discountPercent}%
         </div>
       )}

      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="absolute right-3 top-3 z-40 bg-beige/90 p-2 rounded-full shadow-md transition-transform duration-200 hover:scale-110 border border-gray-200"
      >
        {isFavorite ? (
          <FaHeart className="w-5 h-5 text-[#C08860]" />
        ) : (
          <FaRegHeart className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Image Section */}
      <div className="h-[260px] w-full overflow-hidden bg-gray-50 relative">
        <img
          src={props.productImageGallery[0].url}
          alt={props.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beige/20 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="p-4 bg-beige">
        <div className="mb-3">
          <div className="flex items-start gap-2 mb-2">
            <GiCandleFlame className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-1" />
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {props.name}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xl font-bold text-[#D4A574]">
              Rs. {props.price.toLocaleString()}
            </p>
            {props.originalPrice && (
              <p className="text-sm text-gray-500 line-through">
                Rs. {props.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        {/* scent/Variant Info */}
        {(() => {
          // Handle different scent data structures and separate combined scents
          let scents = [];
          
          if (props.scent) {
            if (Array.isArray(props.scent)) {
              scents = props.scent;
            } else if (typeof props.scent === 'string') {
              // Split combined scents like "RoseOad" into ["Rose", "Oud"]
              // Also handle cases like "RoseOud" or "VanillaLavender"
              scents = props.scent
                .split(/(?=[A-Z])/) // Split on capital letters
                .filter(s => s.trim()) // Remove empty strings
                .map(s => s.trim()); // Trim whitespace
            }
          }
          
          return scents.length > 0 && (
            <div className="mb-2">
              <p className="text-xs text-gray-600 mb-1">scents:</p>
              <div className="flex flex-wrap gap-1">
                {scents.map((scent, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gradient-to-r from-[#D4A574]/10 to-[#D4A574]/5 text-[#D4A574] text-xs rounded-full font-medium border border-[#D4A574]/30 hover:from-[#D4A574]/20 hover:to-[#D4A574]/10 transition-all duration-200 cursor-default"
                    title={`${scent.trim()} scent`}
                  >
                    {scent.trim()}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Candle Type */}
        {props.candleType && (
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-[#D4A574]/10 text-[#D4A574] text-xs rounded-full font-medium">
              {props.candleType}
            </span>
          </div>
        )}
      </div>

      {/* Quick View Button - Appears on Hover */}
      <div className={`absolute bottom-0 left-0 right-0 text-center transition-all duration-300 transform ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-white/95 backdrop-blur-sm rounded-b-xl">
          <button className="w-full py-3 bg-gradient-to-r from-[#D4A574] to-[#C08860] text-white font-medium hover:from-[#C08860] hover:to-[#D4A574] transition-all flex items-center justify-center gap-2 shadow-lg rounded-b-xl">
            <GiCandleFlame className="w-5 h-5" />
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
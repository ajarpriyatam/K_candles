import React from "react";

const Logo = ({ className, img, size = "default" }) => {
  const sizeClasses = {
    small: "text-xl",
    default: "text-3xl",
    large: "text-4xl"
  };

return (
  <div className={`relative ${className || ''}`}>
    <a
      href="/"
      className="group flex items-center hover:opacity-80 transition-all duration-300"
    >
      <div className="flex flex-col items-start">
        <div className="relative">
          <span className={`${sizeClasses[size]} font-serif font-bold text-black tracking-wide`} style={{ fontFamily: 'Georgia, serif' }}>
            <span className="relative inline-block">
              K
              <span className="absolute -top-1 -left-1 text-black transform rotate-12 scale-75 opacity-80">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M5 1C5 1 7.5 2.5 5 5C5 5 2.5 2.5 5 1Z"/>
                  <path d="M5 5C5 5 7.5 6.5 5 9C5 9 2.5 6.5 5 5Z"/>
                </svg>
              </span>
            </span>
            avéra
          </span>
        </div>
        {/* <span className={`${taglineClasses[size]} tracking-[0.15em] text-gray-700 font-light uppercase mt-1`}>
         Luxury
        </span> */}
      </div>
    </a>
  </div>
);
};

export default Logo;

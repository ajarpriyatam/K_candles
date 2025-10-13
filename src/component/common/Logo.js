import React from "react";
import { GiCandleFlame } from "react-icons/gi";

const Logo = ({ className, img }) => {
return (
  <div className="relative">
    <a
      href="/"
      className="group flex items-center gap-3 hover:opacity-80 transition-all duration-300"
    >
      <div className="relative">
        <GiCandleFlame className="h-12 w-12 text-[#FF8C42] transform group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute -inset-1 bg-[#FF8C42]/20 rounded-full blur-sm group-hover:bg-[#FF8C42]/30 transition-colors duration-300"></div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-[#FF8C42] to-[#FF6B35] bg-clip-text text-transparent">
          KAVERA
        </span>
        <span className="text-xs tracking-[0.2em] text-gray-600 font-light uppercase">
          Luxury Candles
        </span>
      </div>
    </a>
  </div>
);
};

export default Logo;

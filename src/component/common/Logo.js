import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ className, size = "default" }) => {
  const sizeClasses = {
    small: "h-8 w-auto",
    default: "h-12 w-auto",
    large: "h-16 w-auto"
  };

  return (
    <div className={`relative ${className || ''}`}>
      <Link
        to="/"
        className="group flex items-center hover:opacity-80 transition-all duration-300"
      >
        <img
          src="/logo.png"
          alt="KAVERA Logo"
          className={`${sizeClasses[size]} object-contain`}
        />
      </Link>
    </div>
  );
};

export default Logo;

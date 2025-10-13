import React, { useState } from "react";
import { GiCandleFlame } from "react-icons/gi";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Successfully subscribed! Check your email for 10% off code!");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section
      id="newsletter"
      className="w-full py-16 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#FF8C42]/30 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <GiCandleFlame className="w-16 h-16 text-[#FF8C42] animate-pulse" />
              <div className="absolute inset-0 bg-[#FF8C42]/20 blur-2xl rounded-full" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FF8C42] mb-4">
            Enjoy Exclusive Discounts
          </h2>
          
          <p className="text-center text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Enjoy <span className="text-[#FF6B35] font-bold">10% off</span> on your first purchase and be the first to know about offers, new releases, and latest stories.
          </p>

          {/* Subscribe Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FF8C42] transition-all duration-300"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-gradient-to-r from-[#FF8C42] to-[#FF6B35] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF8C42]/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {/* Additional Info */}
          <p className="text-center text-gray-500 text-sm mt-6">
            No spam, unsubscribe anytime!
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <div className="text-3xl mb-2">🎁</div>
              <p className="text-[#FF8C42] font-semibold text-sm">Exclusive Offers</p>
              <p className="text-gray-600 text-xs">Special deals for subscribers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🕯️</div>
              <p className="text-[#FF8C42] font-semibold text-sm">New Releases</p>
              <p className="text-gray-600 text-xs">Be first to know</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✨</div>
              <p className="text-[#FF8C42] font-semibold text-sm">Expert Tips</p>
              <p className="text-gray-600 text-xs">Candle care & styling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;


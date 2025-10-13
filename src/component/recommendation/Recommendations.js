import React, { useRef, useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction";

const Recommendation = () => {
  const dispatch = useDispatch();
  const productAll = useSelector((state) => state.products.products)
  const scrollContainerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("NEW ARRIVALS");
  
  const products = productAll ? productAll.filter(product => product.tokenId.startsWith('A')): [];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <section id="featured" className="w-full py-16 px-[5%] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-[32px] md:text-[44px] text-gray-900 font-bold mb-2">
            Featured Candles
          </h2>
          <p className="text-gray-600 text-base mb-6">
            Our universally agreed, most loved products
          </p>
          
          {/* Category Filters */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <button
                onClick={() => setSelectedCategory("NEW ARRIVALS")}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === "NEW ARRIVALS"
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                NEW ARRIVALS
              </button>
              <button
                onClick={() => setSelectedCategory("BEST SELLERS")}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === "BEST SELLERS"
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                BEST SELLERS
              </button>
            </div>
            
            <button className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 hover:bg-gray-50 transition-all duration-300">
              VIEW ALL
            </button>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg"
            aria-label="Scroll left"
          >
            <IoIosArrowBack className="text-gray-700 text-lg" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg"
            aria-label="Scroll right"
          >
            <IoIosArrowForward className="text-gray-700 text-lg" />
          </button>

          {/* Product Grid */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar px-12"
          >
            <div className="flex gap-6 pb-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex-none w-[280px]"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
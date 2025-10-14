import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import ProductCard from "../component/common/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../actions/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { products: allProducts, loading, error } = useSelector((state) => state.products)
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Category-specific hero content
  const getCategoryContent = (category) => {
    const categoryConfig = {
      "all": {
        title: "Our Collections",
        subtitle: "Discover luxury candles for every moment",
        image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg"
      },
      "All": {
        title: "Our Collections",
        subtitle: "Discover luxury candles for every moment",
        image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg"
      },
      "tlight": {
        title: "T-Light Candles",
        subtitle: "Perfect for meditation and ambiance",
        image: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg"
      },
      "jar": {
        title: "Jar & Container Candles",
        subtitle: "Long-lasting luxury scents",
        image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg"
      },
      "pillar": {
        title: "Pillar Candles",
        subtitle: "Classic elegance for any space",
        image: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg"
      },
      "giftsets": {
        title: "Aroma Gift Sets",
        subtitle: "Perfect gifts for loved ones",
        image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg"
      },
      "homedecor": {
        title: "Home Decor",
        subtitle: "Enhance your living space",
        image: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg"
      },
      "hvac": {
        title: "Intelligent Aroma Systems",
        subtitle: "HVAC & AHU Systems for Office Spaces & Luxury Homes",
        image: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg"
      },
      "humidifiers": {
        title: "Humidifiers",
        subtitle: "Maintain perfect humidity for your space",
        image: "https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg"
      },
      "rawmaterial": {
        title: "Raw Materials",
        subtitle: "Waxes, Wicks, Fragrances, Moulds & More",
        image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg"
      }
    };
    
    return categoryConfig[category] || categoryConfig["All"];
  };

  // Filter products based on selected category
  const filteredProducts = allProducts ? allProducts.filter((product) => {
    if (selectedCategory === "All" || selectedCategory === "all") return true;
    return product.category === selectedCategory;
  }) : [];

  const currentCategoryContent = getCategoryContent(selectedCategory);


  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // Update selectedCategory when URL changes
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }
  }, [category]);

  return (
    <Layout>
      {/* Hero Image Section - 40% of screen height */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img 
          src={currentCategoryContent.image}
          alt={`Kavéra ${currentCategoryContent.title}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{currentCategoryContent.title}</h1>
            <p className="text-lg md:text-xl opacity-90">{currentCategoryContent.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="my-[20px] mx-auto w-[80%] gap-4 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-beige">

        <div className="mt-[60px] mb-[60px] col-span-full">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#D4A574] border-t-transparent rounded-full animate-spin"></div>
                <div className="text-[#D4A574] text-lg">Loading candles...</div>
              </div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-[#BC2727] text-lg">Error: {error}</div>
            </div>
          ) : filteredProducts && filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product._id || index} {...product} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center py-20">
              <div className="text-gray-600 text-lg">No candles found in this category</div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
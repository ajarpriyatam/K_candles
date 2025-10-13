import React, { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import ProductCard from "../component/common/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../actions/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const { products: allProducts, loading, error } = useSelector((state) => state.products)
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts = allProducts ? allProducts.filter((product) => {
    if (selectedCategory === "All") return true;
    return product.category === selectedCategory;
  }) : [];

  // Category button component
  const CategoryButton = ({ name }) => (
    <span className="relative group">
      <span
        className={`text-sm font-medium cursor-pointer transition-all duration-300 ${selectedCategory === name
            ? "text-[#FF8C42]"
            : "text-gray-600 hover:text-[#FF8C42]"
          }`}
        onClick={() => setSelectedCategory(name)}
      >
        {name}
      </span>
      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FF8C42] transition-all duration-300 ${selectedCategory === name ? "w-full" : "w-0 group-hover:w-full"
        }`}></span>
    </span>
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Layout>
      <div className="my-[120px] mx-auto w-[80%] gap-4 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white">

        <div className="mt-[60px] col-span-full">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#FF8C42] border-t-transparent rounded-full animate-spin"></div>
                <div className="text-[#FF8C42] text-lg">Loading candles...</div>
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
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../actions/productAction";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const id = params.slug;
  const [selectedScent, setSelectedScent] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const cartData = useCart();
  const { addToCart } = cartData[2];
  const { product, loading, error } = useSelector((state) => state.productDetails);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  // Set default scent when product loads
  useEffect(() => {
    if (product?.scents && product.scents.length > 0) {
      setSelectedScent(product.scents[0]);
      setSelectedImageIndex(0); // Reset to first image when product changes
    }
    setQuantity(1); // Reset quantity when product changes
    // Product data loaded successfully
  }, [product]);


  const handleAddToCart = () => {
    if (!product?.scents) {
      toast.error("Product scents not available");
      return;
    }

    const cartItem = {
      id: product._id, // Single ID for the entire product
      productId: product._id,
      name: product.name,
      scents: product.scents, // All available scents
      selectedScent: selectedScent, // Selected scent
      price: product.price,
      quantity: quantity, // Selected quantity
      image: product.productImageGallery[selectedImageIndex]?.url || product.productImageGallery[selectedImageIndex],
      tokenId: product.tokenId,
    };

    addToCart(cartItem);
    toast.success("Added to cart successfully!");
  };

  const buyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  // Function to handle scent selection and update image
  const handleScentSelection = (scent) => {
    setSelectedScent(scent);
    
    // Find the index of the selected scent and update image accordingly
    if (product?.scents) {
      const scentIndex = product.scents.indexOf(scent);
      if (scentIndex !== -1) {
        setSelectedImageIndex(scentIndex);
      }
    }
  };

  // Quantity control functions
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const ScentButton = ({ scent }) => {
    return (
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border-2 ${
          selectedScent === scent
            ? "bg-[#FF8C42] text-white border-[#FF8C42] shadow-lg shadow-[#FF8C42]/30"
            : "bg-white text-gray-700 border-gray-300 hover:border-[#FF8C42]/50 hover:bg-gray-50"
        }`}
        onClick={() => handleScentSelection(scent)}
      >
        {scent}
      </button>
    );
  };

  // Show loading state
  if (loading) {
    return (
      <Layout>
        <div className="w-full py-16 bg-white mt-[67px]">
          <div className="max-w-7xl mx-auto px-[5%]">
            <div className="flex items-center justify-center h-64">
              <div className="text-[#FF8C42] text-xl">Loading product details...</div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Show error state
  if (error) {
    return (
      <Layout>
        <div className="w-full py-16 bg-white mt-[67px]">
          <div className="max-w-7xl mx-auto px-[5%]">
            <div className="flex items-center justify-center h-64">
              <div className="text-red-500 text-xl">Error: {error}</div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Show message if product is empty
  if (!product || Object.keys(product).length === 0) {
    return (
      <Layout>
        <div className="w-full py-16 bg-white mt-[67px]">
          <div className="max-w-7xl mx-auto px-[5%]">
            <div className="flex items-center justify-center h-64">
              <div className="text-gray-600 text-xl">Product not found</div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full py-16 bg-white mt-[67px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
          <div className="xl:w-1/2">
            {/* Product Images Display */}
            {product.productImageGallery && product.productImageGallery.length > 0 ? (
              <div className="space-y-4">
                {/* Main Image - Changes based on selected scent */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-gray-200">
                  <div className="min-h-[400px] flex items-center justify-center">
                    <img
                      src={product.productImageGallery[selectedImageIndex]?.url || product.productImageGallery[selectedImageIndex]}
                      alt={`${product.name} ${selectedScent}`}
                      className="max-w-full max-h-[500px] object-contain rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none'}} className="text-center text-gray-500">
                      <p>Main image failed to load</p>
                      <p className="text-xs">URL: {product.productImageGallery[selectedImageIndex]?.url || product.productImageGallery[selectedImageIndex]}</p>
                    </div>
                  </div>
                </div>

                {/* Remaining Images - 2 Column Grid (excluding currently selected main image) */}
                {product.productImageGallery.length > 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {product.productImageGallery
                      .filter((_, index) => index !== selectedImageIndex)
                      .map((img, index) => {
                        const originalIndex = product.productImageGallery.findIndex(item => item === img);
                        const scentName = product.scents[originalIndex] || `Image ${originalIndex + 1}`;
                        return (
                          <div key={originalIndex} className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-gray-200">
                            <div className="min-h-[200px] flex items-center justify-center">
                              <img
                                src={img.url || img}
                                alt={`${product.name} ${scentName}`}
                                className="max-w-full max-h-[250px] object-contain rounded-lg"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'block';
                                }}
                              />
                              <div style={{display: 'none'}} className="text-center text-gray-500">
                                <p>Image failed to load</p>
                                <p className="text-xs">URL: {img.url || img}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 text-center">
                <p className="text-gray-600">No images available for this product</p>
                <p className="text-xs text-gray-400 mt-2">productImageGallery: {JSON.stringify(product.productImageGallery)}</p>
              </div>
            )}
          </div>

          <div className="xl:w-1/2 px-4 sm:px-0">
            {/* Product Title and Price */}
            <div className="mb-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-[#FF8C42] text-2xl sm:text-3xl font-bold">
                  Rs. {product.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">
                  Inclusive of all taxes
                </p>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Shipping calculated at checkout.
              </p>
            </div>

            {/* Scent Selection */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-gray-900 mb-3 text-left">Scent</h5>
              <div className="flex flex-wrap gap-2">
                {product.scents && product.scents.map((scent) => (
                  <ScentButton key={scent} scent={scent} />
                ))}
              </div>
              {selectedScent && (
                <p className="text-xs text-gray-600 mt-2">
                  Selected: {selectedScent}
                </p>
              )}
            </div>

            {/* Quantity Selection */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-gray-900 mb-3 text-left">Quantity</h5>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseQuantity}
                  className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-[#FF8C42] hover:bg-[#FF8C42]/10 transition-all duration-300"
                  disabled={quantity <= 1}
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 h-10 text-center border-2 border-gray-300 rounded-lg focus:border-[#FF8C42] focus:outline-none"
                  min="1"
                  max="99"
                />
                
                <button
                  onClick={increaseQuantity}
                  className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-[#FF8C42] hover:bg-[#FF8C42]/10 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Total: Rs. {(product.price * quantity).toFixed(2)}
              </p>
            </div>


            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-14">
              <button 
                onClick={handleAddToCart}
                className="flex-1 py-4 px-6 border-2 border-[#FF8C42] text-[#FF8C42] hover:bg-[#FF8C42] hover:text-white transition-all duration-300 rounded-lg font-medium"
              >
                ADD TO CART
              </button>
              <button 
                onClick={buyNow}
                className="flex-1 py-4 px-6 bg-gradient-to-r from-[#FF8C42] to-[#FF6B35] text-white hover:opacity-90 transition-all duration-300 rounded-lg font-medium"
              >
                COMING SOON...
              </button>
            </div>

            {/* Security Badge */}
            <div className="flex justify-center sm:justify-start mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#FF8C42]/20 rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FF8C42]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Secure Payment</span>
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3 text-left">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

          </div>
        </div>
        </div>
      </div>
    </Layout>
  );

  // ...existing code...
};

export default ProductDetails;

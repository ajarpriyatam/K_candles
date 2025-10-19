import React, { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaCreditCard, 
  FaLock, 
  FaCheck,
  FaArrowLeft,
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaGift
} from "react-icons/fa";
import { MdLocalOffer, MdPayment } from "react-icons/md";
import toast from "react-hot-toast";

const OrderPage = () => {
  const [cart, setCart, cartContext] = useCart();
  const navigate = useNavigate();
  
  // Form states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    gstin: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod"
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 75;
  const total = subtotal + shipping;

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Order placed successfully!");
      setCart([]);
      navigate("/user/orders");
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Redirect if cart is empty (but allow direct checkout access)
  useEffect(() => {
    if (cart.length === 0) {
      // Instead of redirecting to cart, show empty state or allow direct checkout
      console.log("Cart is empty - allowing direct checkout access");
    }
  }, [cart, navigate]);

  // Show empty cart message instead of redirecting
  if (cart.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-[#FFF8F3] via-white to-[#FFF8F3] py-8 mt-[100px]">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Direct Checkout</h1>
              <p className="text-gray-600 mb-8">You can proceed with checkout even without items in cart.</p>
              <button 
                onClick={() => navigate("/")}
                className="bg-gradient-to-r from-[#D4A574] to-[#C08860] text-white py-3 px-8 rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <style jsx>{`
        select option:checked {
          background-color: #D4A574 !important;
          color: white !important;
        }
        select option:hover {
          background-color: #D4A574 !important;
          color: white !important;
        }
        select option:focus {
          background-color: #D4A574 !important;
          color: white !important;
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-b from-[#FFF8F3] via-white to-[#FFF8F3] py-8 mt-[100px]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <button 
                onClick={() => navigate("/cart")}
                className="flex items-center gap-2 text-[#D4A574] hover:text-[#C08860] transition-colors"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span className="font-medium">Back to Cart</span>
              </button>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#D4A574] to-[#C08860] bg-clip-text text-transparent">
              Complete Your Order
            </h1>
            <p className="text-gray-600 text-lg mt-2">
              Secure checkout with AuraDecor
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${currentStep >= 1 ? 'bg-[#D4A574] text-white' : 'bg-gray-200 text-gray-600'}`}>
                <FaUser className="w-4 h-4" />
                <span className="font-medium">Details</span>
              </div>
              <div className={`w-8 h-1 ${currentStep >= 2 ? 'bg-[#D4A574]' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${currentStep >= 2 ? 'bg-[#D4A574] text-white' : 'bg-gray-200 text-gray-600'}`}>
                <FaCreditCard className="w-4 h-4" />
                <span className="font-medium">Payment</span>
              </div>
              <div className={`w-8 h-1 ${currentStep >= 3 ? 'bg-[#D4A574]' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${currentStep >= 3 ? 'bg-[#D4A574] text-white' : 'bg-gray-200 text-gray-600'}`}>
                <FaCheck className="w-4 h-4" />
                <span className="font-medium">Confirm</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <FaUser className="text-[#D4A574]" />
                    Personal Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                        placeholder="Enter company name (optional)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        GSTIN
                      </label>
                      <input
                        type="text"
                        name="gstin"
                        value={formData.gstin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                        placeholder="Enter GSTIN (optional)"
                        maxLength="15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#D4A574]" />
                    Shipping Address
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                        placeholder="Enter your complete address"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-[#D4A574] transition-all bg-white text-gray-800"
                          style={{
                            accentColor: '#D4A574'
                          }}
                        >
                          <option value="">Select State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">Himachal Pradesh</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                          <option value="Ladakh">Ladakh</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all"
                          placeholder="123456"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <MdPayment className="text-[#D4A574]" />
                    Payment Method
                  </h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#D4A574] transition-all">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleInputChange}
                        className="mr-4 text-[#D4A574]"
                      />
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#D4A574]/10 rounded-full flex items-center justify-center">
                          <FaTruck className="text-[#D4A574]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Cash on Delivery</h3>
                          <p className="text-sm text-gray-600">Pay when your order arrives</p>
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#D4A574] transition-all">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={formData.paymentMethod === "online"}
                        onChange={handleInputChange}
                        className="mr-4 text-[#D4A574]"
                      />
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#D4A574]/10 rounded-full flex items-center justify-center">
                          <FaCreditCard className="text-[#D4A574]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Online Payment</h3>
                          <p className="text-sm text-gray-600">Credit/Debit card, UPI, Net Banking</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Place Order Button */}
                <div className="bg-gradient-to-r from-[#D4A574] to-[#C08860] rounded-2xl p-6">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-white text-[#D4A574] py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#D4A574]"></div>
                        Processing Order...
                      </>
                    ) : (
                      <>
                        <FaLock className="w-5 h-5" />
                        Place Order Securely
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#D4A574] to-[#C08860] bg-clip-text text-transparent flex items-center gap-3">
                  <FaShoppingBag className="text-[#D4A574]" />
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedScent}`} className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
                          {item.name}
                        </h3>
                        {item.selectedScent && (
                          <p className="text-xs text-gray-600 mt-1">
                            Scent: {item.selectedScent}
                          </p>
                        )}
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                          <span className="font-bold text-[#D4A574]">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center gap-2">
                      <FaTruck className="text-[#D4A574]" />
                      Shipping
                    </span>
                    <span className="font-semibold">
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">Total</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#D4A574] to-[#C08860] bg-clip-text text-transparent">
                        ₹{total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaShieldAlt className="text-[#D4A574]" />
                    <div>
                      <p className="text-sm font-medium">Secure Checkout</p>
                      <p className="text-xs">Your payment information is encrypted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderPage;

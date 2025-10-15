import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Image Section */}
      <div className="relative h-[40vh] w-full overflow-hidden mt-[25px] md:mt-[67px]">
        <img 
          src="https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg"
          alt="FAQ Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl opacity-90">
              If you have other burning questions we weren't able to address here, feel free to email us.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-[5%]">

        <div className="space-y-8">
          {/* Shipping, returns & payments */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-[#D4A574] mb-6">Shipping, returns & payments</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">1. How long is the order processing time?</h3>
                <p className="text-gray-600">We usually dispatch orders within 24 hours</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">2. How do I make an exchange or return?</h3>
                <p className="text-gray-600">Please visit our <Link to="/returns" className="text-[#D4A574] hover:underline">"Return & Exchange Policy"</Link> section</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">3. What kinds of payment methods do you accept?</h3>
                <p className="text-gray-600">Credit Card, Debit Card, Net Banking, UPI, PayPal, NEFT, Bank Transfer</p>
              </div>
            </div>
          </div>

          {/* Candles */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-[#D4A574] mb-6">Candles</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">1. Are scented candles 'triggers' for asthma or allergies?</h3>
                <p className="text-gray-600">
                  Although millions of people regularly use scented candles without any consequences, a particular fragrance may trigger a health hazard in a miniscule percentage of individuals. Individuals with a medical history to specific fragrances should avoid candles of those scents. In addition, one should burn all candles, whether scented or unscented, in a well-ventilated area.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">2. Are candles made with natural ingredients or essential oils safer?</h3>
                <p className="text-gray-600">
                  Not necessarily. However, KAVERA is committed to manufacture candles that use ingredients known to be safe and approved for use in candles, whether natural or synthesized.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">3. Why can't I smell my scented candle?</h3>
                <p className="text-gray-600">
                  This one question that tops our list, a lot of people complain that they can't smell the fragrance of the candle in their room. In order to feel the fragrance of a candle it must be lit for atleast 2 hours in a bedroom or bathroom. The throw of a candle will not be adequately felt if it is burnt for a lesser time or in too big of a room. If still the throw feels inadequate, try to burn it in room smaller than the existing one and then check the fragrance.
                </p>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-[#D4A574] mb-6">Account</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">1. Do you offer wholesale?</h3>
                <p className="text-gray-600">Yes! Please contact us over WhatsApp or any social media</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">2. Can I send a candle as a gift?</h3>
                <p className="text-gray-600">
                  Absolutely! The value of your affection should be properly conveyed by the gift and in order to make it perfect, you can also add a personalized note as well as add gift wrap to your order
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-[#D4A574] mb-4">Didn't find your answer?</h2>
          <p className="text-gray-600 mb-6">We are here to help you, so don't hesitate to contact us right now</p>
          <div className="flex justify-center">
            <a 
              href="mailto:Kaveraluxury@gmail.com" 
              className="bg-[#D4A574] text-white px-6 py-3 rounded-lg hover:bg-[#C08860] transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

      </div>
      </div>
    </Layout>
  );
};

export default FAQ;

import React from "react";
import Logo from "../component/common/Logo";
import SocialIcons from "../component/common/SocialIcons";
import {FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    // { name: "About Us", link: "/about" },
    { name: "FAQs", link: "/faq" },
    { name: "Return & Exchange Policy", link: "/returns" },
    { name: "Shipping & Cancellations", link: "/shipping" },
  ];

  const shopLinks = [
    { name: "New Arrivals", link: "/new-arrivals/collection" },
    { name: "Diwali Special", link: "/diwali-sale" },
    { name: "Gift Sets", link: "/giftsets/collection" },
    { name: "All Collections", link: "/all/collection" },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-beige via-[#F8F4E8] to-beige py-12 px-5 border-t-2 border-gray-200">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-6">
            <Logo size="small" />
            <p className="max-w-[280px] text-left text-gray-600 text-sm leading-relaxed">
              Luxury for every home. Stay one step ahead in the world of Aroma & Candles.
            </p>
            <div className="flex gap-3">
              {/* <SocialIcons
                to={"https://facebook.com"}
                icon={FaFacebookF}
                className="hover:!text-[#D4A574]"
              /> */}
              <SocialIcons
                to={"https://www.instagram.com/kavera_luxury/#"}
                icon={FaInstagram}
                className="hover:!text-[#D4A574]"
              />
              <SocialIcons
                to={"https://wa.me/918852822025"}
                icon={FaWhatsapp}
                className="hover:!text-[#D4A574]"
              />
              {/* <SocialIcons
                to={"https://youtube.com"}
                icon={FaYoutube}
                className="hover:!text-[#D4A574]"
              />
              <SocialIcons
                to={"https://pinterest.com"}
                icon={FaPinterest}
                .

                className="hover:!text-[#D4A574]"
              /> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg text-[#D4A574] font-semibold text-left">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-600 text-[14px] hover:text-[#D4A574] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg text-[#D4A574] font-semibold text-left">
              Shop
            </h3>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-600 text-[14px] hover:text-[#D4A574] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg text-[#D4A574] font-semibold text-left">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+91 88528 22025"
                  className="text-gray-600 text-[14px] hover:text-[#D4A574] transition-colors"
                >
                  P: +91 88528 22025
                </a>
              </li>
              <li>
                <a
                  href='mailto:Kaveraluxury@gmail.com'
                  className="text-gray-600 text-[14px] hover:text-[#D4A574] transition-colors break-all"
                >
                  E: Kaveraluxury@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918852822025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-[14px] hover:text-[#D4A574] transition-colors"
                >
                  W: +91 88528 22025
                </a>
              </li>
              {/* <li className="text-gray-600 text-[14px]">
                Shipping just Rs. 75 for orders upto Rs. 500!
              </li>
              <li className="text-gray-600 text-[14px]">
                COD Available for Orders up to Rs. 250!
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-[12px] text-center md:text-left">
              © 2025 KAVERA. All rights reserved.
            </p>
            <div className="flex gap-6 text-[12px]">
              <Link to="/privacy" className="text-gray-500 hover:text-[#D4A574] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-[#D4A574] transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund" className="text-gray-500 hover:text-[#D4A574] transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../component/common/Logo";
// import CButton from "../component/common/CButton";

const DrawerList = ({ activeNavItem, handleScroll }) => {
  const location = useLocation();
  return (
    <div className="bg-beige w-[18rem] h-screen border-l border-gray-200">
      <div className="flex justify-center items-center h-[73px] border-b border-gray-200">
        <Logo size="small" />
      </div>

      <div className="flex flex-col items-center justify-between h-full py-4 bg-beige">
        <ul className="flex flex-col items-center justify-center space-y-[30px]">
          <li>
            <Link
              to="/"
              className="flex items-center cursor-pointer group"
            >
              <span
                className={`text-[18px] font-medium leading-[22.5px] transition-colors duration-300 ${
                  location.pathname === "/"
                    ? "text-[#D4A574]"
                    : "text-gray-600 group-hover:text-[#D4A574]"
                }`}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/all/collection"
              className="flex items-center cursor-pointer group"
            >
              <span
                className={`text-[18px] font-medium leading-[22.5px] transition-colors duration-300 ${
                  location.pathname === "/all/collection"
                    ? "text-[#D4A574]"
                    : "text-gray-600 group-hover:text-[#D4A574]"
                }`}
              >
                Collections
              </span>
            </Link>
          </li>
          <li>
            <a
              href="#featured"
              className="flex items-center cursor-pointer group"
            >
              <span className="text-[18px] font-medium leading-[22.5px] transition-colors duration-300 text-gray-600 group-hover:text-[#D4A574]">
                New Arrivals
              </span>
            </a>
          </li>
          <li>
            <a
              href="#newsletter"
              className="flex items-center cursor-pointer group"
            >
              <span className="text-[18px] font-medium leading-[22.5px] transition-colors duration-300 text-gray-600 group-hover:text-[#D4A574]">
                Offers
              </span>
            </a>
          </li>
        </ul>

        {/* <div className="flex flex-col gap-5">
          <CButton
            name="Account"
            color="beige"
            url="https://admin.camppos.app/"
            textColor="#12141E"
            border="1px solid black"
          />
        </div> */}
      </div>
    </div>
  );
};

export default DrawerList;

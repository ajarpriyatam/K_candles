import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../component/common/Logo";
// import CButton from "../component/common/CButton";

const DrawerList = ({ activeNavItem, handleScroll }) => {
  const location = useLocation();
  return (
    <div className="bg-white w-[18rem] h-screen border-l border-gray-200">
      <div className="flex justify-center items-center h-[73px] border-b border-gray-200">
        <Logo />
      </div>

      <div className="flex flex-col items-center justify-between h-full py-4 bg-white">
        <ul className="flex flex-col  items-center justify-center space-y-[30px]">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname !== "/" && "hover:underline hover:text-[#FF8C42]"
              } flex items-center cursor-pointer`}
            >
              <span
                style={{
                  lineHeight: "22.5px",
                  fontWeight: "500",
                  fontSize: "18px",
                  color:
                    location.pathname === "/"
                      ? "#FF8C42"
                      : "#374151",
                }}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/all/collection"
              className={`${
                location.pathname !== "/all/collection" && "hover:underline hover:text-[#FF8C42]"
              } flex items-center cursor-pointer`}
            >
              <span
                style={{
                  lineHeight: "22.5px",
                  fontWeight: "500",
                  fontSize: "18px",
                  color:
                    location.pathname === "/all/collection"
                      ? "#FF8C42"
                      : "#374151",
                }}
              >
                Product
              </span>
            </Link>
          </li>
        </ul>

        {/* <div className="flex flex-col gap-5">
          <CButton
            name="Account"
            color="white"
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

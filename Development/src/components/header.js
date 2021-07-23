import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import Logo from "../asset/images/logo.svg";

function Header() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [navberShow, setNavberShow] = useState(false);

  return (
    <>
      {/* Mobile Version Navber Start */}
      {navberShow && (
        <div
          style={{ zIndex: "99" }}
          className="fixed h-screen w-full bg-black"
        >
          <div className="w-full lg:w-10/12">
            <div className="py-10 text-gray-50 flex justify-between items-center px-4 lg:px-0">
              <span className="text-2xl cursor-pointer px-1 font-bold text-yellow-500">
                <img
                  style={{ maxWidth: "65%", height: "auto" }}
                  src={Logo}
                  alt="logo"
                />
              </span>
              <span
                onClick={() => setNavberShow(false)}
                className="block lg:hidden"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="text-gray-100 px-4 space-y-4 text-xl">
              <div className="w-1/2">
                <span
                  onClick={() => {
                    history.push("/");
                  }}
                  className={`${
                    pathname === "/"
                      ? "border-yellow-500"
                      : "border-transparent"
                  } cursor-pointer border-b-2 cursor-pointer hover:border-opacity-100 hover:border-yellow-500 pb-2 `}
                >
                  Home
                </span>
              </div>
              <div>
                <span
                  onClick={() => {
                    history.push("/services");
                  }}
                  className={`${
                    pathname === "/services"
                      ? "border-yellow-500"
                      : "border-transparent"
                  } cursor-pointer border-b-2 hover:border-opacity-100 hover:border-yellow-500 pb-2 `}
                >
                  Services
                </span>
              </div>
              <div>
                <span
                  onClick={() => {
                    history.push("/portfolio");
                  }}
                  className={`${
                    pathname === "/portfolio"
                      ? "border-yellow-500"
                      : "border-transparent"
                  } cursor-pointer border-b-2 hover:border-opacity-100 hover:border-yellow-500 pb-2 `}
                >
                  Portfolio
                </span>
              </div>
              <div>
                <span
                  onClick={() => {
                    history.push("/blog");
                  }}
                  className={`${
                    pathname === "/blog"
                      ? "border-yellow-500"
                      : "border-transparent"
                  } cursor-pointer border-b-2 hover:border-opacity-100 hover:border-yellow-500 pb-2 `}
                >
                  Blog
                </span>
              </div>
              <div>
                <span
                  onClick={() => {
                    history.push("/contactus");
                  }}
                  className={`${
                    pathname === "/contactus"
                      ? "border-yellow-500"
                      : "border-transparent"
                  } cursor-pointer border-b-2 hover:border-opacity-100 hover:border-yellow-500 pb-2 `}
                >
                  Contact Us
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Mobile Version Navber End */}

      {/* Web Version Navber Start */}
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div className="w-full lg:w-10/12">
          <div className="py-10 text-gray-50 flex justify-between items-center px-4 lg:px-0">
            <span
              onClick={() => history.push("/")}
              className="text-2xl px-1  font-bold text-yellow-500"
            >
              <img
                className="cursor-pointer"
                style={{ maxWidth: "65%", height: "auto" }}
                src={Logo}
                alt="logo"
              />
            </span>
            <span
              onClick={() => setNavberShow(true)}
              className="block lg:hidden"
            >
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div className="hidden lg:block space-x-16 font-semibold flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <span
                onClick={() => {
                  history.push("/");
                }}
                className={`${
                  pathname === "/" ? "border-yellow-500" : "border-transparent"
                } cursor-pointer border-b-2 hover:border-opacity-100 hover:border-yellow-500 pb-2 `}
              >
                Home
              </span>
              <span
                onClick={() => {
                  history.push("/services");
                }}
                className={`${
                  pathname === "/services"
                    ? "border-yellow-500"
                    : "border-transparent"
                } cursor-pointer border-b-2 hover:border-opacity-100 hover:border-yellow-500 pb-2 `}
              >
                Services
              </span>
              <span
                onClick={() => {
                  history.push("/portfolio");
                }}
                className={`${
                  pathname === "/portfolio"
                    ? "border-yellow-500"
                    : "border-transparent"
                } cursor-pointer border-b-2 hover:border-opacity-100 hover:border-yellow-500 pb-2 `}
              >
                Portfolio
              </span>
              <span
                onClick={() => {
                  history.push("/blog");
                }}
                className={`${
                  pathname === "/blog"
                    ? "border-yellow-500"
                    : "border-transparent"
                } cursor-pointer border-b-2 hover:border-opacity-100 hover:border-yellow-500 pb-2 `}
              >
                Blog
              </span>
              <span
                onClick={() => {
                  history.push("/contactus");
                }}
                className={`${
                  pathname === "/contactus"
                    ? "border-yellow-500"
                    : "border-transparent"
                } cursor-pointer border-b-2 hover:border-opacity-100 hover:border-yellow-500 pb-2 `}
              >
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Web Version Navber End */}
    </>
  );
}

export default Header;

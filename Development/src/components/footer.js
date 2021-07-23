/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router";
import Logo from "../asset/images/logo.svg";

// Get Current getFullYear
const CurrentDateTime = new Date();
const year = CurrentDateTime.getFullYear();

function Footer() {
  const history = useHistory();

  const useFulLink = [
    { link: "/", name: "Home" },
    { link: "/services", name: "Services" },
    { link: "/portfolio", name: "Portfolio" },
  ];
  const accountInfoLink = [
    { link: "/contactus", name: "Contact Us" },
    { link: "/blog", name: "Blog" },
  ];

  return (
    <>
      <div className="flex border-gray-600 justify-center flex-col items-center text-gray-100">
        <div className="border-b flex justify-center border-gray-800 w-full pb-8">
          <div className="w-11/12 lg:w-10/12 space-y-4 lg:space-y-0 lg:flex">
            <div className="w-full lg:w-5/12">
              <div className="mb-4">
                <span className="text-2xl px-1 font-bold text-yellow-500">
                  <img
                    style={{ maxWidth: "65%", height: "50px" }}
                    src={Logo}
                    alt="logo"
                  />
                </span>
              </div>
              <p className="mb-4 pr-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry the joler form not fale ronment. Lorem Ipsum is simply
                dummy
              </p>
              <div className="font-semibold text-lg">Social network</div>
              <div className="flex space-x-2 mt-4">
                <div
                  onClick={() => window.open("https://www.facebook.com/")}
                  style={{ background: "#444446" }}
                  className="w-6 h-6 cursor-pointer flex justify-center items-center p-6 rounded-full"
                >
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div
                  onClick={() => window.open("https://www.instagram.com/")}
                  style={{ background: "#444446" }}
                  className="w-6 h-6 cursor-pointer flex justify-center items-center p-6 rounded-full"
                >
                  <i className="fab fa-instagram"></i>
                </div>
                <div
                  onClick={() => window.open("https://www.linkedin.com/")}
                  style={{ background: "#444446" }}
                  className="w-6 h-6 cursor-pointer flex justify-center items-center p-6 rounded-full"
                >
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="w-full lg:flex">
                <div className="w-1/2">
                  <div className="font-semibold text-lg mb-2">Useful Links</div>
                  {useFulLink?.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <span
                        onClick={() => {
                          history.push(item?.link);
                        }}
                        className="flex items-center cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4 text-yellow-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item?.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-1/2 lg:ml-48">
                  <div className="font-semibold text-lg mb-2">Account Info</div>
                  {accountInfoLink?.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <span
                        onClick={() => {
                          history.push(item?.link);
                        }}
                        className="flex items-center cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4 text-yellow-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item?.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="font-semibold text-lg mt-4">
                Subscribe newsletter
              </div>
              <div
                style={{ background: "#444446" }}
                className="mt-4 overflow-hidden flex justify-between rounded-full"
              >
                <input
                  style={{ background: "#444446" }}
                  className="w-2/3 lg:w-2/3 focus:outline-none pl-4 lg:pl-8 text-gray-100"
                  type="text"
                  placeholder="Your email address"
                />
                <button
                  type="button"
                  className=" w-1/3 lg:w-1/3 py-2 uppercase focus:outline-none rounded-full bg-yellow-500 lg:py-4 lg:px-8"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 lg:w-10/12 flex space-y-2 lg:space-y-0 flex-col lg:flex-row lg:justify-between lg:items-center py-4">
          <span>© {year} Virtual Tour, All Rights Reserved</span>
          <span>Privacy Policy</span>
        </div>
        <div className="text-xs text-center w-full pb-2">
          <a href="https://twitter.com/hasan_py">Develop | Hasan-py</a>
        </div>
      </div>
    </>
  );
}

export default Footer;

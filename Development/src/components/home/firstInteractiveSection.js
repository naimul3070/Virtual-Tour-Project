/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function FirstInteractiveSection() {
  return (
    <>
      <div className="flex flex-col h-screen lg:flex-row lg:justify-center px-4 lg:px-0">
        <div className="lg:mt-24 flex flex-col text-gray-50 lg:w-10/12 lg:flex lg:flex-row transparent-card-background rounded-lg overflow-hidden h-106 lg:h-100">
          <div className="order-2  lg:order-1 lg:flex lg:flex-col lg:justify-center space-y-6 lg:w-1/2 lg:py-24 lg:px-16 p-4">
            <span className="text-2xl lg:text-3xl text-yellow-500 font-semibold">
              The first interactive visits
            </span>
            <p className="text-md lg:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the joler form not fale ronment.
            </p>
            <div className="flex">
              <span className="cursor-pointer flex text-yellow-500 py-2 px-4 border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-700 ease-in-out uppercase">
                Visit The Tour
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            {/* <img
              className="w-full h-full object-cover object-center"
              src={
                "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            /> */}
            <iframe
              src="https://protovirtuelhost.s3.eu-west-3.amazonaws.com/VisiteVirtuelleAngelo/index.html"
              className="w-full h-64 lg:h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstInteractiveSection;

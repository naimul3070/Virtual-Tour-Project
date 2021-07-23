/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function OurBenifitsSection() {
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="text-center pt-8 lg:pt-0 lg:w-10/12">
          <span className="uppercase text-3xl text-gray-50 tracking-wide font-bold">
            Our Benifits
          </span>
        </div>
        <div className="flex justify-center pt-4 pb-8">
          <span className="border-b-4 w-16 border-yellow-500"></span>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-3 space-y-8 lg:space-y-0">
          <div className="col-span-1 mx-4 flex flex-col justify-center items-center text-gray-50 px-6 py-8 rounded-4xl w-72 lg:w-80 h-80 transparent-card-background-benifits">
            <div className="flex">
              <span className="bg-gray-600 p-4 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-4 text-2xl font-semibold">High Quality</div>
            <p className="text-center mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the joler form not fale ronment. Lorem Ipsum is simply
              dummy
            </p>
          </div>
          <div className="col-span-1 mx-4 flex flex-col justify-center items-center text-gray-50 px-6 py-8 rounded-4xl w-72 lg:w-80 h-80 transparent-card-background-benifits">
            <div className="flex">
              <span className="bg-gray-600 p-4 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-4 text-2xl font-semibold">Full Interactive</div>
            <p className="text-center mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the joler form not fale ronment. Lorem Ipsum is simply
              dummy
            </p>
          </div>
          <div className="col-span-1 mx-4 flex flex-col justify-center items-center text-gray-50 px-6 py-8 rounded-4xl w-72 lg:w-80 h-80 transparent-card-background-benifits">
            <div className="flex">
              <span className="bg-gray-600 p-4 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-4 text-2xl font-semibold">Technical Support</div>
            <p className="text-center mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the joler form not fale ronment. Lorem Ipsum is simply
              dummy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurBenifitsSection;

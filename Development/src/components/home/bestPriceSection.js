/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router";

function BestPriceSection() {
  const history = useHistory();

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="text-center lg:w-10/12">
          <span className="uppercase text-gray-800 text-3xl text-gray-800 tracking-wide font-bold">
            Find The Best Price
          </span>
        </div>
        <div className="flex justify-center pt-4 pb-8">
          <span className="border-b-4 w-16 border-yellow-500"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
          <div className="col-span-1 service text-gray-800  px-6 py-8 rounded w-72 lg:w-80 h-96 cursor-pointer transition duration-500 ease-in-out space-y-6">
            <div className="text-yellow-500 font-bold text-4xl text-center">
              100$
            </div>
            <div className="mt-4 text-xl font-semibold uppercase text-center">
              Standard Pack
            </div>
            <div>Up to 100 squareas of area</div>
            <div>5 concept change</div>
            <div>1 years of technical support</div>
            <div>
              <span
                onClick={() => history.push("/services")}
                className="cursor-pointer text-yellow-500 py-2 px-4 border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-700 ease-in-out uppercase"
              >
                Get The Pack
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden col-span-1 service text-gray-800  px-6 py-8 rounded w-72 lg:w-80 h-96 cursor-pointer transition shadow-2xl duration-500 ease-in-out space-y-6">
            <div className="text-yellow-500 font-bold text-4xl text-center">
              500$
            </div>
            <div className="mt-4 text-xl font-semibold uppercase text-center">
              Premium Pack
            </div>
            <div>Up to 100 squareas of area</div>
            <div>5 concept change</div>
            <div>1 years of technical support</div>
            <div>
              <span
                onClick={() => history.push("/services")}
                className="cursor-pointer text-yellow-500 py-2 px-4 border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-700 ease-in-out uppercase"
              >
                Get The Pack
              </span>
            </div>
            <div className="premium-pack bg-yellow-500 text-white px-4 py-1 text-xs font-semibold uppercase">
              Most Premium
            </div>
          </div>
          <div className="col-span-1 service text-gray-800  px-6 py-8 rounded w-72 lg:w-80 h-96 cursor-pointer transition duration-500 ease-in-out space-y-6">
            <div className="text-yellow-500 font-bold text-4xl text-center">
              200$
            </div>
            <div className="mt-4 text-xl font-semibold uppercase text-center">
              Gold Pack
            </div>
            <div>Up to 100 squareas of area</div>
            <div>5 concept change</div>
            <div>1 years of technical support</div>
            <div>
              <span
                onClick={() => history.push("/services")}
                className="cursor-pointer text-yellow-500 py-2 px-4 border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-700 ease-in-out uppercase"
              >
                Get The Pack
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestPriceSection;

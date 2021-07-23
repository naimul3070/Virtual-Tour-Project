/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router";

function ServicesSection() {
  const history = useHistory();

  return (
    <>
      <div className="flex justify-center flex-col items-center flex-grow">
        <div className="text-center lg:w-10/12">
          <span className="uppercase text-gray-800 text-3xl text-gray-800 tracking-wide font-bold">
            Services
          </span>
        </div>
        <div className="flex justify-center pt-4">
          <span className="border-b-4 w-16 border-yellow-500"></span>
        </div>
        <p className="text-center p-8 lg:px-48 lg:py-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry the joler form not fale ronment. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry the joler form not fale
          ronment
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 h-full text-center">
          <div className="col-span-1 service text-gray-800  px-6 py-8 rounded w-72 lg:w-80 cursor-pointer transition duration-500 ease-in-out space-y-6">
            <img
              className="w-full h-52 rounded object-cover object-center"
              src={
                "https://images.unsplash.com/photo-1572297259518-0974576b6738?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              alt="images"
            />
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

          <div className="col-span-1 service text-gray-800  px-6 py-8 rounded w-72 lg:w-80  cursor-pointer transition duration-500 ease-in-out space-y-6">
            <img
              className="w-full h-52 rounded object-cover object-center"
              src={
                "https://images.unsplash.com/photo-1572297259518-0974576b6738?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              alt="images"
            />
            <div className="text-yellow-500 font-bold text-4xl text-center">
              200$
            </div>
            <div className="mt-4 text-xl font-semibold uppercase text-center">
              Gold Pack
            </div>
            <div>Up to 200 squareas of area</div>
            <div>10 concept change</div>
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

          <div className="col-span-1 service text-gray-800  px-6 py-8 rounded w-72 lg:w-80  cursor-pointer transition duration-500 ease-in-out space-y-6">
            <div className="relative overflow-hidden service-image">
              <img
                className="w-full h-52 rounded object-cover object-center"
                src={
                  "https://images.unsplash.com/photo-1572297259518-0974576b6738?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
                alt="images"
              />
              <div className="premium-pack-image-card bg-yellow-500 text-white px-4 py-1 text-xs font-semibold uppercase">
                Most Popular
              </div>
            </div>
            <div className="text-yellow-500 font-bold text-4xl text-center">
              500$
            </div>
            <div className="mt-4 text-xl font-semibold uppercase text-center">
              Premium Pack
            </div>
            <div>Up to 300 squareas of area</div>
            <div>Unlimited concept change</div>
            <div>2 years of technical support</div>
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

export default ServicesSection;

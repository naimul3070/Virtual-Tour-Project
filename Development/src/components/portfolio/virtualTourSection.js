import React from "react";

function VirtualTourSection() {
  return (
    <div>
      <div className="flex flex-col space-y-6 text-gray-100 pb-12">
        <div className="text-2xl mt-8 text-center lg:text-3xl lg:text-4xl uppercase font-bold">
          Virtual Tour Portfolio Page
        </div>
        <div className="flex w-full justify-center">
          <span className="border-b-4 w-16 border-yellow-500"></span>
        </div>

        <div className="flex justify-center text-center">
          <div className="w-full px-2 lg:w-10/12">
            <div
              style={{ background: "rgba(55, 65, 81, 0.6)" }}
              className="grid grid-cols-3 rounded-2xl"
            >
              <div className="col-span-1">
                <div className="flex flex-col justify-center items-center space-y-2 border-r my-4 lg:my-8">
                  <span className="text-md lg:text-4xl font-bold"> 200+ </span>
                  <span className="text-xs lg:text-lg">Projects Complete</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col justify-center items-center space-y-2 border-r my-4 lg:my-8">
                  <span className="text-md lg:text-4xl font-bold"> 10+ </span>
                  <span className="text-xs lg:text-lg">Years experience </span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col justify-center items-center space-y-2 my-4 lg:my-8">
                  <span className="text-md lg:text-4xl font-bold"> 72+ </span>
                  <span className="text-xs lg:text-lg">Happy clinets </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualTourSection;

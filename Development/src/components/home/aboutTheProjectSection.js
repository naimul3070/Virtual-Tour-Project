/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function AboutTheProjectSection() {
  return (
    <>
      <div className="flex flex-col lg:my-12 lg:flex-row lg:justify-center lg:items-center">
        <div className="text-gray-800 lg:w-10/12 px-4 lg:px-0 flex flex-col lg:flex-row rounded-lg overflow-hidden">
          <div className="flex flex-col space-y-6 lg:w-1/2">
            <span className="text-2xl lg:text-3xl lg:text-4xl uppercase font-bold">
              About The Project
            </span>
            <div className="flex">
              <span className="border-b-4 w-16 border-yellow-500"></span>
            </div>
            <p className="pb-4 lg:pb-12 lg:pr-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the joler form not fale ronment. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry the joler form
              not fale ronment. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry the joler form not fale ronment. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry the joler form not fale ronment. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry the joler form
              not fale ronment.
            </p>
          </div>
          <div className="lg:w-1/2">
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

export default AboutTheProjectSection;

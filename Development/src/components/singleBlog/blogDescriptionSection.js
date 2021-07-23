import React from "react";
import { useLocation } from "react-router";

function BlogDescriptionSection({ title }) {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="w-11/12 lg:w-10/12">
      <div className="flex justify-center">
        <img
          className="cursor-pointer w-full lg:w-1/2 h-72 lg:h-96 object-cover object-center"
          src={state?.thumbnail}
          alt="blogPic"
        />
      </div>
      <div className="p-4 lg:p-8 text-center">
        <div className="font-light">{state?.date}</div>
        <div className="cursor-pointer text-2xl my-6 font-bold">
          {state?.title}
        </div>
        <p className="leading-8 cursor-pointer">{state?.projectDescription}</p>
      </div>
    </div>
  );
}

export default BlogDescriptionSection;

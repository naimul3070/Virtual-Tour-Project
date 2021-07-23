import React from "react";
import { useHistory } from "react-router";

function SingleGridCard({ blogItem, index }) {
  const history = useHistory();

  return (
    <div
      onClick={() => {
        history.push({
          pathname: blogItem?.blogLink,
          state: blogItem,
        });
      }}
      className="col-span-1 p-4"
      key={index}
    >
      <img
        className="cursor-pointer w-full h-64 object-cover object-center"
        src={blogItem?.thumbnail}
        alt="cardImage"
      />
      <div className="font-light mt-4 mb-2">{blogItem?.date}</div>
      <div className="text-lg font-bold leading-5 cursor-pointer">
        {blogItem?.title}
      </div>
    </div>
  );
}

export default SingleGridCard;

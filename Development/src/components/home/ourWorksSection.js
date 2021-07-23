/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useHistory } from "react-router";

// Minimun 3 Image Required For Dynamic if not 3 image then it will not work!!
const imagesDataset = [
  {
    id: 1,
    link: "https://images.unsplash.com/photo-1618222104927-33e0bd5f8dae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  },
  {
    id: 2,
    link: "https://images.unsplash.com/photo-1616137303871-05ce745f9cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  },
  {
    id: 3,
    link: "https://images.unsplash.com/photo-1572297259518-0974576b6738?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 4,
    link: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    link: "https://images.unsplash.com/photo-1579487789126-05d28715a625?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg2fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

function OurWorksSection() {
  const history = useHistory();

  const [currentImage, setCurrentImage] = useState(1);

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="text-center pt-8 lg:pt-0 lg:w-10/12">
          <span className="uppercase text-3xl text-gray-50 tracking-wide font-bold">
            Our Works
          </span>
        </div>
        <div className="flex justify-center pt-4 pb-8">
          <span className="border-b-4 w-16 border-yellow-500"></span>
        </div>
        <div className="px-4 lg:px-0 grid flex items-center grid-col-1 lg:grid-cols-12 space-y-8 lg:space-y-0">
          <div className="hidden lg:block lg:relative lg:flex lg:items-center lg:justify-center col-span-2 w-106 h-100 overflow-hidden bg-black">
            <img
              style={{ opacity: 0.45 }}
              className="w-full h-full object-cover object-center"
              src={
                currentImage === 0
                  ? imagesDataset[imagesDataset.length - 1]?.link
                  : imagesDataset[currentImage - 1]?.link
              }
              alt="images"
            />

            <span
              onClick={() => {
                if (currentImage === 0) {
                  setCurrentImage(imagesDataset.length - 1);
                } else {
                  setCurrentImage(currentImage - 1);
                }
              }}
              className="absolute cursor-pointer p-2 border-2 rounded-full border-gray-100"
            >
              <svg
                className="w-6 h-6 text-gray-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          <div className="col-span-12 lg:col-span-8 rounded w-106 h-112 overflow-hidden">
            <img
              className="w-full h-full relative object-cover object-center"
              src={imagesDataset[currentImage]?.link}
              alt="images"
            />
          </div>

          <div className="hidden lg:block lg:relative lg:flex lg:items-center lg:justify-center col-span-2 w-106 h-100 overflow-hidden bg-black">
            <img
              style={{ opacity: 0.45 }}
              className="w-full h-full object-cover object-center"
              src={
                currentImage === imagesDataset?.length - 1
                  ? imagesDataset[0]?.link
                  : imagesDataset[currentImage + 1]?.link
              }
              alt="images"
            />

            <span
              onClick={() => {
                if (currentImage === imagesDataset.length - 1) {
                  setCurrentImage(0);
                } else {
                  setCurrentImage(currentImage + 1);
                }
              }}
              className="absolute cursor-pointer p-2 border-2 rounded-full border-gray-100"
            >
              <svg
                className="w-6 h-6 text-gray-100"
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
            </span>
          </div>
        </div>

        <div className="bg-white w-full pt-32 pb-12 px-4 lg:px-64 -mt-24">
          <div className="uppercase text-center text-2xl font-bold mb-4">
            Projects Name
          </div>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry the joler form not fale ronment. Lorem Ipsum is simply
            dummy
          </p>
          <div className="flex space-x-2 justify-center items-center my-4">
            {imagesDataset?.map((item, index) => (
              <div
                className={` ${
                  currentImage === index
                    ? "w-4 h-2 bg-gray-900 rounded-full "
                    : "w-2 h-2 bg-gray-300 rounded-full"
                }`}
              ></div>
            ))}
          </div>
          <div className="flex justify-center">
            <span className="cursor-pointer uppercase text-sm flex justify-center items-center text-gray-100 py-2 px-4 bg-black rounded-full">
              <span onClick={() => history.push("/portfolio")}>View More</span>
              <span>
                <svg
                  className="w-4 h-4"
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
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWorksSection;

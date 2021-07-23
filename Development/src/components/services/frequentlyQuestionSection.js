/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { firstColRawData, secondColRawData } from "./questionDataset";

/* 

  For Set Static Data | Please go to the questionDataset.js file in this directory
  You can change Data and arrange it with 2 columns! 
  Just keep isCollapse field Initialy false

*/

const PlusIcon = ({ onClick }) => {
  return (
    <span onClick={onClick} className="text-xl ml-2">
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

const MinusIcon = ({ onClick }) => {
  return (
    <span onClick={onClick} className="text-xl ml-2">
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

function FrequentlyQuestionSection() {
  const [firstColumnData, setfirstColumnData] = useState([]);
  const [secondColumnData, setSecondColumnData] = useState([]);

  const collapseHandler = (column, index) => {
    let copy = [
      ...firstColumnData?.map((item) => {
        return {
          ...item,
          isCollapse: false,
        };
      }),
    ];
    let copy2 = [
      ...secondColumnData?.map((item) => {
        return {
          ...item,
          isCollapse: false,
        };
      }),
    ];
    if (column === 1) {
      copy[index].isCollapse = !firstColumnData[index].isCollapse;
    } else if (column === 2) {
      copy2[index].isCollapse = !secondColumnData[index].isCollapse;
    }
    setfirstColumnData(copy);
    setSecondColumnData(copy2);
  };

  useEffect(() => {
    setfirstColumnData(firstColRawData);
    setSecondColumnData(secondColRawData);
  }, []);

  return (
    <>
      <div className="flex justify-center flex-col items-center flex-grow">
        <div className="text-center lg:w-10/12">
          <span className="uppercase text-gray-800 text-3xl text-gray-800 tracking-wide font-bold">
            Frequently Asked Questions
          </span>
        </div>
        <div className="flex justify-center pt-4 mb-8">
          <span className="border-b-4 w-16 border-yellow-500"></span>
        </div>

        <div className="w-full px-4 lg:px-0 lg:w-10/12 lg:flex text-gray-100">
          <div className="w-full lg:w-1/2 mr-4">
            {firstColumnData?.map((item, index) => (
              <div
                key={index}
                className="rounded-lg my-4 flex-auto bg-gray-200 overflow-hidden"
              >
                <div className="bg-gray-900 px-6 py-4 flex items-center rounded-lg cursor-pointer">
                  <span>{item?.question}</span>
                  {item?.isCollapse ? (
                    <MinusIcon onClick={() => collapseHandler(1, index)} />
                  ) : (
                    <PlusIcon onClick={() => collapseHandler(1, index)} />
                  )}
                </div>
                {item?.isCollapse && (
                  <div className="text-gray-800 px-4 py-2">{item?.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 mr-4">
            {secondColumnData?.map((item, index) => (
              <div
                key={index}
                className="rounded-lg my-4 flex-auto bg-gray-200 overflow-hidden"
              >
                <div className="bg-gray-900 px-6 py-4 flex items-center rounded-lg cursor-pointer">
                  <span>{item?.question}</span>
                  {item?.isCollapse ? (
                    <MinusIcon onClick={() => collapseHandler(2, index)} />
                  ) : (
                    <PlusIcon onClick={() => collapseHandler(2, index)} />
                  )}
                </div>
                {item?.isCollapse && (
                  <div className="text-gray-800 px-4 py-2">{item?.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FrequentlyQuestionSection;

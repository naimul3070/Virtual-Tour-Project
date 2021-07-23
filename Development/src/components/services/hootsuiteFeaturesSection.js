/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function HootsuiteFeaturesSection() {
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="text-center pt-8 lg:pt-0 lg:w-10/12">
          <span className="uppercase text-3xl text-gray-50 tracking-wide font-bold">
            Compare Hootsuite Features
          </span>
        </div>
        <div className="flex justify-center pt-4 mb-16">
          <span className="border-b-4 w-16 border-yellow-500"></span>
        </div>
      </div>

      <div className="flex justify-center text-gray-100 pb-16">
        <div className="w-10/12 overflow-hidden rounded-2xl overflow-x-auto">
          <table className="w-full table-hootsuiteFeaturesSection">
            <tr>
              <th className="table-th-background-high-opacity">
                Name of Package
              </th>
              <th className="table-th-left-border table-th-background-low-opacity">
                Standard Pack
              </th>
              <th className="table-th-left-border table-th-background-low-opacity">
                Gold Pack
              </th>
              <th className="table-th-background-low-opacity">Premium Pack</th>
            </tr>
            <tr>
              <th className="table-th-background-high-opacity">
                Quality of Image
              </th>
              <th className="table-th-left-border table-th-background-high-opacity">
                Good Quality
              </th>
              <th className="table-th-left-border table-th-background-high-opacity">
                Best Quality
              </th>
              <th className="table-th-background-high-opacity">Best Quality</th>
            </tr>
            <tr>
              <th className="table-th-background-high-opacity">Decoration</th>
              <th className="table-th-left-border table-th-background-low-opacity">
                20+ unique assets
              </th>
              <th className="table-th-left-border table-th-background-low-opacity">
                40+ unique assets
              </th>
              <th className="table-th-background-low-opacity">
                60+ unique assets
              </th>
            </tr>
            <tr>
              <th className="table-th-background-high-opacity">Revisions</th>
              <th className="table-th-left-border table-th-background-high-opacity">
                5 Revisions
              </th>
              <th className="table-th-left-border table-th-background-high-opacity">
                10 Revisions
              </th>
              <th className="table-th-background-high-opacity">
                Unlimited Revisions
              </th>
            </tr>
            <tr>
              <th className="table-th-background-high-opacity">
                Technical Support
              </th>
              {[...Array(3)]?.map((item, key) => (
                <th
                  className={`${
                    key < 2 && "table-th-left-border"
                  } table-th-background-low-opacity`}
                  key={key}
                >
                  <div className="flex justify-center">
                    <span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="table-th-background-high-opacity">
                Time to release the project
              </th>
              <th className="table-th-left-border table-th-background-high-opacity">
                3 Month
              </th>
              <th className="table-th-left-border table-th-background-high-opacity">
                2 Month
              </th>
              <th className="table-th-background-high-opacity">1 Month</th>
            </tr>
            <tr>
              <th className="table-th-background-high-opacity">
                Website integration
              </th>
              {[...Array(3)]?.map((item, key) => (
                <th
                  className={`${
                    key < 2 && "table-th-left-border"
                  } table-th-background-low-opacity`}
                  key={key}
                >
                  <div className="flex justify-center">
                    <span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default HootsuiteFeaturesSection;

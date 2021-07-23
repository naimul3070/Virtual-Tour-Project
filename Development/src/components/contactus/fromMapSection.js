import React from "react";

function FromMapSection() {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 lg:w-10/12">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="col-span-1 mb-8 mx-2">
                <div className="w-full flex flex-col lg:space-y-2">
                  <label className="font-bold text-lg">Name and Surename</label>
                  <input
                    placeholder="Jhon"
                    type="text"
                    className="px-4 py-3 border border-gray-400 focus:outline-none rounded"
                  />
                </div>
              </div>
              <div className="col-span-1 mb-8 mx-2">
                <div className="w-full flex flex-col lg:space-y-2">
                  <label className="font-bold text-lg">Theme</label>
                  <input
                    placeholder="Cooperation"
                    type="text"
                    className="px-4 py-3 border border-gray-400 focus:outline-none rounded"
                  />
                </div>
              </div>
              <div className="col-span-1 mb-8 mx-2">
                <div className="w-full flex flex-col lg:space-y-2">
                  <label className="font-bold text-lg">Phone Number</label>
                  <input
                    placeholder="+33 5 65 65 65 65"
                    type="text"
                    className="px-4 py-3 border border-gray-400 focus:outline-none rounded"
                  />
                </div>
              </div>
              <div className="col-span-1 mb-8 mx-2">
                <div className="w-full flex flex-col lg:space-y-2">
                  <label className="font-bold text-lg">Email</label>
                  <input
                    placeholder="jhondoe01@gmail.com"
                    type="text"
                    className="px-4 py-3 border border-gray-400 focus:outline-none rounded"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col lg:space-y-2 px-2">
              <label className="font-bold text-lg">Message</label>
              <textarea
                type="text"
                rows="5"
                className="p-4 border border-gray-400 focus:outline-none rounded"
              />
            </div>
            <div className="flex my-8">
              <span className="cursor-pointer flex py-2 px-4 rounded-full bg-yellow-500 text-white transition duration-700 ease-in-out uppercase">
                Send The Message
                <svg
                  className="w-6 h-6"
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
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4 px-2">
            <div className="font-bold text-lg mb-2">Our Contacts</div>
            <div className="h-56 w-full bg-gray-300 rounded mb-4"></div>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <span className="p-2 bg-yellow-500 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span>asfk aksjffasjgl askj as gas </span>
              </div>
              <div className="flex space-x-4">
                <span className="p-2 bg-yellow-500 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span>asfk aksjffasjgl askj as gas </span>
              </div>
              <div className="flex space-x-4">
                <span className="p-2 bg-yellow-500 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span>asfk aksjffasjgl askj as gas </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FromMapSection;

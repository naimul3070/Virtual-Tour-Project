import React from "react";
import { useHistory, useLocation } from "react-router";

function InlineMenu({ children }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const secondLavel = pathname.split("/")[1];
  const thirdLavel = pathname.split("/")[2];

  return (
    <>
      <div className="border-t border-gray-700 text-gray-100 flex justify-center">
        <div className="w-10/12 py-4 space-x-8">
          <span
            onClick={() => {
              history.push("/");
            }}
            className="font-bold cursor-pointer"
          >
            Home
          </span>
          {secondLavel && (
            <>
              <span className="font-bold">/</span>
              <span
                onClick={() => {
                  if (thirdLavel) {
                    history.push("/blog");
                  }
                }}
                className={`${
                  thirdLavel ? "" : "text-gray-400"
                } capitalize cursor-pointer`}
              >
                {secondLavel}
              </span>
              {thirdLavel && (
                <>
                  <span className="font-bold">/</span>
                  <span className="text-gray-400 capitalize">{thirdLavel}</span>
                </>
              )}
            </>
          )}
        </div>
      </div>
      {children && children}
    </>
  );
}

export default InlineMenu;

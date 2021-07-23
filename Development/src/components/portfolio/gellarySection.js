import React, { useState } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router";
import { BlogData } from "../blog/blogDataSet";

const styles = makeStyles((theme) => ({
  galleryItem: {
    "&:hover": {
      "& img": {
        opacity: ".5",
      },
      "& .overlay-effect": {
        opacity: "1",
      },
    },
  },
  imageOverlay: {
    backgroundColor: "rgba(0,0,0,.5)",
    opacity: "0",
  },
  paginationRoot: {
    marginTop: "20px",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    "& nav": {
      "& ul": {
        justifyContent: "center",
      },
    },
  },
}));

function GellarySection() {
  const history = useHistory();
  const { galleryItem, imageOverlay, paginationRoot } = styles();
  const [initialIndex, setInitialIndex] = useState(0);
  const numberOfPage = Math.ceil(BlogData.length / 6);

  const handleChange = (event, value) => {
    setInitialIndex((value - 1) * 6);
  };

  const item1 = BlogData[initialIndex];
  const item2 = BlogData[initialIndex + 1];
  const item3 = BlogData[initialIndex + 2];
  const item4 = BlogData[initialIndex + 3];
  const item5 = BlogData[initialIndex + 4];
  const item6 = BlogData[initialIndex + 5];

  return (
    <>
      <Box className="w-5/6 mx-auto">
        <Grid container spacing={3}>
          {/* FIRST COLUMN */}
          <Grid xs={12} md={4} className="p-2">
            {item1 && (
              <div
                className={`${galleryItem} rounded-2xl relative overflow-hidden mb-3`}
              >
                <img
                  className="cursor-pointer cursor-pointer w-full object-cover object-center rounded-2xl transition-all duration-300 ease"
                  src={`${item1.thumbnail}`}
                  alt="imagesCard"
                />
                <div
                  className={`${imageOverlay} overlay-effect absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 ease`}
                >
                  <div
                    className={`flex justify-center items-center w-full h-full`}
                  >
                    <div className="flex flex-col w-full px-2 lg:px-0 lg:w-8/12 text-center">
                      <div className="text-gray-100 font-bold text-lg lg:text-xl uppercase">
                        {item1.title}
                      </div>
                      <div className="text-sm lg:text-lg my-4 text-gray-100">
                        {item1.projectDescription}
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            history.push({
                              pathname: item1.blogLink,
                              state: item1,
                            })
                          }
                          className="px-6 font-semibold uppercase py-2 border-2 rounded-full text-gray-100 focus:outline-none hover:bg-gray-100 hover:text-gray-600 transition ease-in duration-300"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {item2 && (
              <div
                className={`${galleryItem} relative overflow-hidden rounded-2xl mb-3`}
              >
                <div
                  className={`w-full h-full rounded-2xl galleryImageContainer`}
                >
                  <img
                    style={{
                      filter: "blur(1px)",
                      webkitFilter: "blur(1px)",
                    }}
                    className="cursor-pointer cursor-pointer w-full object-cover object-center transition-all duration-300 ease"
                    src={`${item2.thumbnail}`}
                    alt="imagesCard"
                  />
                </div>

                <div
                  className={`${imageOverlay} overlay-effect absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 ease`}
                >
                  <div
                    className={`flex justify-center items-center w-full h-full`}
                  >
                    <div className="flex flex-col w-full px-2 lg:px-0 lg:w-8/12 text-center">
                      <div className="text-gray-100 font-bold text-lg lg:text-xl uppercase">
                        {item2.title}
                      </div>
                      <div className="text-sm lg:text-lg my-4 text-gray-100">
                        {item2.projectDescription}
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            history.push({
                              pathname: item2.blogLink,
                              state: item2,
                            })
                          }
                          className="px-6 font-semibold uppercase py-2 border-2 rounded-full text-gray-100 focus:outline-none hover:bg-gray-100 hover:text-gray-600 transition ease-in duration-300"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Grid>
          {/* SECOND COLUMN */}
          <Grid xs={12} md={4} className="p-2">
            {item3 && (
              <div
                className={`${galleryItem} relative w-full rounded-2xl overflow-hidden mb-3`}
              >
                <img
                  className="cursor-pointer cursor-pointer object-cover object-center rounded-2xl w-full transition-all duration-300 ease"
                  src={`${item3.thumbnail}`}
                  alt="imagesCard"
                />
                <div
                  className={`${imageOverlay} overlay-effect absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 ease`}
                >
                  <div
                    className={`flex justify-center items-center w-full h-full`}
                  >
                    <div className="flex flex-col w-full px-2 lg:px-0 lg:w-8/12 text-center">
                      <div className="text-gray-100 font-bold text-lg lg:text-xl uppercase">
                        {item3.title}
                      </div>
                      <div className="text-sm lg:text-lg my-4 text-gray-100">
                        {item3.projectDescription}
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            history.push({
                              pathname: item3.blogLink,
                              state: item3,
                            })
                          }
                          className="px-6 font-semibold uppercase py-2 border-2 rounded-full text-gray-100 focus:outline-none hover:bg-gray-100 hover:text-gray-600 transition ease-in duration-300"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {item4 && (
              <div
                className={`${galleryItem} relative overflow-hidden rounded-2xl mb-3`}
              >
                <img
                  className="cursor-pointer cursor-pointer w-full object-cover object-center rounded-2xl transition-all duration-300 ease"
                  src={`${item4.thumbnail}`}
                  alt="imagesCard"
                />
                <div
                  className={`${imageOverlay} overlay-effect absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 ease`}
                >
                  <div
                    className={`flex justify-center items-center w-full h-full`}
                  >
                    <div className="flex flex-col w-full px-2 lg:px-0 lg:w-8/12 text-center">
                      <div className="text-gray-100 font-bold text-lg lg:text-xl uppercase">
                        {item4.title}
                      </div>
                      <div className="text-sm lg:text-lg my-4 text-gray-100">
                        {item4.projectDescription}
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            history.push({
                              pathname: item4.blogLink,
                              state: item4,
                            })
                          }
                          className="px-6 font-semibold uppercase py-2 border-2 rounded-full text-gray-100 focus:outline-none hover:bg-gray-100 hover:text-gray-600 transition ease-in duration-300"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Grid>
          {/* THIRD COLUMN */}
          <Grid xs={12} md={4} className="p-2">
            {item5 && (
              <div
                className={`${galleryItem} rounded-2xl w-full relative overflow-hidden mb-3`}
              >
                <img
                  className="cursor-pointer cursor-pointer object-cover object-center rounded-2xl w-full transition-all duration-300 ease"
                  src={`${item5.thumbnail}`}
                  alt="imagesCard"
                />
                <div
                  className={`${imageOverlay} overlay-effect absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 ease`}
                >
                  <div
                    className={`flex justify-center items-center w-full h-full`}
                  >
                    <div className="flex flex-col w-full px-2 lg:px-0 lg:w-8/12 text-center">
                      <div className="text-gray-100 font-bold text-lg lg:text-xl     uppercase">
                        {item5.title}
                      </div>
                      <div className="text-sm lg:text-lg my-4 text-gray-100">
                        {item5.projectDescription}
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            history.push({
                              pathname: item5.blogLink,
                              state: item5,
                            })
                          }
                          className="px-6 font-semibold uppercase py-2 border-2 rounded-full text-gray-100 focus:outline-none hover:bg-gray-100 hover:text-gray-600 transition ease-in duration-300"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {item6 && (
              <div
                className={`${galleryItem} rounded-2xl relative overflow-hidden mb-3`}
              >
                <img
                  className="cursor-pointer cursor-pointer w-full object-cover object-center rounded-2xl transition-all duration-300 ease"
                  src={`${item6.thumbnail}`}
                  alt="imagesCard"
                />
                <div
                  className={`${imageOverlay} overlay-effect absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 ease`}
                >
                  <div
                    className={`flex justify-center items-center w-full h-full`}
                  >
                    <div className="flex flex-col w-full px-2 lg:px-0 lg:w-8/12 text-center">
                      <div className="text-gray-100 font-bold text-lg lg:text-xl uppercase">
                        {item6.title}
                      </div>
                      <div className="text-sm lg:text-lg my-4 text-gray-100">
                        {item6.projectDescription}
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            history.push({
                              pathname: item6.blogLink,
                              state: item6,
                            })
                          }
                          className="px-6 font-semibold uppercase py-2 border-2 rounded-full text-gray-100 focus:outline-none hover:bg-gray-100 hover:text-gray-600 transition ease-in duration-300"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
      {/* Pagination */}
      <Box className={paginationRoot}>
        <Pagination
          count={numberOfPage}
          onChange={handleChange}
          color="primary"
        ></Pagination>
      </Box>
    </>
  );
}

export default GellarySection;

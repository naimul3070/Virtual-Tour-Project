import React, { useState } from "react";
import FirstHeroCard from "./firstHeroCard";
import SingleGridCard from "./singleGridCard";
import Pagination from "@material-ui/lab/Pagination";
import { Box, makeStyles } from "@material-ui/core";
import { BlogData } from "./blogDataSet";

const styles = makeStyles((theme) => ({
  paginationRoot: {
    marginTop: "0px",
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

function AllBlogSection() {
  const { paginationRoot } = styles();
  const [initialIndex, setInitialIndex] = useState(0);
  const numberOfPage = Math.ceil(BlogData.length / 9);
  const newBlogData = [...BlogData];
  const blogDataToShow = newBlogData.slice(initialIndex, initialIndex + 9);
  const handleChange = (event, value) => {
    setInitialIndex((value - 1) * 9);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <FirstHeroCard />
        <div className="w-11/12 lg:w-10/12 my-16 grid grid-cols-1 lg:grid-cols-3">
          {blogDataToShow?.map((item, index) => (
            <SingleGridCard blogItem={item} index={index} />
          ))}
        </div>
        <Box className={paginationRoot}>
          <Pagination
            count={numberOfPage}
            onChange={handleChange}
            color="primary"
          ></Pagination>
        </Box>
      </div>
    </>
  );
}

export default AllBlogSection;

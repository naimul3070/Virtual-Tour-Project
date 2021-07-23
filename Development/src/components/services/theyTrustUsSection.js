/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  trustArea: {
    padding: "30px 69px",
  },
  carouselItem: {
    backgroundColor: "gray",
    margin: "0px 10px",
    height: "100px",
    textAlign: "center",
    color: "white",
  },
});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function TheyTrustUsSection() {
  const { trustArea, carouselItem } = styles();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box className={trustArea}>
        <Slider {...settings}>
          <Box>
            <Box className={carouselItem}>
              <Typography variant="h3">1</Typography>
            </Box>
          </Box>
          <Box>
            <Box className={carouselItem}>
              <Typography variant="h3">2</Typography>
            </Box>
          </Box>
          <Box>
            <Box className={carouselItem}>
              <Typography variant="h3">3</Typography>
            </Box>
          </Box>
          <Box>
            <Box className={carouselItem}>
              <Typography variant="h3">4</Typography>
            </Box>
          </Box>
          <Box>
            <Box className={carouselItem}>
              <Typography variant="h3">5</Typography>
            </Box>
          </Box>
          <Box>
            <Box className={carouselItem}>
              <Typography variant="h3">6</Typography>
            </Box>
          </Box>
          <Box>
            <Box className={carouselItem}>
              <Typography variant="h3">7</Typography>
            </Box>
          </Box>
          <Box>
            <Box className={carouselItem}>
              <Typography variant="h3">8</Typography>
            </Box>
          </Box>
          <Box>
            <Box className={carouselItem}>
              <Typography variant="h3">9</Typography>
            </Box>
          </Box>
        </Slider>
      </Box>
    </>
  );
}

export default TheyTrustUsSection;

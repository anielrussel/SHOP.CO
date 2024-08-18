"use client";

import React from "react";
import Slider from "react-slick";
import { FaCheck } from "react-icons/fa6";
import { Rate } from "antd";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
  {
    name: "Sarah M.",
    message: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
  },
  {
    name: "Alex K.",
    message: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    rating: 4.5,
  },
  {
    name: "James L.",
    message: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    rating: 4,
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-0 right-20 cursor-pointer" onClick={onClick}>
      <FaArrowRight size={25} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-0 right-32 cursor-pointer" onClick={onClick}>
      <FaArrowLeft size={25} />
    </div>
  );
};

const HPFeedbacks = () => {
  const settings = {
    className: "center no-scrollbar overflow-x-auto pt-16",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    speed: 500,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="py-20">
      <h1 className="md:px-20 px-5 md:text-5xl md:w-full w-1/2 text-3xl -mb-8">
        OUR HAPPY CUSTOMERS
      </h1>
      <Slider {...settings}>
        {feedbacks.map((feedback) => (
          <div key={feedback.name}>
            <Rate disabled allowHalf defaultValue={feedback.rating} />
            <span className="py-2 text-xl font-bold flex items-center gap-2">
              <h2>{feedback.name}</h2>
              <FaCheck
                className="bg-[#01AB31] rounded-full p-1"
                color="white"
              />
            </span>
            <p className="text-base font-medium text-black/60">
              {feedback.message}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HPFeedbacks;

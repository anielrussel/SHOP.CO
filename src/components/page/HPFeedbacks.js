"use client";

import React from "react";
import Slider from "react-slick";
import { FaCheck } from "react-icons/fa6";
import { Rate } from "antd";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Skeleton } from "@/components/ui/skeleton";

import { useGetAllProductsByCategoryQuery } from "@/stores/apiSlice";

// Customized arrows for react-slick
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
  // Settings for react-slick
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

  const { data: mensShirts, isLoading: isLoadingMensShirts } =
    useGetAllProductsByCategoryQuery("mens-shirts");
  const { data: womensDresses, isLoading: isLoadingWomensDresses } =
    useGetAllProductsByCategoryQuery("womens-dresses");

  // Combine all products
  const allProducts = [
    ...(mensShirts?.products || []),
    ...(womensDresses?.products || []),
  ];

  // Manage loading state
  const isLoading = isLoadingMensShirts || isLoadingWomensDresses;

  //Get all the reviews
  const productReviews = allProducts?.map((product) => product?.reviews).flat();

  return (
    <div className="py-20">
      <h1 className="md:px-20 px-5 md:text-5xl md:w-full w-1/2 text-3xl -mb-8">
        OUR CUSTOMERS REVIEW
      </h1>

      {isLoading ? (
        <div className="mx-[5%] flex lg:justify-between mt-20">
          <Skeleton className={"w-[420px] h-[250px]"} />
          <Skeleton className={"w-[420px] h-[250px] lg:block hidden"} />
          <Skeleton className={"w-[420px] h-[250px] lg:block hidden"} />
        </div>
      ) : (
        <div>
          <Slider {...settings}>
            {productReviews &&
              productReviews?.map((feedback, index) => (
                <div key={index}>
                  <Rate disabled allowHalf defaultValue={feedback.rating} />
                  <span className="py-2 text-xl font-bold flex items-center gap-2">
                    <h2>{feedback.reviewerName}</h2>
                    <FaCheck
                      className="bg-[#01AB31] rounded-full p-1"
                      color="white"
                    />
                  </span>
                  <p className="text-base font-medium text-black/60">
                    {feedback.comment}
                  </p>
                </div>
              ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default HPFeedbacks;

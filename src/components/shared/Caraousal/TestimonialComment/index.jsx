"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import CommentCard from "../../Cards/CommentCard";

const TestimonialCommentSection = ({ swiperConfig = {} }) => {
  const comments = Array.from({ length: 12 });

  const defaultConfig = {
    modules: [Autoplay],
    autoplay: {
      delay: 0,
    },
    speed: 6000,
    loop: true,
    slidesPerView: 5,

     breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1660:{
        slidesPerView: 5,
        spaceBetween: 0,
      }
    },
  };

  return (
    <div className="w-full relative">
      <Swiper {...defaultConfig} {...swiperConfig}>
        {comments.map((_, index) => (
          <SwiperSlide key={index}>
            <CommentCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCommentSection;

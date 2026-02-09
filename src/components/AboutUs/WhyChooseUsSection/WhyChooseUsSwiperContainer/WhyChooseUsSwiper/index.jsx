"use client";

import "swiper/css";
import "swiper/css/pagination";
import "./chooseusswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { REVIEWS } from "@/contants/app_contant";
import WhyChooseUsCard from "../WhyChooseUsCard";

export default function WhyChooseUsSwiper() {
  return (
    <div className="testmonial_wrapper">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        // loop={true}
        pagination={{ clickable: true }}
        className={"why-choose-swiper"}
      >
        {
          REVIEWS?.map((review, index) => (<SwiperSlide key={`review-${index + 1}`}>
            <WhyChooseUsCard review={review} />
          </SwiperSlide>))
        }
      </Swiper>
    </div>
  );
}

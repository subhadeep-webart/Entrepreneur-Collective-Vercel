"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CaraousalNavigation from "../CaraousalNavigation";
import ConnectionCard from "../../Cards/ConnectionCard";
import style from "./addconnectioncaraousal.module.css";

const AddConnectionCaraousal = ({
    data,
    slidesPerView = 5,
    slidesPerGroup = 5,
    spaceBetween = 28,
}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const handlePrevClick = () => {
        if (swiperRef) {
            swiperRef.current?.slidePrev();
        }
    }

    const handleNextClick = () => {
        if (swiperRef) {
            swiperRef.current?.slideNext();
        }
    }

    return (
        <div className="relative group container">
            <Swiper
                modules={[Navigation]}
                slidesPerView={slidesPerView}
                slidesPerGroup={slidesPerGroup}
                spaceBetween={spaceBetween}
                loop
                speed={600}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                className={style.add_connection_caraousal_wrapper}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ConnectionCard />
                    </SwiperSlide>
                ))}
            </Swiper>
            <CaraousalNavigation prevRef={prevRef} nextRef={nextRef} onPrevClick={handlePrevClick} onNextClick={handleNextClick} buttonStyle={"min-h-7 h-7 min-w-7 !w-7"} />
        </div>
    );
};

export default AddConnectionCaraousal;

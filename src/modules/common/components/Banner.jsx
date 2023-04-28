import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Container } from "@mui/material";
const bannerOptions = [
  "https://zmdltjiwzkcusyvshoct.supabase.co/storage/v1/object/public/ercommerce/banner/banner-1.webp",
  "https://zmdltjiwzkcusyvshoct.supabase.co/storage/v1/object/public/ercommerce/banner/banner-4.webp",
  "https://zmdltjiwzkcusyvshoct.supabase.co/storage/v1/object/public/ercommerce/banner/banner-3.webp",
];

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {bannerOptions.map((item) => (
          <SwiperSlide key={item}>
            {" "}
            <img src={item} alt="" />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

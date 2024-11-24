import React from "react";
import data from "./data.json";
import { IoStar } from "react-icons/io5";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const SectionTop = () => {
  const swiperPropsTop = {
    // install Swiper modules
    modules: [Navigation],
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      540: {
        slidesPerView: 2,
      },
      1080: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next_top",
      prevEl: ".swiper-button-prev_top",
    },
  };
  return (
    <div className="md:mt-10 md:mx-20 m-4">
      <div className="mb-6 flex justify-between ">
        <h2 className="text-dynamic-h2 font-bold text-primary-100">
          Top Anime
        </h2>
      </div>
      <Swiper {...swiperPropsTop} className="relative">
        {data.animes.map((anime) => (
          <SwiperSlide key={anime.id}>
            <div className="flex flex-col justify-center ">
              <img src={anime.img} alt={anime.title} className="rounded-2xl" />
              <h4 className="text-dynamic-h4 text-primary-100 ">
                {anime.title}
              </h4>
              <div className="flex items-center gap-2 text-secondary-100">
                <p className="text-primary-100 text-dynamic-p">{anime.genre}</p>
                |<p className="text-primary-100 text-dynamic-p">{anime.year}</p>
                |
                <p className="text-primary-100 text-dynamic-p">
                  {anime.episodes}
                </p>
                |
                <p className="text-primary-100 text-dynamic-p  flex items-center gap-2">
                  <IoStar className="text-[#ffb411]" size={"1em"} />{" "}
                  {anime.punctuation}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <IoIosArrowBack className="swiper-button-prev_top swiper-button-prev cursor-pointer p-2 text-tertiary-100 bg-[#212121] w-[30px] h-[30px] md:w-[40px] md:h-[40px]  rounded-lg" size={"1.5em"}/>
        <IoIosArrowForward className="swiper-button-next_top swiper-button-next cursor-pointer p-2 text-tertiary-100 bg-[#212121] w-[30px] h-[30px] md:w-[40px] md:h-[40px]  rounded-lg" size={"1.5em"}/>
      </Swiper>
    </div>
  );
};

export default SectionTop;

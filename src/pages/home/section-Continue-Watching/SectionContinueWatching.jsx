import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import data from "./data.json";
import PlayButton from "../../../components/PlayButton";

//icons
import { BiSolidMoviePlay } from "react-icons/bi";
import { PiCrownThin } from "react-icons/pi";

//icons

import { IoMdTime } from "react-icons/io";

const SectionContinueWatching = () => {
  return (
    <section className="md:pt-10 md:px-20 pt-5 px-5">
      <div>
        <div className="flex justify-between">
          <h2 className="text-dynamic-h2 font-bold text-primary-100">
            Continue Watching
          </h2>
          <div className="flex items-center text-primary-100">
            <a className="text-dynamic-a" href="">
              View All
            </a>
            <IoIosArrowForward className="text-tertiary-100" size={"1em"} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mt-6">
          {data.animes.map((anime, index) => (
            <div key={index} className=" rounded-xl  group">
              <div className=" flex flex-col sm:flex-row md:flex-col lg:flex-row   gap-6">
                <figure>
                  {" "}
                  <img
                    src={anime.img}
                    alt={anime.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </figure>
                <div className="flex flex-col justify-around gap-3 xl:gap-6 items-start">
                  <div className="flex flex-col gap-1 xl:gap-3">
                    <h4 className="text-primary-100 text-dynamic-h4 text-lg font-medium">
                      {anime.title}
                    </h4>
                    <ul className="flex items-center gap-4">
                      <li className="text-dynamic-li text-center text-secondary-100">
                        <BiSolidMoviePlay className="inline-block" /> Season{" "}
                        {anime.season}
                      </li>
                      <li className="text-dynamic-li text-center text-secondary-100">
                        <PiCrownThin className="inline-block" /> Episode{" "}
                        {anime.episode}
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-4">
                    <PlayButton />
                    <p className="text-[20px] text-center text-primary-100">
                      <IoMdTime className="inline-block" /> {anime.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionContinueWatching;

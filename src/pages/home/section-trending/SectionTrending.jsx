import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import data from "./data.json";
import { CiPlay1 } from "react-icons/ci";

const SectionTrending = () => {
    return (
        <section className="md:pt-10 md:px-20 pt-5 px-5">
        <div>
          <div className="flex justify-between">
            <h2 className="text-dynamic-h2 font-bold text-primary-100">Trending Shows</h2>
            <div className="flex items-center text-primary-100">
              <a className="text-dynamic-a" href="">
                View All
              </a>
              <IoIosArrowForward className="text-tertiary-100" size={"1em"} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {data.animes.map((anime, index) => (
              <div key={index} className=" rounded-xl  group">
                <div className="relative overflow-hidden">
                  <img
                    src={anime.img}
                    alt={anime.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <a
                    href=""
                    className="absolute  gap-2 pr-2 opacity-0  translate-y-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-700 left-8 text-dynamic-a text-primary-100 font-bold bg-white/30 backdrop-blur-2xl rounded-2xl py-2 px-5"
                  >
                    Ver Ahora
                    <CiPlay1
                      className="inline-block pl-1"
                      size={"1.5em"}
                      strokeWidth={2}
                    />
                  </a>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-primary-100 text-[80px] font-semibold">
                    {anime.rank}
                  </span>
                  <div className="flex flex-col items-start gap-[10px]">
                    <h4 className="text-primary-100 text-lg font-medium">
                      {anime.title}
                    </h4>
                    <h6 className="text-secondary-100">{anime.genre}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default SectionTrending;
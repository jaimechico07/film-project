import React from "react";
import PlayButton from "../../../components/PlayButton";
import { IoInformationCircleOutline } from "react-icons/io5";

const SectionHero = () => {
  return (
    <section className="md:pt-10 md:px-20 pt-5 px-5 ">
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-y-6 2xl:gap-x-6 ">
        <div className="w-full bg-[url('https://uiparadox.co.uk/templates/vivid/v2/assets/media/banner/bg.png')] h-full col-start-1 col-end-3 rounded-xl place-content-end bg-cover bg-center">
          {/* <img
            src="https://uiparadox.co.uk/templates/vivid/v2/assets/media/banner/bg.png"
            className=" w-full h-full object-cover object-center rounded-xl"
            alt="Tangiro"
          /> */}
          <div className="flex flex-col gap-4 p-6 xl:p-12">
            <h2 className="text-primary-100 text-dynamic-h2 font-bold">
              Demon Slayer:
            </h2>
            <ul className="flex flex-wrap gap-4 text-dynamic-li">
              <li className="text-primary-100 border border-white py-1 px-2 font-semibold rounded-[8px]">
                18+
              </li>
              <li className="text-primary-100 border border-white py-1 px-2 font-semibold rounded-[8px]">
                HD
              </li>
              <li className="text-primary-100 border border-white py-1 px-2 font-semibold rounded-[8px]">
                2029
              </li>
              <li className="text-primary-100 border border-white py-1 px-2 font-semibold rounded-[8px]">
                Anime
              </li>
              <li className="text-primary-100 border border-white py-1 px-2 font-semibold rounded-[8px]">
                1h 55m
              </li>
            </ul>
            <p className="text-dynamic-p mb-4 font-bold text-primary-100">
              <span className="text-secondary-100 font-normal">Starting:</span>
              Natsuki Hanae, Akari Kito, Hiro Shimono
            </p>
            <div className="flex gap-5 xl:gap-10 items-center">
              <PlayButton />
              <a href="" className="text-primary-100 flex items-center gap-2 ">
              <IoInformationCircleOutline size={'2em'} /> More Info
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-1 2xl:grid-rows-2 gap-6">
          <div className="bg-[#212121]  w-full h-full rounded-3xl flex flex-col sm:flex-row p-4 gap-4">
            <figure className="h-full xl:w-full ">
              <img
                src="https://uiparadox.co.uk/templates/vivid/v2/assets/media/anime-card/img-1.png"
                alt=""
                className="w-full rounded-xl h-auto"
              />
            </figure>
            <div className="flex flex-col gap-2 ">
              <h4 className="text-dynamic-h4 font-medium leading-tight text-primary-100">
                My Hero Academia
              </h4>
              <ul className="flex items-center gap-2">
                <li className="text-secondary-100">2019</li>
                <li className="text-secondary-100  px-1 border border-secondary-100 rounded-lg ">
                  18+
                </li>
                <li className="text-secondary-100 before:before-hero">
                  4 Seasons
                </li>
                <li className="text-secondary-100 before:before-hero">Anime</li>
              </ul>
              <p className="text-secondary-100 mb-4">
                Sentenced to death, ninja Gabimaru the Hollow finds himself
                apathetic.
              </p>
              <PlayButton />
            </div>
          </div>

          <div className="bg-[#212121]  w-full h-full rounded-3xl flex flex-col sm:flex-row p-4 gap-4">
            <figure className="h-full xl:w-full ">
              <img
                src="https://uiparadox.co.uk/templates/vivid/v2/assets/media/anime-card/img-2.png"
                alt=""
                className="w-full rounded-xl h-auto"
              />
            </figure>
            <div className="flex flex-col gap-2 ">
              <h4 className="text-dynamic-h4 font-medium leading-tight text-primary-100">
                Hell’s Paradise
              </h4>
              <ul className="flex items-center gap-2">
                <li className="text-secondary-100">2019</li>
                <li className="text-secondary-100  px-1 border border-secondary-100 rounded-lg ">
                  18+
                </li>
                <li className="text-secondary-100 before:before-hero">
                  4 Seasons
                </li>
                <li className="text-secondary-100 before:before-hero">Anime</li>
              </ul>
              <p className="text-secondary-100 mb-4">
                Sentenced to death, ninja Gabimaru the Hollow finds himself
                apathetic.
              </p>
              <PlayButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;

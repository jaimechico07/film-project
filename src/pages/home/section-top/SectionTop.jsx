import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Cambiar la importación de Navigation en Swiper 11.x

import "swiper/css"; // Importa el CSS base de Swiper
import "swiper/css/navigation"; // Importa el CSS de navegación

import "./customSwiper.css"; // Importa el archivo de estilos personalizados para las flechas

const SectionTop = () => {
  const animeData = [
    {
      title: "Steins Gate",
      image:
        "https://theouterhaven.b-cdn.net/wp-content/uploads/2018/09/steins-gate-0-743x422.jpg",
      genre: "Action",
      year: 2021,
      episodes: 24,
      rating: 8.5,
    },
    {
      title: "Hell's Paradise",
      image:
        "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/4d79ae401c93ecfef612a5f0bb0928f3.jpe",
      genre: "Action",
      year: 2021,
      episodes: 24,
      rating: 8.5,
    },
    {
      title: "Demon Slayer",
      image:
        "https://imgmedia.libero.pe/652x365/libero/original/2022/02/18/621015b7c3a8f06bea7febed.webp",
      genre: "Action",
      year: 2021,
      episodes: 24,
      rating: 8.5,
    },
    {
      title: "Arcane",
      image:
        "https://elcomercio.pe/resizer/WrPmLKzdCM1ScJwUWzRMw_iKQEY=/1200x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2UBSNFM5SNHYTJAPH4VG54RJLI.jpg",
      genre: "Action",
      year: 2021,
      episodes: 24,
      rating: 8.5,
    },
    {
      title: "Arcane",
      image:
        "https://elcomercio.pe/resizer/WrPmLKzdCM1ScJwUWzRMw_iKQEY=/1200x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2UBSNFM5SNHYTJAPH4VG54RJLI.jpg",
      genre: "Action",
      year: 2021,
      episodes: 24,
      rating: 8.5,
    },
    {
      title: "Arcane",
      image:
        "https://elcomercio.pe/resizer/WrPmLKzdCM1ScJwUWzRMw_iKQEY=/1200x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2UBSNFM5SNHYTJAPH4VG54RJLI.jpg",
      genre: "Action",
      year: 2021,
      episodes: 24,
      rating: 8.5,
    },
    {
      title: "Arcane",
      image:
        "https://elcomercio.pe/resizer/WrPmLKzdCM1ScJwUWzRMw_iKQEY=/1200x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2UBSNFM5SNHYTJAPH4VG54RJLI.jpg",
      genre: "Action",
      year: 2021,
      episodes: 24,
      rating: 8.5,
    },
  ];

  return (
    <main className="bg-[#1b1b1b] min-h-screen p-8">
      <h1 className="text-white text-3xl font-bold mb-8">Top Anime</h1>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        allowTouchMove={false}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {animeData.map((anime, index) => (
          <SwiperSlide key={index}>
            {/*rounded-lg shadow-lg hover:shadow-2xl */}
            <div className="bg-transparent overflow-hidden transition-shadow duration-300 relative">
              <img
                src={anime.image}
                alt={anime.title}
                className="w-full rounded-lg h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-white text-lg font-bold">{anime.title}</h2>
                <p className="text-gray-400">
                  {anime.genre} | {anime.year} | EP:{anime.episodes} |{" "}
                  <span className="text-yellow-500">⭐ {anime.rating}</span>
                </p>
                {/* <div className="flex items-center mt-2">
                  <span className="text-yellow-500">⭐ {anime.rating}</span>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default SectionTop;

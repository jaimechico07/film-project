import React, { useState } from "react";
import { Link } from "react-router-dom";



const SectionFilter = ({movies, genres}) => {

  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12; // Ajusta el número de películas por página

  //Obtén los géneros, países y años únicos de las películas
  const genresOptions = ["All", ...genres];
  const countries = ["All", ...new Set(movies.map((movie) => movie.country))];
  const years = ["All", ...[...new Set(movies.map((movie) => movie.year))].sort((a, b) => a - b)];
  const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

    //Función para obtener el nombre del género basado en genre_id
    const getGenreNames = (genreIds) => {
      return genreIds
        .map((id) => {
          const genre = genres.find((g) => g.customId === id);
          return genre ? genre.name : "";
        })
        .filter((name) => name !== "")
        .slice(0, 1)
        .join(", ");
    };

  //Filtra las películas según los criterios seleccionados
  let filteredMovies = movies.filter((movie) => {
    return (
      (selectedGenre === "All" || movie.genre_id.includes(selectedGenre)) &&
      (selectedCountry === "All" || movie.country === selectedCountry) &&
      (selectedYear === "All" || String(movie.year) === String(selectedYear))  &&
      (selectedLetter === "All" ||
        movie.title.toUpperCase().startsWith(selectedLetter))
    );
  });


  // Paginación
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = filteredMovies.slice(
    startIndex,
    startIndex + moviesPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="md:pt-10 md:px-20 pt-5 px-5 h-full">
      <div className="grid grid-cols-4 gap-36">
        <div className="grid place-content-start col-start-1 col-end-2 gap-4">
          <div>
            <label
              htmlFor="letter"
              className="block text-sm font-medium text-primary-100 mb-1"
            >
              Filter by First Letter
            </label>
            <ul className="flex flex-wrap w-full gap-2 box-border">
              {letters.map((letter) => (
                <li
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-3 py-1 rounded-md text-sm font-medium w-[44px] flex justify-center items-center h-[43px] ${
                    selectedLetter === letter
                      ? "bg-tertiary-100 text-white"
                      : "bg-bg-200 text-primary-100"
                  }`}
                >
                  {letter}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-full">
              <label
                htmlFor="genre"
                className="block text-sm font-medium text-white"
              >
                Genre
              </label>
              <select
                id="genre"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border bg-bg-200 text-secondary-100 border-none hover:border rounded-md shadow-sm focus:outline-none focus:ring-tertiary-100 focus:border-tertiary-100 sm:text-sm"
              >
                {genresOptions.map((genre, index) => (
                  <option
                    key={genre.customId || `all-${index}`}
                    value={genre.customId}
                  >
                    {genre.name ? genre.name : genre}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-white"
              >
                Country
              </label>
              <select
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border bg-bg-200 text-secondary-100 border-none rounded-md shadow-sm focus:outline-none focus:ring-tertiary-100 focus:border-tertiary-100 sm:text-sm"
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-white"
              >
                Year
              </label>
              <select
                id="year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border bg-bg-200 text-secondary-100 border-none rounded-md shadow-sm focus:outline-none focus:ring-tertiary-100 focus:border-tertiary-100 sm:text-sm"
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h2 className="text-dynamic-h2 text-primary-100 font-bold">
              Top Rated Movie
            </h2>
            <p className="text-dynamic-p text-primary-100">
              Based on your filter
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  col-start-2 col-end-5 gap-4 mb-4 ">
          {currentMovies.map((movie, index) => (
            <Link
              key={movie.id || `movie-${index}`}
              className=" p-4 rounded-lg shadow-md cursor-pointer"
              to={`/movies/${movie._id}`}
            >
              <div className="flex flex-col justify-center ">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="rounded-2xl"
                />
                <h4 className="text-dynamic-h4 line-clamp-1 text-primary-100 ">
                  {movie.title}
                </h4>
                <div className="flex items-center gap-2 text-secondary-100">
                  <p className="text-primary-100 text-dynamic-p">
                  {getGenreNames(movie.genre_id)}
                  </p>
                  |
                  <p className="text-primary-100 text-dynamic-p">
                    {movie.year}
                  </p>
                  |
                  <p className="text-primary-100 text-dynamic-p">
                    {movie.country}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex justify-center col-start-1 col-end-4 items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-md text-sm font-medium bg-white text-gray-700 border-gray-300"
            >
              &lt;
            </button>
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => handlePageChange(number + 1)}
                className={`px-4 py-2  rounded-md text-sm font-medium ${
                  currentPage === number + 1
                    ? "bg-tertiary-100 text-white"
                    : "bg-white text-gray-700 "
                }`}
              >
                {number + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-md text-sm font-medium bg-white text-gray-700 border-gray-300"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFilter;

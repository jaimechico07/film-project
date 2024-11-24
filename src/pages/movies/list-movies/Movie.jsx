import React, { useEffect } from 'react';
import Header from './../../../components/Header';
import Footer from "../../../components/Footer";
import SectionFilter from "./section-filter/SectionFilter";
import useMovieStore from "../../../store/MoviStore";



const Movie = () => {
  const { movies, genres, getMoviesAndGenres, loading, error } = useMovieStore();

  useEffect(() => {
    getMoviesAndGenres();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header/>
      <SectionFilter movies={movies} genres={genres} />
      <Footer />
    </>
  );
};

export default Movie;

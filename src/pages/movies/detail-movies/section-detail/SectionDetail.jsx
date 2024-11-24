import React, { useState, useEffect } from "react";
import { FiPlus, FiCheck } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../../../services/movieService";

const SectionDetail = () => {
  const [movie, setMovie] = useState(null);
  const [estaAgregado, setEstaAgregado] = useState(false);
  const { id } = useParams();

  const agregarAFavoritos = () => {
    setEstaAgregado(true);
  };

  useEffect(() => {
    const obtenerPelicula = async () => {
      const data = await fetchMovieById(id); // Llamar a la función para obtener la película
      setMovie(data); // Almacenar los datos en el estado
      console.log(data);
    };
    obtenerPelicula();
  }, [id]); // Ejecutar cuando el ID cambie

  // Añadir una verificación para asegurarse de que movie no sea null
  if (!movie) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga o un spinner
  }

  return (
    <section className="md:pt-10  md:px-20 pt-5 px-5 relative flex items-center">
      <div className={`bg-[url(${movie.poster})] flex items-center w-full h-[600px] bg-cover bg-no-repeat bg-center`}>
        <div className="md:px-20 pt-5 px-5 flex flex-col gap-2">
          <h1 className="text-dynamic-h2 text-primary-100">{movie.title}</h1>
          <p className="text-primary-100">
            Language:{" "}
            <span className="text-tertiary-100">
              {movie.language.join(", ")}
            </span>
          </p>
          <p className="text-primary-100">
            Genre: <span className="text-tertiary-100">{movie.genre_id.join(", ")}</span>
          </p>
          <div className="flex items-center gap-4">
            <p className="text-primary-100">
              Release Date:{" "}
              <span className="text-tertiary-100">
                {new Date(movie.releaseDate).getFullYear()}
              </span>
            </p>
            <p className="text-primary-100">
              Duración:{" "}
              <span className="text-tertiary-100">
                {Math.floor(movie.duration / 60)}h {movie.duration % 60}min
              </span>
            </p>
            <p className="text-primary-100">
              Rating:{" "}
              <span className="text-tertiary-100">{movie.rating}/10</span>
            </p>
          </div>
          <p className="text-primary-100">
            Quality:{" "}
            <span className="text-tertiary-100">
              {movie.qualities.join(", ")}
            </span>
          </p>
          <div className="flex items-center gap-1 text-primary-100">
            {estaAgregado ? (
              <>
                <FiCheck className="text-tertiary-100" size={"1.2em"} />
                <span>Add to Favorites</span>
              </>
            ) : (
              <>
                <FiPlus className="text-tertiary-100" size={"1.2em"} />
                <button
                  onClick={agregarAFavoritos}
                  className="text-primary-100"
                >
                  Add to Favorites
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 m-auto w-fit h-full flex items-center">
        <div className="bg-tertiary-100 p-5 rounded-full shadow-md relative">
          <FaPlay className="z-20" size={"1.5em"} />
          <div className="bg-tertiary-100 inset-0 shadow-md animate-pulse-opacity z-10 absolute w-full h-full p-5 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionDetail;

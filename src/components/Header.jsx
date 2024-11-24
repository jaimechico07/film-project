import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";
import { GoSearch } from "react-icons/go";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuthStore();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="md:pt-3 md:px-20 pt-2 px-5 ">
      <nav className=" my-3 grid grid-cols-1 sm:grid-cols-3 items-center gap-3 py-4 px-8 md:py-5 md:px-10 bg-bg-200 rounded-3xl">
        <Link to="/home">
          <img
            className="max-w-[250px] md:w-full"
            src="./../src/assets/logo.png"
            alt="logo cinemundo"
          />
        </Link>
        <ul className="flex items-center justify-center text-primary-100 text-dynamic-h6 gap-4">
          <li className="cursor-pointer hover:text-tertiary-100 hover:scale-105 duration-300">
            <Link to="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-tertiary-100 hover:scale-105 duration-300">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="cursor-pointer hover:text-tertiary-100 hover:scale-105 duration-300">
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <div className="flex w-full h-full items-center gap-4 justify-end rounded-full relative">
          <div className="flex items-center justify-between gap-2 rounded-full pr-5 w-full  bg-bg-100 ">
            <input
              type="search"
              placeholder="Search"
              className="py-2 px-4 w-full text-white rounded-full bg-transparent border-none outline-none"
            />
            <GoSearch className="text-white " size={"1.5em"}/>
          </div>
          <img
            onClick={() => handleClick()}
            src=""
            alt="imagen retrato"
            className="bg-white w-[70px] h-auto rounded-full cursor-pointer"
          />

          {isOpen && (
            <ul className="flex flex-col divide-y-2 w-1/2 text-center text-black rounded-xl absolute -bottom-32 right-10 bg-white">
              {isAuthenticated ? (
                <>
                  <li className="capitalize p-2 hover:bg-tertiary-100 duration-300 rounded-t-xl">
                    {user.username.split("@")[0]}
                  </li>
                  <li className="p-2 cursor-pointer hover:bg-tertiary-100 duration-300">
                    Ver perfil
                  </li>
                  <li className="p-2 cursor-pointer hover:bg-tertiary-100 duration-300 rounded-b-xl">
                    <Link
                      to="/"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="bg-indigo-500 px-4 py-1 rounded-md"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="bg-indigo-500 px-4 py-1 rounded-md"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

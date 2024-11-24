import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="bg-footer bg-no-repeat bg-cover bg-center pb-3 md:mt-20 mt-10">
      <section className="md:pt-20 md:px-20 py-5 px-5">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 place-items-center text-primary-100">
          <div>
            <img className="max-w-[250px] mb-3 md:mb-5 md:w-full" src="./../src/assets/logo.png" alt="logo cinemundo" />
            <p className="text-primary-100 text-dynamic-p max-w-[250px] md:w-full">
              Stay connected with us and lets know more stories about newmovies
              and More Explorer Us for get it.
            </p>
          </div>
          <ul>
            <li className="font-bold text-dynamic-li mb-3">Top Links</li>
            <li>Home</li>
            <li>Movies</li>
          </ul>
          <ul>
            <li className="font-bold text-dynamic-li mb-3">Information</li>
            <li>Sign up</li>
            <li>Login</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li className="font-bold text-dynamic-li mb-3">Services</li>
            <li>Movies</li>
            <li>NewsLetter</li>
          </ul>
          <ul>
            <li className="font-bold text-dynamic-li mb-3">Security</li>
            <li>Terms and Condition</li>
            <li>Provacy Policy</li>
            <li>Contact us</li>
          </ul>
        </div>
      </section>
      <Copyright/>
    </footer>
  );
};

export default Footer;

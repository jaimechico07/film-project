import React from "react";
import SectionHero from "./section-hero/SectionHero";
import SectionTrending from "./section-trending/SectionTrending";
import SectionContinueWatching from "./section-Continue-Watching/SectionContinueWatching";
import SectionPopular from "./section-popular/SectionPopular";
import SectionTop from "./section-top/SectionTop";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
    <Header/>
      <main>
        <SectionHero />
        <SectionTrending />
        <SectionContinueWatching />
        <SectionTop />
        <SectionPopular />
      </main>
      <Footer />
    </>
  );
};

export default Home;

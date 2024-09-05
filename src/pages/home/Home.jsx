import React from "react";
import SectionHero from "./section-hero/SectionHero";
import SectionTrending from "./section-trending/SectionTrending";
import SectionContinueWatching from "./section-Continue-Watching/SectionContinueWatching";



const Home = () => {
  return (
        <main>
          <SectionHero />
          <SectionTrending/>
          <SectionContinueWatching/>
        </main>
  );
};

export default Home;

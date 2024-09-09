import React from "react";
import SectionHero from "./section-hero/SectionHero";
import SectionTrending from "./section-trending/SectionTrending";
import SectionContinueWatching from "./section-Continue-Watching/SectionContinueWatching";
import SectionPopular from "./section-popular/SectionPopular";



const Home = () => {
  return (
        <main>
          <SectionHero />
          <SectionTrending/>
          <SectionContinueWatching/>
          <SectionPopular/>
        </main>
  );
};

export default Home;

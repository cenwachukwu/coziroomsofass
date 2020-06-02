import React from 'react';
import Carrousel from '../carrousel/carrousel';
import PillBox from '../homePagePills/homePagePills';
import HomeCarrousel from '../homeCarrousel/homeCarrousel';

const Home = () => {
  return (
    <div className="Home">
      <HomeCarrousel />
      <PillBox />
    </div>
  );
};

export default Home;

import React from 'react';
import Carrousel from '../carrousel/carrousel';
import PillBox from '../homePagePills/homePagePills';

const Home = () => {
  return (
    <div className="Home">
      <Carrousel />
      <PillBox />
    </div>
  );
};

export default Home;

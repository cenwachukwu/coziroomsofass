import React, { useState } from 'react';
import { Link } from '@reach/router';
// import './carrousel.scss';
import Slider from './slider';

// images

import loveseat from '../../utils/carrouselImg/loveseat.jpg';
import recliner from '../../utils/carrouselImg/recliner.jpg';
import sectional from '../../utils/carrouselImg/sectional.jpg';
import sofa from '../../utils/carrouselImg/sofa.jpg';

// import images from './image';

const Carrousel = () => {
  const images = [loveseat, recliner, sectional, sofa];

  return (
    <div className="Carrousel">
      <Slider slides={images} />
    </div>
  );
};

export default Carrousel;

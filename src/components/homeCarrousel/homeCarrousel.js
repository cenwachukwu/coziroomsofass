import React, { useState } from 'react';
import './homeCarrousel.scss';

// reactStrap
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
  {
    src:
      'https://res.cloudinary.com/cenwachukwu/image/upload/v1591050853/roomsofas/loveseat/2740338/27403-38-35-T782_csgjv1.jpg',
    altText: 'sofalovseat',
    caption: ' ',
  },
  {
    src:
      'https://res.cloudinary.com/cenwachukwu/image/upload/v1591052958/roomsofas/loveseat/7130438/71304-38-35-T820_tppmby.jpg',
    altText: 'sofaloveseat',
    caption: ' ',
  },
  {
    src:
      'https://res.cloudinary.com/cenwachukwu/image/upload/v1591060498/roomsofas/loveseat/9910138/99101-38-35_fyiyta.jpg',
    altText: 'sofaloveseat',
    caption: ' ',
  },
  {
    src:
      'https://res.cloudinary.com/cenwachukwu/image/upload/v1591049104/roomsofas/loveseat/1660138/16601-38-35-T004_y68oy3.jpg',
    altText: 'sofaloveseat',
    caption: ' ',
  },
  {
    src:
      'https://res.cloudinary.com/cenwachukwu/image/upload/v1591048681/roomsofas/loveseat/8721338/87213-38-35_uzrmed.jpg',
    altText: 'sofaloveseat',
    caption: ' ',
  },
  {
    src:
      'https://res.cloudinary.com/cenwachukwu/image/upload/v1591061503/roomsofas/sectional/45200-16-67/45200-16-67_y0maup.jpg',
    altText: 'sectional',
    caption: ' ',
  },
  {
    src:
      'https://res.cloudinary.com/cenwachukwu/image/upload/v1591063884/roomsofas/sectional/83204/83204__71476.1549999426_bttz8c.jpg',
    altText: 'sectional',
    caption: ' ',
  },
];

const HomeCarrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <img src={item.src} alt={item.altText} style={{ width: '100%' }} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="tempCarrouselPic">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

export default HomeCarrousel;

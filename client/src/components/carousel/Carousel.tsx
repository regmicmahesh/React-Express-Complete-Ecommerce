import React from "react";

import CarouselItem, { CarouselItemProps } from "./CarouselItem";

interface CarouselProps {
  items: CarouselItemProps[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {items.map((el) => (
          <CarouselItem {...el} />
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;

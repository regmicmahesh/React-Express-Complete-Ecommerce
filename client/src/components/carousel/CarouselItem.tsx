import React from "react";

export interface CarouselItemProps {
  src: string;
  alt: string;
  title: string;
  paragraph: string;
  active?: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = (carouselItemProps) => {
  const { src, alt, active, title, paragraph } = carouselItemProps;
  return (
    <div className={`carousel-item ${active && "active"} `}>
      <img className="d-block w-100" src={src} alt={alt} />
      <div className="carousel-caption text-dark d-none d-md-block">
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

CarouselItem.defaultProps = {
  active: false,
};

export default CarouselItem;

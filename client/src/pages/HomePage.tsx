import React from "react";
import Carousel from "../components/carousel/Carousel";
import CarouselItem, {
  CarouselItemProps,
} from "../components/carousel/CarouselItem";
import { IFeaturedItemProps } from "../components/FeatItem";
import FeaturedItems from "../components/FeaturedItems";
import Categories, { CategoryItem } from "../components/nav/Categories";

const HomePage: React.FC = () => {
  const carouselItems: CarouselItemProps[] = [
    {
      src:
        "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Screen-Shot-2015-09-09-at-9.27.47-PM1-e1452260936590-1200x600.png",
      alt: "First Image",
      active: true,
      title: "Hello",
      paragraph: "Something",
    },
    {
      src:
        "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Screen-Shot-2015-09-09-at-9.27.47-PM1-e1452260936590-1200x600.png",
      alt: "First Image",
      title: "Hello",
      paragraph: "Something",
    },
  ];

  const categoryItems: CategoryItem[] = [
    { name: "Something", to: "/" },
    { name: "Something", to: "/" },
    { name: "Something", to: "/" },
  ];

  const topSellingItems: IFeaturedItemProps[] = [
    {
      imageURL:
        "https://www.beatnikshoes.com/wp-content/uploads/2019/05/2019_05_16_0276-2-300x300.jpg",
      product_name: "Boots",
      stock: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum possimus debitis illo blanditiis voluptatum.",
    },
    {
      imageURL:
        "https://www.beatnikshoes.com/wp-content/uploads/2019/05/2019_05_16_0276-2-300x300.jpg",
      product_name: "Boots",
      stock: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum possimus debitis illo blanditiis voluptatum.",
    },
    {
      imageURL:
        "https://www.beatnikshoes.com/wp-content/uploads/2019/05/2019_05_16_0276-2-300x300.jpg",
      product_name: "Boots",
      stock: 30,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores earum possimus debitis illo blanditiis voluptatum.",
    },
  ];

  return (
    <div className="HomePage container mt-md-3">
      <div className="row">
        <div className="col-md-3 col-sm-12 col-lg-3 mb-3">
          <Categories categoryItems={categoryItems} />
        </div>
        <div className="col-sm-12 col-md-9 col-lg-9">
          <section id="search" className="row px-5">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>{" "}
            <button className="btn btn-primary btn-raised">Search</button>
          </section>

          <section id="carousel" className="mt-3">
            <Carousel items={carouselItems} />
          </section>
        </div>
      </div>

      <FeaturedItems items={topSellingItems} />
    </div>
  );
};

export default HomePage;

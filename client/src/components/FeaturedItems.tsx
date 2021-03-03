import React from "react";
import FeaturedItem, { IFeaturedItemProps } from "./FeatItem";

interface IFeaturedItems {
  items: IFeaturedItemProps[];
}

const FeaturedItems: React.FC<IFeaturedItems> = ({ items }) => {
  return (
    <section id="top-selling-item" className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="card-header">
            <h3>Top Selling Items</h3>
          </div>
          <div className="mt-2">
            <div className="row">
              {items.map((el) => {
                const { imageURL, product_name, stock, description } = el;
                return (
                  <FeaturedItem
                    key={product_name}
                    imageURL={imageURL}
                    product_name={product_name}
                    stock={stock}
                    description={description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;

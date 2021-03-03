import React from "react";

export interface IFeaturedItemProps {
  product_name: string;
  description?: string;
  imageURL: string;
  stock: number;
}

const FeaturedItem: React.FC<IFeaturedItemProps> = ({
  product_name,
  description,
  imageURL,
  stock,
}) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={imageURL} alt={product_name} className="card-img-top" />
        <div className="card-body">
          <h4>{product_name}</h4>
          <p>{description?.slice(0, 100) + "..."}</p>
          <h4>
            <span className="text-danger">Rs. 300 </span>
            <h5 className="float-right">
              {stock > 0 ? "In Stock" : "Out of Stock"}
            </h5>
          </h4>
        </div>
      </div>
    </div>
  );
};

FeaturedItem.defaultProps = {
  description: "No description available",
};

export default FeaturedItem;

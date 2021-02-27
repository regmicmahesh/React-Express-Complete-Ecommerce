import React from "react";
import { Link } from "react-router-dom";

export interface CategoryItem {
  to: string;
  name: string;
}

export interface CategoriesProps {
  categoryItems: CategoryItem[];
}

const Categories: React.FC<CategoriesProps> = ({ categoryItems }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="card-header">
          <h4 className="text-center">Categories</h4>
        </div>
        <ul className="list-group">
          {categoryItems.map((el) => (
            <a href={el.to}>{el.name}</a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;

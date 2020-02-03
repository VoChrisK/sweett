import React from 'react';
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  library,
  icon,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";

const CategoryIndexItem = ({ category, idx }) => {

    return (
      <div className="category">
        <h1 className="cat-title">{category.title}</h1>
        <h1 className="cat-time">
          {Math.floor(category.actual / 60)}/{Math.floor(category.expected / 60)} minutes
        </h1>
        <h1 className="cat-progress">Progress: {category.progress}%</h1>
      </div>

    );
};

export default CategoryIndexItem;
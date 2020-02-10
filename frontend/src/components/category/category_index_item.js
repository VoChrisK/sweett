import React from 'react';

const CategoryIndexItem = ({ category, idx }) => {
    return (
      <div className="category">
        <h1 className="cat-title">{category.title}</h1>
        <h1 className="cat-time">
          {category.actual}/{category.expected} minutes
        </h1>
        <h1 className="cat-progress">Progress: {category.progress}%</h1>
      </div>

    );
};

export default CategoryIndexItem;
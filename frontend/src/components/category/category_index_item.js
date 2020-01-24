import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIndexItem = ({ category, idx }) => {
    return(
        <Link to="#" id={`cat${idx+1}`} className="category">
            <h1 className="cat-title">{category.title}</h1>
            <h1 className="cat-time">{category.actual}/{category.expected} minutes</h1>
            <h1 className="cat-progress">Progress: {category.progress}%</h1>
        </Link>
    );
};

export default CategoryIndexItem;
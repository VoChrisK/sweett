import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIndexItem = ({ category, idx }) => {
    return(
        <Link to="#" id={`cat${idx+1}`} className="category">
            <h1>{category.title}</h1>
            <h1>{category.actual}/{category.expected} minutes</h1>
            <h1>Progress: {category.progress}%</h1>
        </Link>
    );
};

export default CategoryIndexItem;
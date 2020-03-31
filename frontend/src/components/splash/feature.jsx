import React from 'react';

const Feature = ({ description, image, right, extra }) => {
    return (
        <section className={`feature-section ${right ? "right" : ""}`}>
            <p className="feature-description">{description}</p>
            <img className={`feature-image ${extra}`} src={image} />
        </section>
    );
};

export default Feature;
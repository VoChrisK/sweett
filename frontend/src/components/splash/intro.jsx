import React from 'react';

const Intro = () => {
    return (
        <section className="intro-section">
            <h1 className="intro-message">A combination of time tracking and goal setting</h1>
            <p className="intro-description">SWEETT is the ultimate app for software engineering job seekers. It combines elements from time tracking and goal setting that helps you stay focused, organized, and studious during your pursuit for employment. Stop juggling multiple apps to do one or the other. Simplify your job search.</p>
            <img className="gif" src={require("./../../assets/images/SWEETT-intro.gif")} />
        </section>
    );
};

export default Intro;
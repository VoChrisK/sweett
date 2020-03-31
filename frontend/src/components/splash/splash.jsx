import React from 'react';
import HeroContainer from './hero_container';
import About from './about';
import Feature from './feature';
import { feature1, feature2, feature3 } from './feature_info';
import Intro from './intro';
import SplashFooter from './splash_footer';

const Splash = () => {
    return (
        <div className="splash-page">
            <HeroContainer />
            <Intro />
            <Feature description={feature1.description} image={feature1.image} />
            <Feature description={feature2.description} image={feature2.image} right={true} extra="extra" />
            <Feature description={feature3.description} image={feature3.image} extra="vertical" />
            <About />
            <SplashFooter />
        </div>
    );
};

export default Splash;
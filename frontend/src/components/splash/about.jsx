import React from 'react';
import Profile from './profile';
import { chris, han, brian, herman } from './developer_info';

const About = () => {
    return (
        <div className="about-section">
            <h1 className="about-header">Meet the developers!</h1>
            <section className="profiles">
                <Profile image={chris.image} name={chris.name} github={chris.github} linkedin={chris.linkedin} />
                <Profile image={han.image} name={han.name} github={han.github} linkedin={han.linkedin} />
                <Profile image={brian.image} name={brian.name} github={brian.github} linkedin={brian.linkedin} />
                <Profile image={herman.image} name={herman.name} github={herman.github} linkedin={herman.linkedin} />
            </section>
        </div>
    )
};

export default About;
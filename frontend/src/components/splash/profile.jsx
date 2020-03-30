import React from 'react';

const Profile = ({ image, name, github, linkedin }) => {
    return (
        <div className="profile">
            <img className="profile-image" src={image} />
            <div className="profile-info">
                <h1 className="profile-name">{name}</h1>
                <div>
                    <a href={github}><i class="fab fa-github"></i></a>
                    <a href={linkedin}><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
};

export default Profile;
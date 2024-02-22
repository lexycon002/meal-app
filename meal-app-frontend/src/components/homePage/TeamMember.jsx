import React from 'react';
import './teamStyles.css';




function TeamMember({ name, role, imageSrc}) {

  return (
        <div className="team__view">
            <div className="team__view__img">
                <img src={imageSrc} alt="my_image" />
            </div>
            <div className="team__other__info">
                <p>{name}</p>
                <span>{role}</span>
            </div>
        </div>
    )
}

export default TeamMember;
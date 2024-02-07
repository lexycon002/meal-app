import React from 'react'
import './teamStyles.css';
import myImage from '../../assets/myImage03.png';
import TeamMember from './TeamMember';

function TeamList() {
  return (
    <div className="team__list__container">
        <div className="team__list__head__text">
            <h1>our team</h1>
        </div>
        <div className="team__list__gallery">
        <TeamMember name="Hammad Olamilekan" role="Frontend developer" imageSrc={myImage} />
        <TeamMember name="Hammad Olamilekan" role="Frontend developer" imageSrc={myImage} />
        <TeamMember name="Hammad Olamilekan" role="Frontend developer" imageSrc={myImage} />
        <TeamMember name="Hammad Olamilekan" role="Frontend developer" imageSrc={myImage} />
        </div>
    </div>
  )
}

export default TeamList
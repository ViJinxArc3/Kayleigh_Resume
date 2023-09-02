import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.instagram.com/kayleigh_3xbotha/"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></a>
      <a href="https://www.linkedin.com/in/kayleigh-botha-158536206/"><FontAwesomeIcon icon={faLinkedin} className="social-icon"/></a>
      <a href="https://web.facebook.com/kayleigh.botha.1"><FontAwesomeIcon icon={faFacebook} className="social-icon"/></a>
      <a href="https://github.com/ViJinxArc3"><FontAwesomeIcon icon={faGithub} className="social-icon"/></a>
    </div>
  );
}

function Profile(props) {
  return (
    <div className='sidebar'>
      <div className="profile-container">
        <img className="profile-img" src={props.image} alt={props.name} />
      </div>
      <div className="profile-info">
        <h2>{props.name}</h2>
        <h3>{props.capacity}</h3>
        <p>{props.location}</p>
        <p><a href="bothakayleigh@gmail.com">{props.address}</a></p>
        
      </div>
      <div className='line'></div>
     
          <SocialIcons />

      <div className='line'></div>   

      <p className='git-link'>The full source code can be found in <a href='https://github.com/ViJinxArc3'>my Github repo.</a></p>
        
    </div>
  );
}


export default Profile;


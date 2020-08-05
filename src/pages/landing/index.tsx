import React from 'react';

// style
import './style.css';

// images
import LogoImg from '../../assets/images/logo.svg';
import LandImg from '../../assets/images/landing.svg';

// icons
import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

function Landing() {
    return(
      <div id="page-landing">
          <div id="page-landing-content" className="container">
              <div className="logo-container">
                  <img src={LogoImg} alt="proffy-brand"/>
                  <h2>Sua Plataforma de estudos online.</h2>
              </div>
              <img src={LandImg} alt="proffy-landing" className="hero-image"/>
              <div className="buttons-container">
                  <a href="http://localhost" className="study">
                      <img src={studyIcon} alt="study proffy app"/>
                      Estudar
                  </a>

                  <a href="http://localhost" className="give-classes">
                      <img src={giveClassesIcon} alt="give classes"/>
                      Estudar
                  </a>

                  <span className="total-connections">
                      Total de 2000 connexões já realizadas
                      <img src={purpleHeartIcon} alt="total connections"/>
                  </span>
              </div>
          </div>
      </div>
    );
}

export default Landing;
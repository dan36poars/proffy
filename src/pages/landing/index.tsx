import React from 'react';
import { Link } from 'react-router-dom';

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
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="proffy-brand" />
                    <h2>Sua Plataforma de estudos online.</h2>
                </div>
                <img src={LandImg} alt="proffy-landing" className="hero-image" />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="study proffy app" />
                      Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="give classes" />
                      Dar Aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 2000 connexões já realizadas
                      <img src={purpleHeartIcon} alt="total connections" />
                </span>
            </div>
        </div>
    );
}

export default Landing;
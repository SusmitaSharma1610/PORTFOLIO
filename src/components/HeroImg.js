import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I am Susmita sharma</p>
            <h1>Full stack Enthusiast.</h1>
            <div>
             <Link to="/project" className="btn">PROJECTS</Link>
             <Link to="/Contact" className="btn btn-light">CONTACT</Link>   
            </div>
        </div>
    </div>
  )
};

export default HeroImg;
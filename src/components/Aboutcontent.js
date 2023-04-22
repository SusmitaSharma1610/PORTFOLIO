import "./AboutcontentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import about_1 from "../assets/about_1.png"
const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="img-container">

          <div className="img-stack top">
            <img src={about_1} className="img" alt="true" />

          </div>


        </div>
      </div>
      <div className="right">
        <h1>About Me</h1>
        <p>As an IT student, I am a dedicated learner with a passion for exploring the vast and ever-evolving world of technology. I possess a sharp analytical mind and a keen problem-solving ability, which has allowed me to excel in various coursework and projects. I am skilled in a variety of programming languages and platforms, and my technical skills are complemented by my ability to work both independently and as part of a team. I have a strong creative streak that is always seeking to innovate and improve existing systems, and my attention to detail ensures that my work is of the highest quality. My portfolio showcases my proficiency in various areas of IT, including web development, Python project and Machine Learning project. I am eager to continue expanding my knowledge and skills in the field of IT and to make a meaningful impact in the industry.</p>
        {/* <Link to="/Contact">
          <button className="btn">contact</button>
        </Link> */}
      </div>
      {/* <div className="left">
        <div className="img-container">

          <div className="img-stack top">
            <img src={about_1} className="img" alt="true" />

          </div>


        </div>
  </div> */}

    </div>
  );
};

export default Aboutcontent;


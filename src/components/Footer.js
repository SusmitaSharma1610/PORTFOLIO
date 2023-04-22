import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>E-3 GreenGroves Society.</p>
                            <p>Pune</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            8-2000-126-58 </h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginR: "2rem" }} />
                            sushmitasharma1610@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>D.Y. Patil College of engineering</h4>
                    <p>Pursuing BEE in IT.</p>
                    <div className="social">
                        <a href="https://www.instagram.com/">
                            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://github.com/SusmitaSharma1610">
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/feed/">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://twitter.com/home">
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Footer;
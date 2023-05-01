import "./FooterStyle.css";
import { FaFacebook, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";
import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>272 Moradabad,UttarPradesh</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    9528295631
                    </h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    abhijeetsingh5631@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About the Service</h4>
                <p>Our organization will help you,If u stuck anywhere.<br/>Let's connect & Grow together.</p>
                <div className="social">
                    <NavLink to="https://www.linkedin.com/in/abhijeetsde/"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></NavLink>
                    <NavLink to="https://www.instagram.com/singhabhijeet07/ "><FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/></NavLink>
                    <NavLink to="https://twitter.com/singhabhijee07"><FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/></NavLink>
                    <NavLink to="https://www.facebook.com/Abhi Jeet/"><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
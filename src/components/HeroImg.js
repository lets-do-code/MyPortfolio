import "./HeroImgStyle.css";
import homeImg from "../assets/fullSize.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
    
        <div className="mask">
            <img className="into-img" src={homeImg} alt="homeImg"/>
        </div>

        <div className="content">
        <p>I'M A FREELANCER</p>
        <h1>React Developer</h1>
        
        <div className="button">
          <Link to="/project" className="btn">Project</Link>
          <Link to="/contact" className="btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg
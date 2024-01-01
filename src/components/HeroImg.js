import "./HeroImgStyle.css";
import { Typewriter } from 'react-simple-typewriter'
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
        <h1 style={{color:" #f8d912", whiteSpace:"nowrap"}}>
        <Typewriter
            words={['React Native Developer','Android Developer','Web Developer','FullStack Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </h1>
        
        <div className="button">
          <Link to="/project" className="btn">Project</Link>
          <Link to="/contact" className="btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg

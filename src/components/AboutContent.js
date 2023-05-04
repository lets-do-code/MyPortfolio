import "./AboutContentStyle.css"
import profileImage from "../assets/Profile.jpg"

import { Link } from "react-router-dom"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        
            <h1>Who Am I ?</h1>
            <p>My name is Abhijeet Singh. I'm during B.Tech From Moradabad Institute Of Technology.Currently I'm Learning MERN Stack.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <img src={profileImage} className="top" alt="true"/>   
        </div>
    </div>
  )
}

export default AboutContent
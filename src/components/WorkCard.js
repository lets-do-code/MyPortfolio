import "./WorkCardStyle.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.projImg} alt="projImage"/>
        <h2 className="project-title">{props.projTitle}</h2>
        <div className="project-detail">
            <p>{props.projDetail}</p>
            <div className="project-btn">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.source} className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
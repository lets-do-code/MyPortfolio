import "./WorkCardStyle.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react'


const Work = () => {
  return (
    <div className="work_container">
    
        <h1 className="project-heading">Project</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind)=>{ 
                return(
                    <WorkCard
                    key={ind}
                    projImg={val.projImg}
                    projTitle={val.projTitle}
                    projDetail={val.projDetail}
                    view={val.view}
                    source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work
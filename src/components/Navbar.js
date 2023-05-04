import "./NavbarStyle.css"
import resumePDF from '../assets/Resume.pdf';

import React, { useState } from 'react'
import {FaBars, FaDownload, FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom'


const Navbar = () => {

    const[click,setClick]=useState(false);
    const handleOnClick=()=>setClick(!click);


    const [color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor)


   
    const downloadResume=()=> {
          fetch(resumePDF)
            .then((response) => response.blob())
            .then((blob) => {
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'resume.pdf';
              a.click();
              URL.revokeObjectURL(url);
            });
        }

  return (
    <div className={color ? "header header-bg":"header"}>
    
        <Link to="/">
            <h1>AbhiJeet</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link onClick={downloadResume}><FaDownload style={{color:"Blue", marginRight:"5px"}}/>Resume</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleOnClick}>
        {click ?(<FaTimes size={20} style={{color:"#fff"}}/>
        ) : (
            <FaBars size={20} style={{color:"#fff"}}/>
        )}
            
            
        </div>
    </div>
  )
}

export default Navbar
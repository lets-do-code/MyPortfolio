import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <div>
       <Helmet>
          <title>About</title>
        </Helmet>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="Let's Know More About Me"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
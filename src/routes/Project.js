import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'
import { Helmet } from 'react-helmet'

const Project = () => {
  return (
    <div>
     <Helmet>
          <title>Project</title>
      </Helmet>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Here Is The Project I've Worked On"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
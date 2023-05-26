import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from '../components/Work'
import { Helmet } from 'react-helmet'


const Home = () => {
  return (
    <div>
     <Helmet>
          <title>Home</title>
        </Helmet>
      <Navbar/>
      <HeroImg/> 
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
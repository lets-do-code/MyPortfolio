import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <div>
     <Helmet>
          <title>Contact</title>
        </Helmet>
      <Navbar/>
      <HeroImg2 heading="CONTACT" text="Let's have a Chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
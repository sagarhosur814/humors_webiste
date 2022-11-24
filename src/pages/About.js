import React from 'react'
import Hero2 from '../components/Hero2'
import NavMain from '../components/NavMain'
import BackedBy from '../components/BackedBy'
import AboutContent from '../components/AboutContent'
import FooterMain from '../components/Footer'
import Founders from '../components/Founders'
import Advisors from '../components/Advisors'
import Banner from '../components/Banner'


const About = () => {
  return (
    <main>
      <NavMain />
      <Hero2 heading="Who we are ?" />
      <AboutContent />
      <BackedBy />
      <Founders />
      <Advisors />
      <FooterMain />
     
    </main>
  )
}

export default About
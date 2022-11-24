import React from 'react'
import BackedBy from '../components/BackedBy'
import FeaturedIn from '../components/FeaturedIn'
import Founders from '../components/Founders'
import HeroMain from '../components/HeroMain'
import NavMain from '../components/NavMain'
import AboutImage from '../assets/about_shape.png'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ContacBanner from '../components/ContacBanner'
import ProductInto from '../components/ProductInto'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
      <NavMain />
      <HeroMain />
      <FeaturedIn />
      <ProductInto />

      <div className="home_page_about">
        <div className="container">
          <div className="row">
            <div className="left">
              <img src={AboutImage} alt="" />
            </div>
            <div className="right">
              <h4>Who we are</h4>
              <h2>Founded in 2021 by IIIT Alumni to develop innovative products in <span> Home Healthcare.</span> </h2>
              <p>We aim to combine our expertise in Artificial Intelligence, Deep Tech, and IoT with Clinical research to develop innovative yet easy-to-use healthcare platforms.</p>
              <Link to="/about"><button className='btn btn-red'>Learn more</button></Link>
            </div>
          </div>
        </div>
      </div>
      <BackedBy />
      <Founders />
      <ContacBanner />
      <Footer />
    </>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

import Image1 from '../assets/featured_in/1.png'
import Image2 from '../assets/featured_in/2.png'
import Image3 from '../assets/featured_in/3.png'
import Image4 from '../assets/featured_in/4.png'
import Image5 from '../assets/featured_in/5.png'
import Zoom from 'react-reveal/Zoom';

const FeaturedIn = () => {
  return (
    <div className="featured_in_container">
      <div className="shape1"></div>
      <div className="shape2"></div>
        <div className="container">
            <div className="header">
                <h2>We are <span>featured</span> in</h2>
                <p>The media has also been covering us!</p>
              
            </div>
            <div className="row">
                <Link><img src={Image1} alt="" /></Link>
                <Link><img src={Image2} alt="" /></Link>
                <Link><img src={Image3} alt="" /></Link>
                <Link><img src={Image4} alt="" /></Link>
                <Link><img src={Image5} alt="" /></Link>
            
            </div>
        </div>
    </div>
  )
}

export default FeaturedIn
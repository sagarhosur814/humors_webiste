import React from 'react'
import AboutImage from '../assets/about_shape.png'
import AboutImage2 from '../assets/about_shape2.png'
import AboutImage3 from '../assets/about_shape3.png'

const AboutContent = () => {
  return (
    <div className="about_content_wrapper">
        <div className="container">
           <div className="row_first">
             <div className="left">
                <img src={AboutImage} alt="" />
             </div>
             <div className="right">
                <h2>
                    Founded in 2021 by IIIT Alumni to develop innovative products in Home Healthcare. 
                </h2>
                <p>
                 We aim to combine our expertise in Artificial Intelligence, Deep Tech, and IoT with Clinical research to develop innovative yet easy-to-use healthcare platforms.
                </p>
             </div>
           </div>

           <div className="row_sec">
             <div className="right">
             <h2>
                 At Humors we are trying to help you achieve exactly the same by simple blow of single breath into our device.
                </h2>
                <p>
                Based on your unique biomarkersignature we share your entire health data on a mobile app, and also provide actionable suggestions for improvement.
                </p>
             </div>
             <div className="left">
                 <img src={AboutImage2} alt="" />
             </div>
           </div>



           <div className="row_first">
             <div className="left">
                <img src={AboutImage3} alt="" />
             </div>
             <div className="right">
                <h2>
                We are a dynamic and focused team of young entrepreneurs who aim to make sophisticated yet affordable technologies for personal healthcare, accessible to every individual.
                </h2>
                <p>
                Many of us between the age of 20s and 50s are at the risk of getting lifestyle diseases due to unhealthy habits and environmental factors. Monitoring your health on a routine basis is the only way to catch these critical disorders at an early stage

                </p>
             </div>
           </div>

          
        </div>
    </div>
  )
}

export default AboutContent
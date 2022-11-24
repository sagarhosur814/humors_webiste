import React from 'react'
import Image1 from '../assets/team_1.png'
import Image2 from '../assets/team_2.png'

const Founders = () => {
  return (
    <div className="founders_container">
        <div className="container">
            <div className="row">
                <div className="left">
                  <h4>Meet our founders</h4>
                  <h2>Meet our founders, making healthcare <span>simple and affordble</span></h2>
                  <p>We aim to combine our expertise in Artificial Intelligence, Deep Tech, and IoT with Clinical research to develop innovative yet easy-to-use healthcare platforms.</p>
                </div>
                <div className="right">
                  <div className="team_box_container">
                      <div className="team_image_container">
                        <img src={Image1} alt="" />
                      </div>
                      <h4>Ankur Jaiswal</h4>
                     <p>Co-Founder and CEO</p>
                  </div>


                  <div className="team_box_container">
                      <div className="team_image_container">
                        <img src={Image2} alt="" />
                      </div>
                     <h4>Suchita Kanaldekar</h4>
                     <p>Co-Founder and CSO</p>
                  </div>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Founders
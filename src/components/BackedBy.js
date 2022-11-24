import React from 'react'
import Image1 from '../assets/backed_by/1.png'
import Image2 from '../assets/backed_by/2.png'
import Image3 from '../assets/backed_by/3.png'
import Image4 from '../assets/backed_by/4.png'
import Image5 from '../assets/backed_by/5.png'
const BackedBy = () => {
  return (
    <div className="backed_by_container">
        <div className="container">
            <div className="header">
                <h2>Partnered with  <span>Leading Organizations</span></h2>
                <p>
                  Tools and Strategies for Business Growth Are Shared By Business Builders And Entrepreneurs
                </p>
            </div>
            <div className="row">
                <div className="box">
                  <img src={Image1} alt="" />
                </div>
                <div className="box">
                  <img src={Image2} alt="" />
                </div>
                <div className="box">
                  <img src={Image3} alt="" />
                </div>
                <div className="box">
                  <img src={Image4} alt="" />
                </div>
                <div className="box">
                  <img src={Image5} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackedBy
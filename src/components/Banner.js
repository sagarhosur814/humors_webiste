import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner">
        <div className="container">
            <div className="row">
              <div className="left">
                <div className="text_container">
                    <h2>A simple solution for entire family's health screening at home</h2>
                    <Link className='btn-gradient-red'>Learn more</Link>
                </div>
              </div>
              <div className="right">

              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
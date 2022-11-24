import React from 'react'
import { Link } from 'react-router-dom'

const ContacBanner = () => {
  return (
    <div className="contact_banner">
        <div className="container">
            <div className="left">
                <h2>Have Any Queries.   <br /> No Worries.</h2>
                <p>Please feel free to connect with us.</p>
                <Link to="/contact"><button className='btn-outline'>Contact us</button></Link>
            </div>
        </div>
    </div>
  )
}

export default ContacBanner
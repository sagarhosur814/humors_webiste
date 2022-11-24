import React from 'react'
import { Link } from 'react-router-dom'
import ProductImage from '../assets/product_image.png'

const ProductInto = () => {
  return (
    <div className="product_intro">
        <div className="container">
            <div className="row">
                <div className="left">
                    <img src={ProductImage} alt="" />
                </div>
                <div className="right">
                    <h4>Introducing</h4>
                    <h2>Respyr</h2>
                    <p>
                    World’s first non-invasive device for routine health check-up at home.
                    Screen multiple lifestyle diseases related to heart, kidney, liver, and lung by simply exhaling into the device
                    </p>
                    <Link to="#">
                        <button className='btn-gradient-red'>Learn more</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductInto
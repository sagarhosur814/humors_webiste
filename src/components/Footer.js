import React from 'react'
import FooterImage from '../assets/footer_logo.svg'
import { Link } from 'react-router-dom'
import {TiSocialFacebook,TiSocialLinkedin,TiSocialTwitter} from 'react-icons/ti'
import {MdLocationPin,MdMail} from 'react-icons/md'
import {TiLocation} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className="footer_main">
        <div className="container">
            <div className="row">
                <div className="left">
                     <div className="logo_container">
                        <img src={FooterImage} className="footer_logo" alt="" />
                     </div>
                    <p>
                    We aim to combine our expertise in Artificial Intelligence, Deep Tech, and IoT with Clinical research to develop innovative yet easy-to-use healthcare platforms.
                    </p>
                    <div className="social_container">
                        <Link><TiSocialFacebook size={30}/></Link>
                        <Link to="//www.linkedin.com/company/humors/" target="_blank"><TiSocialLinkedin size={30}/></Link>
                        <Link to="//twitter.com/HumorsTech" target="_blank"><TiSocialTwitter size={30}/></Link>
                        
                    </div>
                </div>
                <div className="middle">
                    <h4>Get in touch</h4>
                    <div className="container_container">
                         <TiLocation size={25} /> <p>#60, 3rd Floor Wind Nal Tunnel Road, Murgeshpallya, Bangalore - 560017</p>
                    </div>
                    <div className="container_container">
                         <MdMail size={25} /> <p>connect@humorstech.com</p>
                    </div>
                </div>
                <div className="right">
                    <h4>General</h4>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link>Respyr</Link>
                        </li>
                        <li>
                            <Link>Team</Link>
                        </li>
                        <li>
                            <Link>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link>Privacy policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p className="copyright">
         © 2022 Humors Tech - ALL RIGHT RESERVED.
        </p>
    </div>
  )
}

export default Footer
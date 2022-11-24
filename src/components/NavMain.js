import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars, faTimes } from '@fortawesome/fontawesome-free-solid'
import {TiSocialFacebook,TiSocialLinkedin,TiSocialTwitter} from 'react-icons/ti'


const NavMain = () => {
 
  const [click, setClick] = useState(false);
    
  const handleClick =()=>setClick(!click);
  
  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=100){
      setColor(true)
    }else{
      setColor(false)
    }
  };
  window.addEventListener("scroll", changeColor);










  return (
    <div className="navbar_main">



      <div className="container">
        <div className="row">
          <Link to="/home" className="logo_container">
            <img src={Logo} alt="" />
          </Link>
          <div className={ click ? "nav_menu active" : "nav_menu"}>
            <ul>
              <li><Link to="/">Home</Link> </li>
              <li><Link to="/about">About us</Link></li>
              <li> <Link to="/contact" className='btn btn-primary'>Contact us</Link></li>

              <li className='mobile_contact_li'>
                 <div className="mobile_contact">
                    <div className="contact_details divide">
                       <Link>connect@humorstech.com</Link>
                    </div>
                    <div className="contact_details">
                       <h4>Follow us</h4>
                       <div className="social_contact">
                       <Link><TiSocialFacebook size={30}/></Link>
                        <Link to="//www.linkedin.com/company/humors/" target="_blank"><TiSocialLinkedin size={30}/></Link>
                        <Link to="//twitter.com/HumorsTech" target="_blank"><TiSocialTwitter size={30}/></Link>
                       </div>
                    </div>
                 </div>
              </li>
            </ul>

      

            
          </div>
          <div className="hamburger" onClick={handleClick}>


          {
              click ? (
                <FontAwesomeIcon icon={faTimes}  />
              ):
              (
                
                <FontAwesomeIcon icon={faBars}  />
                
              )
            }

           
            
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default NavMain
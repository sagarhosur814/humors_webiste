import React from 'react'
import Image1 from '../assets/team/1.png'
import Image2 from '../assets/team/2.png'
import Image3 from '../assets/team/3.png'
import Image4 from '../assets/team/4.png'

const Advisors = () => {
  return (
    <div className="advisors">
        <div className="container">
            <div className="wrapper">
                <div className="row_1">
                    <div className="advisor_container">
                        <div className="adv_box">
                            

                        <div className="team_image_container">
                            <img src={Image1} alt="" />
                        </div>
                        <h4>Dr.Kamlesh Jha</h4>
                        <p>MBBS, MD, DTM&H AIIMS, Patna</p>


                        </div>
                    


                        <div className="adv_box">
                            


                            <div className="team_image_container">
                                <img src={Image2} alt="" />
                            </div>

                          


                            <h4>  Mr. Abhishek Kishore Gupta</h4>
                            <p>CEO APAC & ME, Turbotic</p>
    
    
                            </div>
                    </div>
                    <div className="heading">
                        <h4>OUR ADVISORY BOARD</h4>
                        <h2>advised by the <span>world's best and brightest</span> in the fields of technology, entrepreneurship.</h2>
                        <p>
                             Our advisory Board is a valuable asset to our company, and we are grateful for their guidance and support.
                        </p>
                    </div>
                </div>
                <div className="row_2">
                <div className="advisor_container">
                       
                <div className="adv_box">
                            


                            <div className="team_image_container">
                                <img src={Image3} alt="" />
                            </div>
                            <h4>Pushkar Bhagwat</h4>
                            <p>7 Years Experience in Tech</p>
    
    

                            



                            </div>


                       
                            <div className="adv_box">
                            
                          


                            <div className="team_image_container">
                                <img src={Image4} alt="" />
                            </div>
                            <h4>  Dr.Tribhuwan Kumar</h4>
                            <p>MBBS, MD, AIIMS, Patna</p>
    
    
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advisors
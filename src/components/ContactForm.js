import React, { useEffect, useState ,useRef} from 'react'

import emailjs from '@emailjs/browser';


const ContactForm = () => {

   

      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sy2aahv', 'template_ydxzd7n', form.current, 'Z5ggwqMSxjPSeQh2J')
          .then((result) => {
              alert("Your message has been received");
          }, (error) => {
            alert(error.text);
          });
      };

  return (
    <div className="contact_form">
          <form ref={form} action="" onSubmit={sendEmail}>

            <div className="form-group">
            <div className="input-group">
                    <input type="text" placeholder='Full name *'  name="user_name"  required/>
                    {/* <small>Please fill out this field </small> */}
                </div>
                <div className="input-group">
                    <input type="email" placeholder='Email *'  name="user_email" required/>
                    {/* <small>Please fill out this field </small> */}
                </div>
            </div>
            
              
                <div className="input-group">
                    <textarea id="" name="message" placeholder='message'></textarea>
                </div>
                <div className="input-group">
                <button type='submit'   className='btn-primary'>Submit</button>
                </div>

                {/* <div className="message">
                    <h3>Thank you</h3>
                    <p>Your message has been received</p>
                </div> */}
            </form>

    </div>
  )
}

export default ContactForm


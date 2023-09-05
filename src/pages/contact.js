import WithComponent from "../hoc/MainLayout"
import './contact.css'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';



 function Contact()
{
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y7vesna', 'template_i6yqenb', form.current, 'YWyxiRN6xRAtdk0bN')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return(
        <div className="contactusContainer">
            <form ref={form} onSubmit={sendEmail}>
                <h3 style={{color:'white'}}>Get in touch</h3>
                <input style={{color:'black'}} type="text" name="from_name" id="element_1_form" placeholder="your name" required/>
                <input style={{color:'black'}} type="email" name="user_email" id="element_2_form" placeholder="your email" required />
                <textarea style={{color:'black'}} name="message" rows={4} placeholder="How can we help you?"/>
                <input style={{display:'none'}} name="to_name" id="to_name" value='Bahaa' />
                <input id="sub" type="submit" value="Send" />
            </form>
        </div>
    )
}
export default WithComponent(Contact);
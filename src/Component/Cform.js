import React, { useState,useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation,useNavigate } from 'react-router-dom';
import './App.css';
import Swal from "sweetalert2";
import Header from './Header';
import Footer from './Footer';
import '../Component/Style.css'
const Work1 = () => {

 
    
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4zxv3ii', 'template_ui45ktc', form.current, 'PfcGQRuSBkwrJZtLE')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                // title: 'Password Changed',
                text: "we got your query. our team respond within a day",
            })
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
          {/* contact */}
          <Header/>
          <br/><br/>
          <div className="container" id="contacts">
                <div class="row" >

                  

                </div>

                <div class="contact" id="contact">
                    <div class="containers">
                        <p>if you have any question, please contact us:)</p>
                        <form ref={form} onSubmit={sendEmail}> 
                            

                        <input
                              type="text"
                              class="text-field-name-1"
                              placeholder=" Enter your name"
                              name="from_name"
                          />
                          <input
                              type="text"
                              class="text-field-email-1"
                              placeholder="Enter your email"
                              name="from_email"

                          />
                        
                
               
                          <textarea
                              placeholder="Message:"
                              class="text-field-area-1"
                              name="message"
                          >

                          </textarea>

                  <center> <button className='btn btn-primary' type="submit" id="jj" value="Send">Submit</button></center>
                        </form>
                    </div>

                </div>
                <br />
            </div>
            <br/><br/>
            <Footer/>s
          </div>


    )
}

export default Work1

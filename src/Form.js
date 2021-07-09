import React from 'react';
import emailjs from 'emailjs-com';


export default function Form() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_u91vgi5', 'template_u7lctzf', e.target, 'user_t1rY7j4VtcFzisr1GxhUx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className='wrapper'>
    <div class="preloader">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div> 
    <form className="contact-form" onSubmit={sendEmail}>
      <div className='contact-form div'>
        <label>Name</label>
        <input type="text" placeholder='Name' name="name" /><br/>
        <label>Email</label>
        <input type="email" placeholder='Email Address' name="email" /><br/>
        <label>Message</label>
        <textarea placeholder='Your message' name="message"></textarea>
        <button type="submit" value="Send message">Send Message</button>
      </div>
    </form>
    </div>
  );
}

import React from 'react';
import { useState } from 'react';

const ContactForm = (props) => {
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    props.sendEmail(email,message);
    setEmail('');
    setMessage('');
  }

  return (
      <form className="contact-form" onSubmit={sendEmail}>
        <h2 className='mb-20'>Send me an Email</h2>
        <input className='inputItem' placeholder='Your email' type="email" name="from_name" autoComplete="off"
        value={email} onChange={(e)=> setEmail(e.currentTarget.value)}/>
        <textarea className='inputItem' placeholder='Write something...' name="message_html" 
        value={message} onChange={(e)=> setMessage(e.currentTarget.value)}/>
        <input disabled={!email.length || !message.length && true} className='inpBtn' type="submit" value="Send" />
      </form>
  );
};


export default ContactForm;
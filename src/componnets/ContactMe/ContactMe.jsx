import React, { Fragment } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';
import './ContactMeMedia.css';
import ContactForm from './ContactForm';
import SocialIcons from '../common/SocialIcons';
import Media from 'react-media';

const ContactMe = () => {

    const sendEmail = (email, message) => {
        emailjs.send('gmail', 'template_wXcmnPAR', { 'from_name': email, 'message_html': message }, 'user_zeHwsWsvW6M7EWS0Mj5gC')
            .then((result) => {
                if (result.text === 'OK') {
                    alert('Your message is sended');
                } else {
                    alert('Something wrong')
                }
            });
    }

    return (
        <div className="contactMe">
            <Media queries={{
                medium: "(max-width: 899px)",
                large: "(min-width: 899px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.large &&
                            <div className="contactMeBody">
                                <h1 className='mb-20'>Contacts</h1>
                                <div className='mb-20'>
                                    <h4>Armenia Yerevan</h4>
                                    <h4>tel. +374-95572075</h4>
                                </div>
                                <ContactForm sendEmail={sendEmail} />
                                <SocialIcons />
                            </div>}
                        {matches.medium &&
                            <div className='mediumBody'>
                                <div className="contactMeBody">
                                    <div className="contactMeBodyItem">
                                      <h1 className='mb-20'>Contacts</h1>
                                        <div className='mb-20'>
                                            <h4>Armenia Yerevan</h4>
                                            <h4>tel. +374-95572075</h4>
                                        </div>  
                                    </div>
                                    <SocialIcons />
                                </div>
                                <ContactForm sendEmail={sendEmail} />
                            </div>}
                    </Fragment>
                )}</Media>

        </div>
    )
}

export default ContactMe;
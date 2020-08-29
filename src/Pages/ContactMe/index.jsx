import React from 'react';
import emailjs from 'emailjs-com';
import './index.css';
import ContactForm from '../../componnets/common/ContactForm';
import SocialIcons from '../../componnets/common/SocialIcons';
import { Typography, message } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Title } = Typography;

const ContactMe = () => {
    const [form, setForm] = useState({
        from_name: '', message_html: ''
    })
    const [loading, setLoading] = useState(false)

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const success = () => {
        message.success("Your message is sended")
    }
    const warning = () => {
        message.warning("Something wrong, try again")
    }
    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)
        emailjs.send('gmail', 'template_wXcmnPAR', { 'from_name': form.from_name, 'message_html': form.message_html }, 'user_zeHwsWsvW6M7EWS0Mj5gC')
            .then((result) => {
                if (result.text === 'OK') {
                    setLoading(false)
                    success()
                    setForm({ ...form, from_name: '', message_html: '' })
                } else {
                    setLoading(false)
                    warning()
                }
            });
    }

    return (
        <div className="contactMe">
            <div className="contactMeBody">
                <div className='contacts'>
                    <Title level={3}>Contacts</Title>
                    <Title level={5}>Armenia Yerevan</Title>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <PhoneOutlined style={{ margin: '0 5px 7px 0' }} rotate={100} /><Title level={5}>+374-95572075</Title>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MailOutlined style={{ margin: '0 5px 7px 0' }} /><Title level={5}>matevossyan77@gmail.com</Title>
                    </div>
                    <SocialIcons />
                </div>
                <ContactForm loading={loading} form={form} changeHandler={changeHandler} sendEmail={sendEmail} />
            </div>
        </div>
    )
}

export default ContactMe;
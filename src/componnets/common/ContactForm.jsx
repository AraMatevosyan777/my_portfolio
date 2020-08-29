import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title } = Typography;

const ContactForm = ({sendEmail, form, changeHandler, loading}) => {

  return (
      <form className="contact-form">
        <Title level={3} className='mb-20'>Send me an Email</Title>
        <input className='inputItem' placeholder='Your email' type="email" name="from_name" autoComplete="off"
        value={form.from_name} onChange={changeHandler}/>
        <textarea className='inputItem' placeholder='Write something...' name="message_html" 
        value={form.message_html} onChange={changeHandler}/>
        <button onClick={sendEmail} disabled={!form.from_name.length || !form.message_html.length && true} className='inpBtn'>Send {loading && <LoadingOutlined />}</button>
      </form>
  );
};


export default ContactForm;
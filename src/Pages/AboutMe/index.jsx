import React from 'react';
import './index.css';
import { Typography } from 'antd';
const { Text, Title } = Typography;

const AboutMe = () => {
    return (
        <div className='aboutMe'>
            <div>
                <div className='mb-20'>
                    <Title level={4}>Hey there</Title>
                    <Title>I'm Ara Matevosyan</Title>
                    <h4 level={4}>Front End Developer | React.js Developer</h4>
                </div>
                <div className='aboutText'>
                    <Text style={{color: '#6c7279'}}>
                        I am a Junior Front end developer with a basic handle of technologies. I have a passion and a level of curiosity for technology and of course willingness to learn. Currently, I am looking for a job as a Junior Front end developer (for an internship opportunity I am also open) to gain new skills and become more professional in this field.
                    </Text >
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return(
        <div className='container'>
            <div className='aboutMe'>
                <div>
                    <h1 className='mb-20'>About Me</h1>
                    <div className='mb-20'>
                        <h4>Hey there</h4>
                        <h1>I'm Ara Matevosyan</h1>
                        <h4>Front End Developer | React.js Developer</h4>
                    </div>
                    <div className='aboutText'>
                        <p>
                        I am a Junior Front end developer with a basic handle of technologies. I have a passion and a level of curiosity for technology and of course willingness to learn. Currently, I am looking for a job as a Junior Front end developer (for an internship opportunity I am also open) to gain new skills and become more professional in this field. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
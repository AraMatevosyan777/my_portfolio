import React from 'react';
import './Skills.css';
import './SkillsMedia.css';
import myCv from '../../assets/cv/Ara Matevosyan.pdf';
import pdf from '../../assets/cv/file.png';

const Skills = () => {
    const skills = { js: '30', React: '30', Redux: '30', Html: '60', Css: '60' };

    return (
        <div className='skills'>
            <div className='w-100'>
                <h1 className='mb-20'>My Skills</h1>
                <div className='w-100'>
                    {Object.keys(skills).map(skill =>
                        <div className='skillsItem'>
                            <div className='skillTitle'><h4>{skill}</h4></div>
                            <div className="skillContainer">
                                <div className="skill" style={{ width: skills[skill] + '%' }}></div>
                            </div>
                        </div>)}
                </div>
                <div className="download">
                    <span>Download my resume here</span>
                    <a href={myCv} download>
                        <img src={pdf} alt='cv'/>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Skills;
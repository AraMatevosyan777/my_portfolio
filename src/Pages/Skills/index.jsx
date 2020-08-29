import React from 'react';
import './index.css';
import myCv from '../../assets/cv/Ara Matevosyan.pdf';
import CircleProgress from '../../componnets/common/CircleProgress';
import LineProgress from '../../componnets/common/Progress';
import { Tag, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Skills = () => {
    const skills = [
        { title: 'react', value: '60' },
        { title: 'redux', value: '60' },
        { title: 'node', value: '30' },
        { title: 'mongo', value: '30' },
        { title: 'express', value: '30' },
    ]
    const basicSkills = ['html', 'css', 'js']
    const basicSkillsItems = basicSkills.map(skill => <CircleProgress key={skill} title={skill} />)
    const skillsItems = skills.map(skill => <LineProgress key={skill.title} skill={skill} />)

    return (
        <div className='skills'>
            <div className='skillsInner'>
                <div className='basicSkillsItems df-jcc'>
                    {basicSkillsItems}
                </div>
                <div className='df-jcc'>
                    <div style={{ width: '60%' }}>
                        {skillsItems}
                    </div>
                </div>
            </div>
            <div className='df-jcc' style={{ marginBottom: '20px' }}>
                <Tag color="magenta">Ant Design</Tag>
                <Tag color="green">Firebase</Tag>
                <Tag color="volcano">Material UI</Tag>
                <Tag color="gold">Git</Tag>
                <Tag color="geekblue">less</Tag>
                <Tag color="red">Bootstrap</Tag>
                <Tag color="orange">Materialize</Tag>
                <Tag color="lime">Rest Api</Tag>
                <Tag color="cyan">sql</Tag>
                <Tag color="blue">sass</Tag>
            </div>
            <div className='df-jcc'>
                <a href={myCv} download>
                    <Button type="primary" shape="round" size='large'>
                        Download my resume here <DownloadOutlined />
                    </Button>
                </a>
            </div>
        </div>
    )
}

export default Skills;
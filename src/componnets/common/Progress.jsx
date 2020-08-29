import React from 'react'
import { Progress } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

const LineProgress = ({skill}) => {
  return (
    <div className='lineProgress'>
      <Title style={{marginRight: '10px',textAlign: 'right', width: '15%', color: '#87d068'}} level={4}>{skill.title}</Title>
      <Progress
      className='progress'
      strokeColor={{
        from: 'deeppink',
        to: 'deeppink',
      }}
      percent={skill.value}
      status="active"
      showInfo={false}
    />
    </div>
    
  )
}

export default LineProgress

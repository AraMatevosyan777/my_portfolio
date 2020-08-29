import React from 'react'
import './index.css'
import { Progress } from 'antd';

const CircleProgress = ({ title }) => {
    return (
        <Progress
        className='circleProgress'
            type="circle"
            strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
            }}
            percent={100}
            format={() => title}
        />
    )
}

export default CircleProgress

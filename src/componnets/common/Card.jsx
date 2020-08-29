import React from 'react';
import './index.css';
import { Card as Cardd, Tag, Drawer, Button, Typography } from 'antd';
import { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
const { Title } = Typography;

const Card = ({ myWork }) => {
    const [visible, setVisible] = useState(false)
    const [opacity, setOpacity] = useState(false)

    return (
        <Cardd
            onMouseEnter={()=> setOpacity(true)}
            onMouseLeave={()=> setOpacity(false)}
            hoverable
            className="portfolioCard"
            cover={
                <>
                    <img className='cardImg' src={myWork.src} alt='card'/>
                    <div style={{opacity: opacity ? 1 : 0 }} className='cardContent'>
                        <div className='cardTitle'>{myWork.title}</div>
                    </div>
                </>
            }
            extra={!visible &&
                <Button onClick={() => setVisible(true)} className='cardInfo' icon={<EllipsisOutlined />} size='small' />
            }
        >
            <Drawer
                className='cardDrawer'
                width='100%'
                title={myWork.title}
                placement="right"
                closable={true}
                onClose={() => setVisible(!visible)}
                visible={visible}
                getContainer={false}
                style={{ position: 'absolute' }}
            >
                <Title level={5}>Technologies</Title>
                <div style={{ marginBottom: 10 }}>
                    {myWork.lang.map((item, index) => <Tag key={index} color="cyan">{item}</Tag>)}
                </div>
                <a href={myWork.href} style={{ textDecoration: 'underline' }} target="_blank">
                    {myWork.title}
                </a>
            </Drawer>
        </Cardd>
    )
}

export default Card;
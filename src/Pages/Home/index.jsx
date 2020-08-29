import React from 'react';
import myImg from '../../assets/images/homePageImg.jpg';
import './index.css';
import SocialIcons from '../../componnets/common/SocialIcons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title, Text } = Typography;

const Home = () => {
    return(
        <div className='homePage'>
            <Avatar className='avatar' size={180} icon={
                <img src={myImg} alt='main-pic'/> || <UserOutlined />}/>
            <div className='homePageItem'>
                <Title>Hi, I'm Ara</Title>
                <Title level={4}>This is my portfolio page</Title>
            </div>
            <SocialIcons/>
        </div>
    )
}

export default Home;

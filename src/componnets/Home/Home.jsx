import React from 'react';
import myImg from '../../assets/images/homePageImg.jpg';
import './Home.css';
import SocialIcons from '../common/SocialIcons';

const Home = () => {
    return(
        <div className='homePage'>
            <div className='homePageImg'>
                <img src={myImg}/>
            </div>
            <div className='homePageItem'>
                <h1>Hi, I'm Ara</h1>
            </div>
            <SocialIcons/>
        </div>
    )
}

export default Home;
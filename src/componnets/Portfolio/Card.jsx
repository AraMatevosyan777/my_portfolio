import React from 'react';
import './Portfolio.css';
import './PortfolioMedia.css';

const Card = (props) => {

    return (
        <div className="portfolioCard">
            <a href={props.myWork.href} target="_blank" rel="noopener noreferrer" >
                <img className='cardImg' src={props.myWork.src} alt='card'/>
                <div className='cardContent'>
                    <div className='cardTitle'>{props.myWork.name}</div>
                    <div className='cardText'>{props.myWork.lang}</div>
                </div>
            </a>
        </div>

    )
}

export default Card;
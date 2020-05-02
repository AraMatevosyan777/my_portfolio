import React from 'react';
import './Portfolio.css';

const Card = (props) => {

    return (
        <div className="portfolioCard">
            <a href={props.myWork.href} target="_blank">
                <img className='cardImg' src={props.myWork.src}/>
                <div className='cardContent'>
                    <div className='cardTitle'>{props.myWork.name}</div>
                    <div className='cardText'>{props.myWork.lang}</div>
                </div>
            </a>
        </div>

    )
}

export default Card;
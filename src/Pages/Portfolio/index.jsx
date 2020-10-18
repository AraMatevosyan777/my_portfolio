import React from 'react';
import './index.css';
import Card from '../../componnets/common/Card';
import mogo from './../../assets/images/portfolio/Mogo.png';
import portfolio from './../../assets/images/portfolio/Portfolio.png';
import active_box from './../../assets/images/portfolio/active-box.png';
import to_do from './../../assets/images/portfolio/to-do.png';
import soc_net from './../../assets/images/portfolio/soc-net.png';
import exchange from './../../assets/images/portfolio/rates.png';
import movies from './../../assets/images/portfolio/movies.png';
import trello from './../../assets/images/portfolio/trello.png';
import beachResort from './../../assets/images/portfolio/beach-resort.png';
import weather from './../../assets/images/portfolio/weather.png';
import issues from './../../assets/images/portfolio/issues.png';
import dolla from './../../assets/images/portfolio/dolla.png';

const Portfolio = () => {
    const myWorks = [
        {id: 1, title: 'Mogo Page', lang: ['HTML','CSS', 'JS'], href:'https://aramatevosyan777.github.io/Mogo-page/', src:mogo},
        {id: 2, title: 'Active Box', lang: ['HTML','CSS', 'JS'], href:'https://aramatevosyan777.github.io/Active-Box/', src:active_box},
        {id: 3, title: 'Portfolio Page', lang: ['HTML','CSS', 'JS'], href:'https://aramatevosyan777.github.io/portfolio-page/', src:portfolio},
        {id: 4, title: 'Exchange Converter', lang: ['React', 'Redux', 'RestApi'], href:'https://aramatevosyan777.github.io/react-rates/', src:exchange},
        {id: 5, title: 'Social Network', lang: ['React','Redux', 'RestApi', 'TypeScript'], href:'https://aramatevosyan777.github.io/my-project/', src:soc_net},
        {id: 6, title: 'To Do List', lang: ['React', 'Firebase'], href:'https://aramatevosyan777.github.io/todo-list/', src:to_do},
        {id: 7, title: 'Movie Posters', lang: ['React', 'RestApi'], href:'https://aramatevosyan777.github.io/raect_movie_posters/', src:movies},
        {id: 8, title: 'Trello Clone', lang: ['React', 'Redux', 'Firebase'], href:'https://aramatevosyan777.github.io/trello/', src:trello},
        {id: 9, title: 'Beach Resort', lang: ['React'], href:'https://aramatevosyan777.github.io/beach-resort/', src:beachResort},
        {id: 10, title: 'Weather', lang: ['React', 'Redux','RestApi'], href:'https://aramatevosyan777.github.io/weather-app-ghpage/', src:weather},
        {id: 11, title: 'Issues Page', lang: ['React', 'Redux', 'Ant Design'], href:'https://aramatevosyan777.github.io/issues-ghpage/', src:issues},
        {id: 12, title: 'Dolla Page', lang: ['React', 'Styled Components'], href:'https://aramatevosyan777.github.io/dolla-page/', src:dolla},
    ]
    return (
        <div className="portfolio">
            {myWorks.sort((a, b) => (a.id < b.id ? 1 : -1)).map(myWork => <Card key={myWork.id} myWork={myWork}/>)}
        </div>
    )
}

export default Portfolio;
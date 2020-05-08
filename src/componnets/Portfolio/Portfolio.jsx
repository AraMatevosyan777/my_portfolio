import React from 'react';
import './Portfolio.css';
import './PortfolioMedia.css';
import Card from './Card';
import mogo from './../../assets/images/portfolio/Mogo.png';
import portfolio from './../../assets/images/portfolio/Portfolio.png';
import active_box from './../../assets/images/portfolio/active-box.png';
import to_do from './../../assets/images/portfolio/to-do.png';
import soc_net from './../../assets/images/portfolio/soc-net.png';
import exchange from './../../assets/images/portfolio/rates.png';
import movies from './../../assets/images/portfolio/movies.png';

const Portfolio = () => {
    const myWorks = [
        {id: 1, name: 'Mogo Page', lang: 'HTML/CSS/JS', href:'https://aramatevosyan777.github.io/Mogo-page/', src:mogo},
        {id: 1, name: 'Active Box', lang: 'HTML/CSS/JS', href:'https://aramatevosyan777.github.io/Active-Box/', src:active_box},
        {id: 2, name: 'Portfolio Page', lang: 'HTML/CSS/JS', href:'https://aramatevosyan777.github.io/portfolio-page/', src:portfolio},
        {id: 3, name: 'Exchange Converter', lang: 'React.js', href:'https://aramatevosyan777.github.io/react-rates/', src:exchange},
        {id: 4, name: 'Social Network', lang: 'React.js', href:'https://aramatevosyan777.github.io/my-project/', src:soc_net},
        {id: 5, name: 'To Do List', lang: 'React.js', href:'https://aramatevosyan777.github.io/todo-list/', src:to_do},
        {id: 6, name: 'Movie Posters', lang: 'React.js', href:'https://aramatevosyan777.github.io/raect_movie_posters/', src:movies},
    ]
    return (
        <div className="portfolio">
            {myWorks.map(myWork => <Card myWork={myWork}/>)}
        </div>
    )
}

export default Portfolio;
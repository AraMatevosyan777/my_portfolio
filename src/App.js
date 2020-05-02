import React from 'react';
import './App.css';
import Navbar from './componnets/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Home from './componnets/Home/Home';
import AboutMe from './componnets/AboutMe/AboutMe';
import Portfolio from './componnets/Portfolio/Portfolio';
import Skills from './componnets/Skills/Skills';
import ContactMe from './componnets/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Route path='/home' render={()=> <Home/>}/>
        <Route path='/about_me' render={()=> <AboutMe/>}/>
        <Route path='/portfolio' render={()=> <Portfolio/>}/>
        <Route path='/skills' render={()=> <Skills/>}/>
        <Route path='/contact_me' render={()=> <ContactMe/>}/>
      </div>
    </div>
  );
}

export default App;

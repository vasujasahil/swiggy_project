import './App.css';
import Header from './components/Header';

import { useState } from 'react';
import FeatureSection from './components/FeatureSection';
import PocketSection from './components/PocketSection';
import CitySection from './components/CitySection.js';
import ActionSection from './components/ActionSection';
import Footer from './components/Footer';
import Slider from './components/Slider';
import SignIn from './components/SignIn';
import Login from './components/Login';
// import LogIn from './components/LogIn';

function App (){

   

 
        return (
            <div className="App">
            <div className="header123"><Header/></div>
           
<div className="brightlow">
            <div className="feature123"><FeatureSection/></div>
            <div className="pocket123"> <PocketSection/></div>
            <div className="action123"> <ActionSection/></div>
            
            <div className="city123"><CitySection/></div>
            <div className="footer123"><Footer/></div>
            </div></div>
        
    );
}

export default App;

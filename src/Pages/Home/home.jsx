import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


// CSS 
import './home.css';

function Home() {

    // States 
    const [routeValue, setRouteValue] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const path = routeValue
        navigate(path)

    }, [routeValue])

    return (
        <div className='home-wrapper'>
            <div className='home-wrapper-container'>
                <div className='home-wrapper-container-menu'>
                    <span className='home-wrapper-container-menu-button' onClick={() => setRouteValue('bio')}>BIO</span>
                    <span className='home-wrapper-container-menu-button' onClick={() => setRouteValue('music')}>MUSIC</span>
                </div>
                <div className='home-wrapper-container-menu'>
                    <span className='home-wrapper-container-menu-button' onClick={() => setRouteValue('dates')}>DATES</span>
                    <span className='home-wrapper-container-menu-button' onClick={() => setRouteValue('shop')}>SHOP</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
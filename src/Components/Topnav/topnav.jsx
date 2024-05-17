import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import './topnav.css';

// React Icons
import { IoSearch } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";

function Topnav() {

    const [routeValue, setRouteValue] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const path = routeValue
        navigate(path)

    }, [routeValue])

    return (
            <div className="topnav-wrapper">
                <div className="topnav-wrapper-container-top">
                    <div className="topnav-wrapper-container-top-logo">
                        <span className="topnav-wrapper-top-title">OMER ADAM</span>
                    </div>
                    <div className="topnav-wrapper-container-top-navbar">
                        <span className='topnav-button' onClick={() => setRouteValue('/')}>HOME</span>
                        <span className='topnav-button' onClick={() => setRouteValue('')}>BIO</span>
                        <span className='topnav-button' onClick={() => setRouteValue('/dates')}>DATES</span>
                        <span className='topnav-button' onClick={() => setRouteValue('/shop')}>SHOP</span>
                        <span className='topnav-button' onClick={() => setRouteValue('/music')}>MUSIC</span>
                        <span className='topnav-button'>CONTACT US</span>
                        <span className='topnav-button-click'> <GoPersonFill /></span>
                        <span className='topnav-button-click'> <IoSearch /></span>
                    </div>
                </div>
            </div>
    );
}

export default Topnav;
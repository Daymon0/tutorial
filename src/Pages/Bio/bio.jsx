import React from "react";

// CSS
import './bio.css';

// Components
import Topnav from '../../Components/Topnav/topnav'

function Bio() {
    return (
        <div className="bio-wrapper">
            <Topnav />
            <div className="bio-wrapper-title">
                <span>BIO</span>
            </div>
        </div>
    );
}

export default Bio;
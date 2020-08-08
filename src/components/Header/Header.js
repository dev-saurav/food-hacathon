import React from 'react';
import './Header.css';
const Header = ({ subText, heading }) => {
    return (
        <div className="header">
            <p>{subText.toUpperCase()}</p>
            <h1>{heading}</h1>
        </div>
    )
}


export default Header
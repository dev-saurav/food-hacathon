import React from 'react';
import './Card.css';
const Card = ({ name, image, category, description, index }) => {
    const theme = (index + 1) % 2 === 0 ? 'light' : 'dark'
    return (
        <div className="card">
            <div className="imgContent" style={{ backgroundImage: `url(${image})` }}>
                <div className="top-bar">In {category}</div>
            </div>
            <div className="content" style={{ background: theme === 'light' ? 'linear-gradient(0deg, white, 90%, transparent)' : 'linear-gradient(0deg, black, 90%, transparent)', color: theme === 'light' ? 'black' : 'white' }}>
                <div className="title">
                    <div className="card-top">
                        <div className="card-title">
                            <h3>{name}</h3>
                            <div className="time">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                        24min</div>
                        </div>
                        <div className="heart">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="description">{description}</div>
                </div>
            </div>
        </div>

    )
}

export default Card;
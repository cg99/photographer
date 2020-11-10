import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import Navbar from './Navbar.js';
import { MdChangeHistory } from 'react-icons/md';
import '../../assets/sass/header.scss';


const Header = () => {
    let [imageId, setImageId] = useState(0);

    const location = useLocation();
    const path = location.pathname;

    const sliderImages = ['./img/header.jpg', './img/gallery/3.jpg', './img/gallery/g2.jpg'];

    useEffect(() => {
        resetImageId()
    })

    const resetImageId = () => {
        if (imageId > 2) {
            setImageId(0)
        }
    }

    return (
        <header className="header">
            {path === '/' &&
                <div className="header__container">

                    <div className="header__image" key={imageId}>
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                            <figure>
                                <img src={sliderImages[imageId]} alt="1" />
                            </figure>
                        </ReactCSSTransitionGroup>
                    </div>

                    <button onClick={() => setImageId(imageId + 1)}><MdChangeHistory /></button>

                </div>
            }
            <Navbar />
        </header>
    );
}

export default Header;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import Navbar from './Navbar.js';
import { RiArrowLeftSLine, RiArrowRightSLine, 
    RiCheckboxBlankCircleLine, RiCheckboxBlankCircleFill } from 'react-icons/ri'
import '../../assets/sass/header.scss';


const Header = () => {
    let [imageId, setImageId] = useState(0);

    const location = useLocation();
    const path = location.pathname;

    const sliderImages = ['./img/header1.jpg', './img/header2.jpg', './img/header3.jpg'];
    const numOfImages = sliderImages.length - 1;

    const markers = [];

    for (let i = 0; i <= numOfImages; i++) {
        if (i === imageId) {
            markers.push(<RiCheckboxBlankCircleFill />)
        } else {
            markers.push(<RiCheckboxBlankCircleLine />)
        }
    }

    useEffect(() => {
        reset();
    })

    const reset = () => {
        if (imageId > numOfImages) {
            setImageId(0);
        } else if (imageId < 0) {
            setImageId(numOfImages);
        }
    }

    const goForward = () => {
        setImageId(imageId - 1)
    }

    const goBackward = () => {
        setImageId(imageId + 1)
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

                    <button className="btn__left_arrow" onClick={goForward}><RiArrowLeftSLine /></button>
                    <button className="btn__right_arrow" onClick={goBackward}><RiArrowRightSLine /></button>

                    <div className="markers">
                        {markers}
                    </div>

                </div>
            }
            <Navbar />
        </header>
    );
}

export default Header;
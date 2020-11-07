import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

import Navbar from './Navbar.js';

import { MdChangeHistory } from 'react-icons/md';

import '../../assets/sass/header.scss';


const Header = () => {
    let [count, setCount] = useState(0);

    const location = useLocation();
    const path = location.pathname;

    useEffect(()=> {
        const images = document.querySelectorAll(".header__image");

        images.forEach((image, idx) => {
            if (idx === count) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        })
    })

    const changeImage = () => {
        if (count > 1) {
            count = 0;
        } else {
            count += 1;
        }
        setCount(count)
    }

    return (
        <header className="header">
            {path === '/' &&
                <div className="header__container">
                    <div className="header__image">
                        <figure>
                            <img src="./img/header.jpg" alt="1" />
                        </figure>
                    </div>

                    <div className="header__image">
                        <figure>
                            <img src="./img/gallery/3.jpg" alt="2" />
                        </figure>
                    </div>

                    <div className="header__image">

                        <figure>
                            <img src="./img/gallery/g2.jpg" alt="3" />
                        </figure>
                    </div>

                    <button onClick={changeImage}><MdChangeHistory/></button>
                    
                </div>
            }
            <Navbar />
        </header>
    );
}

export default Header;
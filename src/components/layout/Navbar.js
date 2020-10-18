import React from 'react';
import { Link } from "react-router-dom";

import '../../assets/sass/header.scss';


class Navbar extends React.Component {

    stickyHeader() {
        const navbar = document.querySelector(".navbar");

        const sticky = navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    componentDidMount() {
        setTimeout(window.addEventListener('scroll', this.stickyHeader), 100)
    }

    render() {
        return (
            <nav className="navbar">
                <Link to="/works">Works</Link>
                <Link to="/" className="logo"><img src="./logo.png" alt="" /></Link>
                <Link to="/about">About</Link>
            </nav>
        );
    }
}

export default Navbar;
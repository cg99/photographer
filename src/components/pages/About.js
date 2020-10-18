import React from 'react';

import '../../assets/sass/about.scss';

function About() {
    return (
        <div className="page">
            <div className="about">
                <div className="heading">About</div>
                <div className="about__section">
                    <figure>
                        <img src="./img/gallery/1.png" alt="" />
                        <figcaption>
                            "Be what you want to be. Do what you want to do."
                        </figcaption>
                    </figure>
                    
                    <div className="about__desc">
                        <div>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum."
                        </div>

                        <div className="contact">
                            <h3>Send Message</h3>
                            <form action="">
                                <input type="text" name="email" placeholder="Your Email" />
                                <input type="text" name="name" placeholder="Your Name" />
                                <input type="text" name="subject" placeholder="Subject" />
                                <textarea name="message" id="" cols="60" rows="10" placeholder="Message"></textarea>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;

import React from 'react';

import '../../assets/sass/about.scss';

function About() {
    // const [formData, setFormData] = useState({})

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData)
    // }

    // const handleChange = (e) => {
    //     formData[e.target.name] = e.target.value;
    //     setFormData(formData)
    // }

    return (
        <div className="page">
            <div className="about">
                <div className="heading">About</div>
                <div className="about__section">
                    <figure>
                        <img src="./img/me.jpg" alt="" loading="lazy"/>
                        <figcaption>
                            "Capture The Precious Moments"
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
                        <div style={{ marginTop: '10px' }}>
                            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum."
                        </div>

                        <div className="contact">
                            <h3>Contact</h3>
                            <div>If you want to work with me or have any questions, please feel free to contact me.</div>
                            <div>Email: <b>umessgm@gmail.com</b></div>
                            <div>Phone: <b>9807732775</b></div>
                            {/* <h3>Send Message</h3>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="email" placeholder="Your Email" onChange={handleChange}/>
                                <input type="text" name="name" placeholder="Your Name" onChange={handleChange}/>
                                <input type="text" name="subject" placeholder="Subject" onChange={handleChange}/>
                                <textarea name="message" id="" cols="60" rows="10" placeholder="Message" onChange={handleChange} />
                                <input type="submit"/>
                            </form> */}
                            <br/>
                            <div>
                                <span>Photo by <a href="https://unsplash.com/@romandempire?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Roman Denisenko</a> on <a href="https://unsplash.com/@romandempire?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;

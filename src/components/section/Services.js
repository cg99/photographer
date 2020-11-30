import React from 'react';
import '../../assets/sass/service.scss';


const Services = (props) => {
    const heading = props.heading;

    const services = props.services;

    return (
        <div id="services">

            <section>
                <h3 className="heading">{heading}</h3>

                {services.map((service, idx) => (
                    <div className="service" key={idx}>
                        <img src={service.image} alt="" loading="lazy"/>
                        <div className="service__desc">
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    </div>
                ))}

            </section>

        </div>
    );
}

export default Services;
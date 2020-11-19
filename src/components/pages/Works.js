import React, { useState } from 'react';
import Lightbox from "react-awesome-lightbox";


function Works() {
    let [currentLB, setCurrentLB] = useState(-1);

    const works = [
        {
            title: "Wedding Photography",
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.`,
            image: "https://source.unsplash.com/user/eyoelkahssay/1600x900",
            images: [
                {
                    url: "https://source.unsplash.com/collection/190727/1600x900",
                    title: "image title 1"
                },
                {
                    url: "https://source.unsplash.com/user/eyoelkahssay/1600x900",
                    title: "image title 2"
                },
                {
                    url: "https://source.unsplash.com/random/1600x900",
                    title: "image title 3"
                }
            ]
        },
        {
            title: "Street Photography",
            desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
            quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
            iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            image: "https://source.unsplash.com/user/northwoodn/1600x900",
            images: [
                {
                    url: "https://source.unsplash.com/collection/190727/1600x900",
                    title: "image title 1"
                },
                {
                    url: "https://source.unsplash.com/user/northwoodn/1600x900",
                    title: "image title 2"
                },
                {
                    url: "https://source.unsplash.com/random/1600x900",
                    title: "image title 3"
                }
            ]
        },
        {
            title: "Animals Capture",
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.`,
            image: "https://source.unsplash.com/user/lefrancois/1600x900",
            images: [
                {
                    url: "https://source.unsplash.com/collection/190727/1600x900",
                    title: "image title 1"
                },
                {
                    url: "https://source.unsplash.com/user/lefrancois/1600x900",
                    title: "image title 2"
                },
                {
                    url: "https://source.unsplash.com/random/1600x900",
                    title: "image title 3"
                }
            ]
        }
    ];

    const closeLightbox = () => {
        setCurrentLB(-1);
    }

    return (
        <div className="page">

            <section>
                <h3 className="heading">Works</h3>

                {works.map((work, idx) => (
                    <div className="work" key={idx}>
                        <img src={work.image} onClick={() => {
                            setCurrentLB(idx)
                        }} alt="" />

                        <div className="work__desc">
                            <h3>{work.title}</h3>
                            <p>{work.desc}</p>
                        </div>
                    </div>
                ))}

                {currentLB !== -1 && <Lightbox images={works[currentLB].images}
                    onClose={closeLightbox}
                />}

            </section>

        </div>
    );
}

export default Works;
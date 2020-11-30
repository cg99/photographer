import React, { useState } from 'react';
import '../../assets/sass/photogrid.scss';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";


const Gallery = () => {
  let [currentImage, setCurrentImage] = useState(-1);

  const imagePath = './img/collection';
  const photos = [`${imagePath}/img1-min.jpg`, `${imagePath}/img2-min.jpg`, `${imagePath}/img3-min.jpg`,
  `${imagePath}/img4-min.jpg`, `${imagePath}/img5-min.jpg`, `${imagePath}/img6-min.jpg`,
  `${imagePath}/img7-min.jpg`, `${imagePath}/img8-min.jpg`, `${imagePath}/img9-min.jpg`];

  const closeLightbox = () => {
    setCurrentImage(-1)
  }

  return (
    <div id="work">

      <section>
        {/* <h3 className="heading">Photography</h3> */}

        <div className="prow">
          {[0, 1, 2].map(i => (
            <div className="pcolumn" key={i}>
              {[0, 1, 2].map(j => (
                <img className="thumbnail" key={j} src={photos[3 * i + j]}
                  onClick={() => {
                    setCurrentImage(3 * i + j)
                  }} alt="gal title" loading="lazy"/>
              ))}
            </div>
          ))}
          {
            currentImage !== -1 &&
            <Lightbox images={photos}
              startIndex={currentImage}
              onClose={closeLightbox} />
          }
        </div>
      </section>

    </div>
  );
}

export default Gallery;
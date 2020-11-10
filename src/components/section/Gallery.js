import React, { useState } from 'react';
import '../../assets/sass/photogrid.scss';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";


const Gallery = () => {
  let [currentImage, setCurrentImage] = useState(-1);

  const galleryPath = './img/gallery';
  const photos = [`${galleryPath}/g1.jpg`, `${galleryPath}/g2.jpg`, `${galleryPath}/3.jpg`,
  `${galleryPath}/2.jpg`, `${galleryPath}/g5.jpg`, `${galleryPath}/g6.jpg`,
  `${galleryPath}/g3.jpg`, `${galleryPath}/1.png`, `${galleryPath}/4.jpg`];

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
                  }} alt="gal title" />
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
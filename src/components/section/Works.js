import React from 'react';
import PhotoCol from '../element/photocolumn.js';

const Works = () => {
  const galleryPath = './img/gallery';
  const photoCol1 = [`${galleryPath}/g1.jpg`, `${galleryPath}/g2.jpg`, `${galleryPath}/3.jpg`];
  const photoCol2 = [`${galleryPath}/2.jpg`, `${galleryPath}/g5.jpg`, `${galleryPath}/g6.jpg`];
  const photoCol3 = [`${galleryPath}/g3.jpg`, `${galleryPath}/1.png`, `${galleryPath}/4.jpg`];

  return (
    <div id="work">

      <section>
        {/* <h3 className="heading">Photography</h3> */}

        <div className="prow">
          <PhotoCol images={photoCol1}/>
          <PhotoCol images={photoCol2}/>
          <PhotoCol images={photoCol3}/>
        </div>
      </section>

    </div>
  );
}

export default Works;

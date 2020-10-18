import React from 'react';
import '../../assets/sass/photogrid.scss';

function PhotoCol(props) {
    return (
        <div className="pcolumn">
            <img src={props.images[0]} alt="" />
            <img src={props.images[1]} alt="" />
            <img src={props.images[2]} alt="" />
        </div>
    )
}

export default PhotoCol;
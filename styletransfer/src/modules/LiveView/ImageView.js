import React from 'react';
import './resources/cards.scss';

const ImageView = ({image}) => (
    <img src={image} alt='yolo' className='mx-auto glassBox__imgBox'>
    </img>
);

export default ImageView;
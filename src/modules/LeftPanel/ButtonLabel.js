import React from 'react';

const ButtonLabel = ({imageClass}) => (
    <span 
        key={`${imageClass}spanText`} 
        >
        {imageClass} Image
    </span>
);

export default ButtonLabel;


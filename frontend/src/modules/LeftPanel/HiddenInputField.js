import React from 'react';

const HiddenInputField = ({handleChange, imageRef}) => (
    <input 
        type='file' 
        onChange={handleChange} 
        style={{display:'none'}} 
        ref={imageRef}/>
);

export default HiddenInputField;
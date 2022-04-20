import React from 'react';
import ImageUpload from './ImageUpload';
import ButtonLabel from './ButtonLabel';
import UploadButton from './UploadButton';
import HiddenInputField from './HiddenInputField';

const LeftPanelContent = () => {
    const {imageRef, showOpenFileDialogue, handleChange} = ImageUpload();
    const imageClasses = ['Content', 'Style'];
    
    let panelContent = imageClasses.map(imageClass => (
        <div key={`${imageClass}div`} className='flex flex-col justify-start text-md font-semibold text-gray-700'> 
            <ButtonLabel imageClass={imageClass}/>
            <UploadButton onClickAction={showOpenFileDialogue}/>
            <HiddenInputField handleChange={handleChange} imageRef={imageRef} />
        </div>
    ));

    return (panelContent);
};

export default LeftPanelContent;
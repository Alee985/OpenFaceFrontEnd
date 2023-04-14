import React from 'react';
import ImageUpload from './ImageUpload';
import ButtonLabel from './ButtonLabel';
import UploadButton from './UploadButton';
import HiddenInputField from './HiddenInputField';
import SubmitButton from '../RightPanel/SubmitButton';

const LeftPanelContent = () => {
    const {imageRef, showOpenFileDialogue, handleChange} = ImageUpload();
    const imageClasses = ['Content'];
    
    let panelContent = imageClasses.map(imageClass => (
        <div key={`${imageClass}div`} className='flex flex-col justify-start text-md font-semibold text-gray-700'> 
            <ButtonLabel imageClass={imageClass}/>
            <UploadButton onClickAction={showOpenFileDialogue}/>
            <div className="flex flex-col gap-y-2 m-2">
                <HiddenInputField handleChange={handleChange} imageRef={imageRef} />
                <SubmitButton/>
            </div>
        </div>
    ));

    return (panelContent);
};

export default LeftPanelContent;
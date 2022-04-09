import React from 'react';
import UploadButton from './UploadButton/UploadButton';

const StyleImageUpload = () => (
    <div className='flex flex-col space-y-4'>
        <span className='flex flex-row justify-start text-md font-semibold text-gray-700'>
            Style Image
        </span>
        <span className='flex flex-row justify-start'>
            <UploadButton />
        </span>
    </div>
);

export default StyleImageUpload;
import React from 'react';
import UploadButton from './UploadButton/UploadButton';

const ContentImageUpload = () => (
    <div className='flex flex-col space-y-4'>
        <span className='flex flex-row justify-start text-md font-semibold text-gray-700'>
            Content Image
        </span>
        <span className='flex flex-row justify-start'>
            <UploadButton />
        </span>
    </div>
);

export default ContentImageUpload;
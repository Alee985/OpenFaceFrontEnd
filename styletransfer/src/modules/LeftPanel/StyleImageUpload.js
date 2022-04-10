import React from 'react';
import UploadButton from './UploadButton/UploadButton';

const StyleImageUpload = () => (
    <div className='flex flex-col justify-start space-y-4'>
        <span className='text-md font-semibold text-gray-700'>
            Style Image
        </span>
        <span>
            <UploadButton />
        </span>
    </div>
);

export default StyleImageUpload;
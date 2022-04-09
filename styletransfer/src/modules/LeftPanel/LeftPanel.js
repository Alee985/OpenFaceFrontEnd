import React from 'react';
import ContentImageUpload from './ContentImageUpload';
import StyleImageUpload from './StyleImageUpload';

const LeftPanel = () => (
    <div className='flex flex-col space-y-4 p-2'>
        <ContentImageUpload />
        <StyleImageUpload />
    </div>
);

export default LeftPanel;
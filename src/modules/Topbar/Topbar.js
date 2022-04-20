import React from 'react';
import DownloadButton from './DownloadButton/DownloadButton';

const Topbar = () => (
    // Parent div
    <div className='bg-white border-2 border-[#E5E5E5] flex flex-row-reverse p-2'>
        <span className='mr-5'>
            <DownloadButton />
        </span>
    </div>
);

export default Topbar;
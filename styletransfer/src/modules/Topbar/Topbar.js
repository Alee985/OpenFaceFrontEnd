import React from 'react';
import DownloadButton from './DownloadButton/DownloadButton';

const Topbar = () => (
    // Parent div
    <div>
        <span className='bg-white border-2 border-[#E5E5E5] flex flex-row-reverse p-2'>
            <DownloadButton />
        </span>
    </div>
);

export default Topbar;
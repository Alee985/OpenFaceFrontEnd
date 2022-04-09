import React from 'react';
import uploadLogo from './resources/uploadlogo.svg'

const UploadButton = () => (
    <button className='bg-[#FFFFFF] hover:bg-[#E5E5E5] flex justify-center p-2 gap-x-2 mr-5 border rounded-md border-[#E5E5E5] text-[#344054]'>
        {/*Upload icon*/}
        <span className='pt-1'>
            <img src={uploadLogo} alt='uploadicon' />
        </span>
        <span>
            Upload
        </span>
    </button>
);

export default UploadButton;
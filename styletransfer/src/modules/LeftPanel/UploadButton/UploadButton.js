import React from 'react';
import uploadLogo from './resources/uploadlogo.svg'
import Button from '../../Button/Button';

const UploadButton = () => (
    <Button type='button' bgColor='#FFFFFF' bgColorHover='#E5E5E5' borderColor = '#E5E5E5' textColor='#344054'  icon={uploadLogo} buttonText='Upload' />
);

export default UploadButton;
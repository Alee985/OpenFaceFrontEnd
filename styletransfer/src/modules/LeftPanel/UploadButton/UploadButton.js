import React from 'react';
import uploadLogo from './resources/uploadlogo.svg'
import Button from '../../Button/Button';

const UploadButton = () => (
    <Button actionType='button' buttonType='light' buttonText='Upload' icon={uploadLogo} />
);

export default UploadButton;
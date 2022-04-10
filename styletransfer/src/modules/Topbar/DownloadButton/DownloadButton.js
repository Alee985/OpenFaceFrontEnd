import React from 'react';
import Button from '../../Button/Button';
import downloadLogo from './resources/downloadlogo.png'

const DownloadButton = () => (
    <Button actionType='button' buttonType='purple' buttonText='Download' icon={downloadLogo}/>
);

export default DownloadButton;
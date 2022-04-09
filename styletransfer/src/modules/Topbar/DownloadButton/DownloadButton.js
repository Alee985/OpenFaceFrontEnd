import React from 'react';
import Button from '../../Button/Button';
import downloadLogo from './resources/downloadlogo.png'

const DownloadButton = () => (
    <Button type='button' bgColor='#9E77ED' bgColorHover='#AB87F5' textColor='#FFFFFF'  borderColor = '#9E77ED' icon={downloadLogo} buttonText='Download'/>
);

export default DownloadButton;
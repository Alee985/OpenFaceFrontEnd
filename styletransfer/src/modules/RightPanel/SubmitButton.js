import React from 'react';
import generateLogo from './resources/Scan.svg'
import Button from '../Button/Button';

const SubmitButton = () => (
    <Button type='submit' bgColor='#9E77ED' bgColorHover='#AB87F5' textColor='#FFFFFF'  borderColor = '#9E77ED' icon={generateLogo} buttonText='Generate'/>
);

export default SubmitButton;
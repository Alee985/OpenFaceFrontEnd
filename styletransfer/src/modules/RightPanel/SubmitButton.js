import React from 'react';
import generateLogo from './resources/Scan.svg'
import Button from '../Button/Button';

const SubmitButton = () => (
    <Button actionType='submit' buttonType='purple' icon={generateLogo} buttonText='Generate'/>
);

export default SubmitButton;
import React from 'react';
import {useFormik} from 'formik';
import SubmitButton from '../RightPanel/SubmitButton';
import axios from 'axios';

const ParameterInputForm = () => {
    return (
        <form className='flex flex-col gap-y-2'>
            <SubmitButton />
        </form>
    );
};

export default ParameterInputForm;
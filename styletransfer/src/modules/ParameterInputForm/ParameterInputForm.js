import React from 'react';
import {useFormik} from 'formik';
import SubmitButton from '../RightPanel/SubmitButton';

const ParameterInputForm = () => {
    const initialValues = {totalVariationWeight: '',
                        styleWeight: '',
                        contentWeight: '',
                        iterations: '',
                        stepsPerIteration: '',
                        imageWidth: '',
                        imageHeight: '',};

    const labels = {totalVariationWeight: 'Total Variation Weight',
                        styleWeight: 'Style Weight',
                        contentWeight: 'Content Weight',
                        iterations: 'Iterations',
                        stepsPerIteration: 'Steps per Iteration',
                        imageWidth: 'Image Width',
                        imageHeight: 'Image Height',};

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const labelStyle = `text-md font-semibold text-gray-700`;
    let formContent = Object.keys(initialValues).map(key => (
        <div key={`${key}div`} className='flex flex-col gap-y-2'>
            <label key={`${key}label`} className={labelStyle} htmlFor={key}>{labels[key]}</label>
            <input
            key={`${key}input`}
            id={key}
            name={key}
            type='text'
            onChange={formik.handleChange}
            value={formik.values.key} 
        />
        </div>
    ));

    return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-y-2'>
            {formContent}
            <SubmitButton />
        </form>
    );
};

export default ParameterInputForm;
import React from 'react';
import { useFormik } from 'formik';

const initialValues = {totalVariationWeight: '',
                        styleWeight: '',
                        contentWeight: '',
                        iterations: '',
                        stepsPerIteration: '',
                        imageWidth: '',
                        imageHeight: '',};

const FormContent = () => {
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const labelStyle = `text-md font-semibold text-gray-700`;
    let formContent = Object.keys(initialValues).map(key => (
        <div className='flex flex-col gap-y-2'>
            <label className={labelStyle} htmlFor={key}>{key}</label>
            <input
            id={key}
            name={key}
            type='text'
            onChange={formik.handleChange}
            value={formik.values.key} 
        />
        </div>
    ));
    return (formContent);
};

export default [initialValues, FormContent];

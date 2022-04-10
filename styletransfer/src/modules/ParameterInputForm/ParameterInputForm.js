import React from 'react';
import {useFormik} from 'formik';
import SubmitButton from '../RightPanel/SubmitButton';

const ParameterInputForm = () => {
    const formik = useFormik({
        initialValues: {
            totalVariationWeight: '',
            styleWeight: '',
            contentWeight: '',
            iterations: '',
            stepsPerIteration: '',
            imageWidth: '',
        imageHeight: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const labelStyle = `text-md font-semibold text-gray-700`;
    return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-y-2'>
            <label className={labelStyle} htmlFor='totalVariationWeight'>Total Variation Weight</label>
            <input
                id='totalVariationWeight'
                name='totalVariationWeight'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.totalVariationWeight} 
            />

            <label className={labelStyle} htmlFor='styleWeight'>Style Weight</label>
            <input
                id='styleWeight'
                name='styleWeight'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.styleWeight} 
            />

            <label className={labelStyle} htmlFor='contentWeight'>Content Weight</label>
            <input
                id='contentWeight'
                name='contentWeight'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.contentWeight} 
            />

            <label className={labelStyle} htmlFor='iterations'>Itertions to Run</label>
            <input
                id='iterations'
                name='iterations'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.iterations} 
            />

            <label className={labelStyle} htmlFor='stepsPerIteration'>Steps per Iteration</label>
            <input
                id='stepsPerIteration'
                name='stepsPerIteration'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.stepsPerIteration} 
            />

            <label className={labelStyle} htmlFor='imageWidth'>Image Width</label>
            <input
                id='imageWidth'
                name='imageWidth'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.imageWidth} 
            />

            <label className={labelStyle} htmlFor='imageHeight'>Image Height</label>
            <input
                id='imageHeight'
                name='imageHeight'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.imageHeight} 
    />

            <SubmitButton />
        </form>
    );
};

export default ParameterInputForm;
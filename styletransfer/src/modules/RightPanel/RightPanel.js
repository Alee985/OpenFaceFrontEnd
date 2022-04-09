import React from 'react';
import ParameterSlider from '../Slider/ParameterSlider';
import 'react-rangeslider/lib/index.css';

const RightPanel = () => (
    <div className='flex flex-col space-y-4 p-2'>
        <ParameterSlider sliderLabel="Total Variation Weight" />
        <ParameterSlider sliderLabel="Style Weight" />
        <ParameterSlider sliderLabel="Content Weight" />   
    </div>
);

export default RightPanel;
import React, {useState, useEffect} from 'react';
import ImageView from './ImageView';
//Test image imports
import img1 from './resources/1.PNG';
import img2 from './resources/2.PNG';
import img3 from './resources/3.PNG';
import './resources/cards.scss';
import ImageUpload from '../LeftPanel/ImageUpload';

const LiveView = () => {
    const {defaultImage} = ImageUpload();
    const [styleImage, setStyleImage] = useState();
    
    useEffect(() => {
        setStyleImage(defaultImage);
    }, [defaultImage]);
    
    return(
    <div className='flex flex-col flex-grow h-full'>
        <div className='flex flex-row basis-1/2'>
            <div className='glassBox'>
                <ImageView image={styleImage} />
            </div>
            <div className='glassBox'>
                <ImageView image={styleImage}/>
            </div>
        </div>
        <div className='glassBox'>
            <ImageView image={img3}/>
        </div>
    </div>
    );
    };

export default LiveView;
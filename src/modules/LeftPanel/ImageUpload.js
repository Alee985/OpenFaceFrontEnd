import {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import defaultImageIcon from './resources/defaultImage.png';

const ImageUpload = () => {
    // Will be used to reference the <input>
    const imageRef = useRef();
    // Selected file. It will replace the defaultImage
    const [image, setImage] = useState();
    // Default display file
    const [defaultImage, setDefaultImage] = useState(defaultImageIcon);

    // Open File dialogue. Uses the ref attached to <input>
    const showOpenFileDialogue = () => {
        imageRef.current.click();
    };

    // Change handler. Upload to server and save to state
    const handleChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        uploadFile(file);
    };
    
    // Send file to server
    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('file', file)
        console.log("Formdata printing"+formData);
        try {
            const res = await axios.post(
                'http://localhost:4000/upload',
                formData,
                {
                    headers: {
                    'Content-Type':'multipart/form-data'
                }
            }
            );
            console.log(res);
        }
        catch (ex) {
            console.log(ex.response.data);
        }
    };

    useEffect(() => {
        if (image) {
            const objectURL = URL.createObjectURL(image);
            setDefaultImage(objectURL);
            return () => URL.revokeObjectURL(objectURL);
        }    
    }, [image]
    );
    return {
        imageRef,
        defaultImage,
        showOpenFileDialogue,
        handleChange,
    };
};

export default ImageUpload;
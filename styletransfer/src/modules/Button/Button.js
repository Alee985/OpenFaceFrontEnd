import React from 'react';
import { ButtonType } from '../theme';

{/*Button Props:
- bgColor
- bgColorHover
- textColor
- icon
- buttonText
*/}
const Button = ({actionType, buttonType, buttonText, icon}) => {
    //const buttonStyle = classnames(`bg-[${props.bgColor}] hover:bg-[${props.bgColorHover}] flex justify-center p-2 gap-x-2 mr-5 rounded-md border-[${props.borderColor}] text-[${props.textColor}]`);
    //console.log(buttonStyle);
    return (<button type={actionType} className={ButtonType[buttonType]}>
        {/*Download icon*/}
        <span className='pt-1'>
            <img src={icon} alt='icon' />
        </span>
        <span>
            {buttonText}
        </span>
    </button>)
};

export default Button;
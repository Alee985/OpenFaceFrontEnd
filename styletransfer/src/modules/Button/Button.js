import React from 'react';

{/*Button Props:
- bgColor
- bgColorHover
- textColor
- icon
- buttonText
*/}
const Button = (props) => {
    const buttonStyle = 'bg-['+props.bgColor+'] hover:bg-['+props.bgColorHover+'] flex justify-center p-2 gap-x-2 mr-5 rounded-md border-['+props.borderColor+'] text-['+props.textColor+']';
    console.log(buttonStyle);
    return (<button type={props.type} className={buttonStyle}>
        {/*Download icon*/}
        <span className='pt-1'>
            <img src={props.icon} alt='icon' />
        </span>
        <span>
            {props.buttonText}
        </span>
    </button>)
};

export default Button;
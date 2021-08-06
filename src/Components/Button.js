import React from 'react';
import '../index.css';

const Button = ( props ) => {
    return (
        <a href={props.link}>
            <div className={`${props.margin} ${props.flex} ${props.justifyContent} ${props.xl}`}>
                <button className={`${props.bottomOrTopBtn} ${props.signUpOrLogInBtn} button`} type={`${props.btnType}`} >
                    {props.actionName}
                </button>
            </div>
        </a>
         
    )
}

export default Button;


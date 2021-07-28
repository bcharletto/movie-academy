import React from 'react';
import '../index.css';

const Button = ( props ) => {
    return (
        <div className={`${props.margin} ${props.flex} ${props.justifyContent} ${props.xl}`}>
            <button className={`${props.bottomOrTopBtn} ${props.signUpOrLogInBtn} button`} type="button" >
                {props.actionName}
            </button>
        </div>
         
    )
}

export default Button;


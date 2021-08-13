import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const Button = ( props ) => {
    return (
        <Link to={props.link}>
            <div className={`${props.margin} ${props.flex} ${props.justifyContent} ${props.xl}`}>
                <button className={`${props.bottomOrTopBtn} ${props.signUpOrLogInBtn} button`} type={`${props.btnType}`} >
                    {props.actionName}
                </button>
            </div>
        </Link>
         
    )
}

export default Button;


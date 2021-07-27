import React, { Component } from 'react';
import '../index.css';

const Button = ( props ) => {
    return (
        <>
        <div>
         <button className={`${props.bottomOrTopBtn} ${props.signUpOrLogInBtn} button fontColorWhite`} type="button" >
          {props.actionName}
         </button>
        </div>
         
        </>
    )
}

export default Button;


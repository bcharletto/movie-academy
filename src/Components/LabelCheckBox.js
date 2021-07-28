import React from 'react';
import '../index.css';

const LabelCheckBox = ( props ) => {
    return (
        <label className="checkbox">
            <p className="font-bold font18px lineheight21">{props.actionName} +</p> 
            <input type="radio" checked={`${props.checked}`} name="radio" />
            <span className="checkmark"></span>
        </label>
         
    )
}

export default LabelCheckBox;


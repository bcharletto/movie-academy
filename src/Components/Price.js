import React from 'react';
import '../index.css';

const Price = ( props ) => {
    return (
        <p className={`${props.fontSize} ${props.lineHeight} ${props.fontWeight}`} id="precio">{props.actionName}</p>
    )
}

export default Price;


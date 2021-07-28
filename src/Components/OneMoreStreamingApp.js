import React from 'react';
import '../index.css';

const OneMoreStreamingApp = ( props ) => {
    return(
        <div>
            <h1 className={`${props.hidden} ${props.show} ${props.fontSize} ${props.lineHeight} ${props.fontWeight} `}>{props.actionName1}</h1>
            <h1 className={`${props.hidden} ${props.show} ${props.fontSize} ${props.lineHeight} ${props.fontWeight}`}>{props.actionName2}</h1>
        </div>
    )
}

export default OneMoreStreamingApp;


import React from 'react';
import '../index.css';

const DeviceTitle = (props) => {
    return (
        <div className={`${props.padding} ${props.mdPadding}`}>
            <h2 className="font14px font-semibold">{props.actionName}</h2>
        </div>
    )
}

export default DeviceTitle;


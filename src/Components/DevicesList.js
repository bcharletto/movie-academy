import React from 'react';
import '../index.css';

const DevicesList = ( props ) => {
    return (
        <div className="pt-2">
            <ul className="font13px">
                <li>{props.actionName1}</li>
                <li>{props.actionName2}</li>
                <li>{props.actionName3}</li>
                <li>{props.actionName4}</li>
                <li>{props.actionName5}</li>
                <li>{props.actionName6}</li>
                <li>{props.actionName7}</li>
            </ul>
        </div>
         
    )
}

export default DevicesList;


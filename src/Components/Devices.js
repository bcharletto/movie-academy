import React from 'react';
import '../index.css';
import Icon from './Icon';
import DeviceTitle from './DeviceTitle';
import DevicesList from './DevicesList';

const Devices = ( props ) => {
    return (
        <div className={`${props.padding}`}>
            <Icon
                padding={`${props.iconPadding}`}
                icon={`${props.icon}`}
                size={`${props.size}`}
            />
            <DeviceTitle
                padding={`${props.titlePadding}`}
                mdPadding={`${props.titleMdPadding}`}
                actionName={`${props.titleActionName}`}
            />
            <DevicesList
                actionName1={`${props.listActionName1}`}
                actionName2={`${props.listActionName2}`}
                actionName3={`${props.listActionName3}`}
                actionName4={`${props.listActionName4}`}
                actionName5={`${props.listActionName5}`}
                actionName6={`${props.listActionName6}`}
                actionName7={`${props.listActionName7}`}
            />
        </div>
         
    )
}

export default Devices;


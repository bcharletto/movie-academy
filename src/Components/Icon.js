import React from 'react'

const Icon = (props) => {
    return (
        <div className={`${props.padding}`}>
            <i className={`${props.icon} ${props.size} fas `}></i>
        </div>
    )
}

export default Icon;


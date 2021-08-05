import React from 'react'

const Icon = (props) => {
    return (
        <div className={`${props.padding}`}>
            <i className={`${props.icon} ${props.size} ${props.fasOrFar} ${props.class} `}></i>
        </div>
    )
}

export default Icon;


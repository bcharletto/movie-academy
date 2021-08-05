import React from 'react';
import '../index.css';

const Footer = ( props ) => {
    return (
        <div className={`${props.paddingTop} ${props.paddingBottom} ${props.footer} ${props.bg}`}>
            <h3 className="text-sm font-bold text-center fontcolorwhite">@2021</h3>
        </div>
         
    )
}

export default Footer;


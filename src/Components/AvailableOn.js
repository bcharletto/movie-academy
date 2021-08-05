import React from 'react';
import '../index.css';
import Devices from './Devices';

const AvailableOn = () => {
    return (
        <div className="text-center mx-24 deviceslist justify-center">
            <Devices 
                icon="fa-tv"
                size="fa-6x"
                fasOrFar="fas"
                titleActionName="TV"
                titlePadding="pt-6"
                listActionName1="Fire TV"
                listActionName2="Android TV"
                listActionName3="Apple TV"
                listActionName4="Chromecast"
                listActionName5="LG TVs"
                listActionName6="Roku"
                listActionName7="Samsung"
            />
            <Devices 
                icon="fa-laptop"
                size="fa-5x"
                fasOrFar="fas"
                iconPadding="pt-2"
                titleActionName="Computer"
                titlePadding="pt-8"
                listActionName1="Chrome OS"
                listActionName2="MacOS"
                listActionName3="Windows PC"
                listActionName4=" "
                listActionName5=" "
                listActionName6=" "
                listActionName7=" "
            />
            <Devices 
                icon="fa-mobile-alt"
                size="fa-4x"
                fasOrFar="fas"
                iconPadding="md:pt-6"
                titleActionName="Mobile & Tablet"
                titlePadding="pt-6"
                titleMdPadding="md:pt-8"
                listActionName1="Amazon Fire Tablets"
                listActionName2="Android Phone & Tablets"
                listActionName3="iPhone & iPad"
                listActionName4=" "
                listActionName5=" "
                listActionName6=" "
                listActionName7=" "
            />
            <Devices 
                icon="fa-gamepad"
                size="fa-4x"
                fasOrFar="fas"
                iconPadding="md:pt-6"
                titleActionName="Game Consoles"
                titlePadding="pt-6"
                titleMdPadding="md:pt-8"
                listActionName1="PS4"
                listActionName2="PS5"
                listActionName3="Xbox One"
                listActionName4="Xbox Series X"
                listActionName5="Xbox Series S"
                listActionName6=" "
                listActionName7=" "
            />
        </div>
         
    )
}

export default AvailableOn;


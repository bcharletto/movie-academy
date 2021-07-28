import React from 'react';
import '../index.css';

const WatchTheWay = ( props ) => {
    return (
        <div className="text-center">
            <h1 className="font-bold font18px lineheight21" id="watchtheway">{props.actionName1}</h1>
            <p className="md:hidden xl:block font-normal font13px lineheight21" id="enjoymobile">{props.actionName2}</p>
            <p className="hidden md:block md:mt-5 xl:hidden font-normal font11px lineheight21">{props.actionName3}</p>
            <p className="hidden md:block xl:hidden font-normal font11px lineheight21">{props.actionName4}</p>
            <p className="hidden md:block xl:hidden font-normal font11px lineheight21">{props.actionName5}</p>
            <hr className="hrtablet hidden md:block" />
            <h1 className="font-bold font18px lineheight21" id="availablemobile">{props.actionName6}</h1>
        </div>
         
    )
}

export default WatchTheWay;


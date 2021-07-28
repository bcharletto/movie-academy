import React from 'react';
import '../index.css';
import LabelCheckBox from './LabelCheckBox';

const CheckBoxPanel = () => {
    return (
        <div className="ml-7 fontcolorwhite mt-6" id="checkboxpanel">
            <LabelCheckBox
                actionName="Latino"
                checked="checked"
            />
            <LabelCheckBox
                actionName="International"
            />
            <LabelCheckBox
                actionName="Art"
            />
        </div>
         
    )
}

export default CheckBoxPanel;


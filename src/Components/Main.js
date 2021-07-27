import React, { Components, useEffect, useState } from 'react';
import Button from './Button';
import background from '../Assets/pexels-erik-mclean-4048090-1.png';
import '../index.css';


const Main = () => {
    return (
        <>
         <div style={{ backgroundImage: `url(${background})` }} className="fontColorWhite">
                    <div className="mt-4 flex justify-center xl:mt-20">
                        <Button
                          actionName="SIGN UP NOW"
                          bottomOrTopBtn="bottomBtn"
                          signUpOrLogInBtn="signUpBtn"
                        />
                    </div> 
                    <div className="text-center" id="priceMayVary">
                        <p className="font-normal font8px lineheight9">*Price may vary depending on the currency or platform used for payment.</p>
                        <p className="font-normal font8px lineheight9">Third-party fees may apply.</p>
                    </div>
          <Button
            actionName="LOG IN"
            bottomOrTopBtn="topBtn"
            signUpOrLogInBtn="logInBtn"
          />
         </div>  
        </>         
    )
}

export default Main;
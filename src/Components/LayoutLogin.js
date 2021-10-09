import React from 'react';
import '../index.css';
import backgroundImgLogin from '../Assets/pexels-erik-mclean-4048090 1 login.png';
import rectangleImg from '../Assets/Rectangle 1.png'
import Button from '../Components/Button';
import LoginForm from '../Components/LoginForm';
import Footer from '../Components/Footer'

const LayoutLogin = () => {
    return (
        <div className="background font fontcolorwhite relative">
            <div className="md:relative">
                <div>
                    <img className="w-full" src={backgroundImgLogin} alt="background" />
                    <div>
                        <img className="hidden md:block" id="rectangulo" src={rectangleImg} alt="rectangle" />
                    </div>
                </div>
                <Button
                    link="/signup"
                    actionName="SIGN UP"
                    bottomOrTopBtn="topbutton"
                    signUpOrLogInBtn="signupbutton"
                    btnType="button"
                />
                <div className="loginform text-center hidden md:absolute md:block">
                    <img id="rectangulo" src={rectangleImg} alt="rectangle" />
                    <LoginForm />
                </div>
                <div className="loginform text-center w-full md:hidden flex justify-center">
                    <LoginForm />
                </div>                
            </div>
            <Footer
                footer="footerlogin"
                paddingBottom="pb-5"
            />
        </div>
    )
}

export default LayoutLogin;


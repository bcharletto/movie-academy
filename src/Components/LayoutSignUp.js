import React from 'react';
import '../index.css';
import backgroundImg from '../Assets/pexels-erik-mclean-4048090-1.png';
import Button from '../Components/Button';
import SignUpForm from '../Components/SignUpForm';
import CheckBoxPanel from '../Components/CheckBoxPanel';
import Footer from '../Components/Footer';

const LayoutSignUp = () => {
    return (
        <main className="background font fontcolorwhite">
            <div className="md:relative">
                <img className="w-full" src={backgroundImg} alt="img" />
                <Button
                    actionName="LOG IN"
                    bottomOrTopBtn="topbutton"
                    signUpOrLogInBtn="loginbutton"
                    btnType="button"
                />
                <SignUpForm
                    hidden="hidden"
                    position="md:absolute"
                    display="md:block"
                />
            </div>
            <SignUpForm
                hidden="md:hidden"
            />
            <div className="chooseyourplan fontcolorwhite text-center">
                <h1 className="font-bold font18px lineheight21">Choose your plan</h1>
                <p className="hidden xl:block font11px lineheight16 mt-6">Acording with your plan you will have an specific catalogue of movies</p>
                <p className="xl:hidden font11px lineheight16 mt-6">Acording with your plan you will have an specific</p>
                <p className="xl:hidden font11px lineheight16">catalogue of movies</p>
            </div>
            <CheckBoxPanel/>
            <Button
                margin="mt-14"
                flex="flex"
                justifyContent="justify-center"
                bottomOrTopBtn="bottombutton"
                actionName="SIGN UP NOW"
                btnType="submit"
            />
            <Footer
                footer="footer"
                paddingBottom="pb-5"
            />
        </main>
    )
}

export default LayoutSignUp;


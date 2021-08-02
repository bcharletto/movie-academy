import React from 'react';
import '../index.css';
import backgroundImg from '../Assets/pexels-erik-mclean-4048090-1.png';
import Button from '../Components/Button';
import OneMoreStreamingApp from '../Components/OneMoreStreamingApp';
import Price from '../Components/Price';
import PriceMayVary from '../Components/PriceMayVary';
import WatchTheWay from '../Components/WatchTheWay';
import AvailableOn from './AvailableOn';
import Footer from './Footer'

const LayoutHomePage = () => {
    return (
        <main className="background font fontcolorwhite">
            <div className="font14px md:relative text-center">
                <div className="pt-5 hidden md:block md:absolute md:p-0" id="panelsignupnow">
                    <OneMoreStreamingApp 
                      actionName1="One more streaming app, may it will be the"
                      actionName2="best"  
                      hidden="xl:hidden"   
                      fontSize="font14px"   
                      lineHeight="lineheight16"
                      fontWeight="font-bold"      
                    />
                    <OneMoreStreamingApp 
                      actionName1="One more streaming app, may it will"
                      actionName2="be the best"   
                      hidden="md:hidden" 
                      show="xl:block"  
                      fontSize="font24px"   
                      lineHeight="lineheight28" 
                      fontWeight="font-bold"      
                    />
                    <Price
                     actionName="USD 10.50/month"
                     fontSize="font14px"   
                     lineHeight="lineheight16"
                     fontWeight="font-normal"  
                    />
                    <Button
                        actionName="SIGN UP NOW"
                        bottomOrTopBtn="bottombutton"
                        margin="mt-4"
                        flex="flex"
                        justifyContent="justify-center"
                        xl="xl:mt-20"
                        btnType="button"
                    />
                    <PriceMayVary />
                </div>
                <img className="w-full" src={backgroundImg} alt="img" />
                <Button
                  actionName="LOG IN"
                  bottomOrTopBtn="topbutton"
                  signUpOrLogInBtn="loginbutton"
                  btnType="button"
                />
            </div>
            <div className="pt-5 text-center md:hidden">
                <OneMoreStreamingApp 
                    actionName1="One more streaming app, may it will be the best" 
                    fontSize="font14px"   
                    lineHeight="lineheight16"
                    fontWeight="font-bold"        
                />
                <Price
                    actionName="USD 10.50/month"
                    fontSize="font14px"   
                    lineHeight="lineheight16"
                    fontWeight="font-normal"  
                />
                <Button
                    actionName="SIGN UP NOW"
                    bottomOrTopBtn="bottombutton"
                    margin="mt-4"
                    flex="flex"
                    justifyContent="justify-center"
                    btnType="button"
                />
                <PriceMayVary />
                <hr className="hrmobile" />
            </div>
            <WatchTheWay
                actionName1="Watch the way you want"
                actionName2="Enjoy the big screen experience on your TV, or watch on your tablet, laptop, phone and more. You can watch an ever-growing selection of titles in 4K. Plus, you can stream on 4 screens at once, so everyone’s happy."
                actionName3="Enjoy the big screen experience on your TV, or watch on your tablet, laptop, phone and more. You"
                actionName4="can watch an ever-growing selection of titles in 4K. Plus, you can stream on 4 screens at once, so"
                actionName5="everyone's happy."
                actionName6="Available on your favorite devices"
            />
            <AvailableOn />
            <Footer
                paddingTop="pt-10"
                paddingBottom="pb-5"
            />
        </main>
    )
}

export default LayoutHomePage;



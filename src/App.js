import React, { Component, useEffect,  useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
   } from 'react-router-dom';
import backgroundImg from '../src/Assets/pexels-erik-mclean-4048090-1.png'

function App() {
  return (
    <main className="background font">
            <div className="fontcolorwhite font14px md:relative">
                <div className="fontcolorwhite pt-5 text-center hidden md:block md:absolute md:p-0" id="panelsignupnow">
                    <h1 className="xl:hidden font-bold font14px lineheight16">One more streaming app, may it will be the</h1>
                    <h1 className="xl:hidden font-bold font14px lineheight16">best</h1>
                    <h1 className="md:hidden xl:block font-bold font24px lineheight28">One more streaming app, may it will</h1>
                    <h1 className="md:hidden xl:block font-bold font24px lineheight28">be the best</h1>
                    <p className="font-normal font14px lineheight16 text-center" id="precio">USD 10.50/month</p>
                    <div className="mt-4 flex justify-center xl:mt-20">
                        <button className="button bottombutton fontcolorwhite" type="button" >SIGN UP NOW</button>
                    </div> 
                    <div className="text-center" id="pricemayvary">
                        <p className="font-normal font8px lineheight9">*Price may vary depending on the currency or platform used for payment.</p>
                        <p className="font-normal font8px lineheight9">Third-party fees may apply.</p>
                    </div>
                </div>
                <img className="w-full" src={backgroundImg} alt="img" />
                <button className="button topbutton loginbutton fontcolorwhite"  type="button" >LOGIN</button>
            </div>
            <div className="fontcolorwhite pt-5 text-center md:hidden">
                <h1 className="font-bold font14px lineheight16">One more streaming app, may it will be the best</h1>
                <p className="font-normal font14px lineheight16 text-center" id="preciomobile">USD 10.50/month</p>
                <div className="mt-4 flex justify-center">
                    <button className="button bottombutton fontcolorwhite" type="button" >SIGN UP NOW</button>
                </div> 
                <div className="text-center" id="pricemayvary">
                    <p className="font-normal font8px lineheight9">*Price may vary depending on the currency or platform used for payment.</p>
                    <p className="font-normal font8px lineheight9">Third-party fees may apply.</p>
                </div>
                <hr className="hrmobile" />
            </div>
            <div className="fontcolorwhite text-center">
                <h1 className="font-bold font18px lineheight21" id="watchtheway">Watch the way you want</h1>
                <p className="md:hidden xl:block font-normal font13px lineheight21" id="enjoymobile">Enjoy the big screen experience on your TV, or watch on your tablet, laptop, phone and more. You can watch an ever-growing selection of titles in 4K. Plus, you can stream on 4 screens at once, so everyone’s happy.</p>
                <p className="hidden md:block md:mt-5 xl:hidden font-normal font11px lineheight21 enjoytablet">Enjoy the big screen experience on your TV, or watch on your tablet, laptop, phone and more. You</p>
                <p className="hidden md:block xl:hidden font-normal font11px lineheight21 enjoytablet">can watch an ever-growing selection of titles in 4K. Plus, you can stream on 4 screens at once, so</p>
                <p className="hidden md:block xl:hidden font-normal font11px lineheight21 enjoytablet">everyone's happy.</p>
                <hr className="hrtablet hidden md:block" />
                <h1 className="font-bold font18px lineheight21" id="availablemobile">Available on your favorite devices</h1>
            </div>
            <div className="fontcolorwhite text-center deviceslist flex justify-center mx-24">
                <div>
                    <div>
                        <i className="fas fa-tv fa-6x"></i>
                    </div>
                    <div className="pt-6">
                        <h2 className="font14px font-semibold">TV</h2>
                    </div>
                    <div className="pt-2">
                        <ul className="font13px">
                            <li>Fire TV</li>
                            <li>Android TV</li>
                            <li>Apple TV</li>
                            <li>Chromecast</li>
                            <li>LG TVs</li>
                            <li>Roku</li>
                            <li>Samsung</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-2">
                    <div>
                        <i className="fas fa-laptop fa-5x"></i>
                    </div>
                    <div className="pt-8">
                        <h2 className="font14px font-semibold">Computer</h2>
                    </div>
                    <div className="pt-2">
                        <ul className="font13px">
                            <li>Chrome OS</li>
                            <li>MacOS</li>
                            <li>Windows PC</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="md:pt-6">
                        <i className="fas fa-mobile-alt fa-4x"></i>
                    </div>
                    <div className="pt-6 md:pt-8">
                        <h2 className="font14px font-semibold">Mobile & Tablet</h2>
                    </div>
                    <div className="pt-2">
                        <ul className="font13px">
                            <li>Amazon Fire Tablets</li>
                            <li>Android Phone & Tablets</li>
                            <li>iPhone & iPad</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="md:pt-6">
                        <i className="fas fa-gamepad fa-4x"></i>
                    </div>
                    <div className="pt-6 md:pt-8">
                        <h2 className="font14px font-semibold">Game Consoles</h2>
                    </div>
                    <div className="pt-2">
                        <ul className="font13px">
                            <li>PS4</li>
                            <li>PS5</li>
                            <li>Xbox One</li>
                            <li>Xbox Series X</li>
                            <li>Xbox Series S</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fontcolorwhite pt-10 pb-5">
                <h3 className="text-sm font-bold text-center">@2021</h3>
            </div>
        </main>
  );
}

export default App;

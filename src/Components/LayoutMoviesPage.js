import React from 'react';
import '../index.css';
import backgroundImgMovies from '../Assets/Screen Shot mobile.png';
import backgroundImg from '../Assets/Screen Shot web.png'
import Icon from './Icon';
import Footer from '../Components/Footer'
import Trending from './Trending';
import BirdBox from '../Assets/bird box.png';
import Fyre from '../Assets/fyre.png';
import SexEducation from '../Assets/sex education.png';
import TidyingUp from '../Assets/tidying up.png';
import You from '../Assets/you.png';
import TopRated from './TopRated';


const LayoutMoviesPage = () => {
    return (
        <main className="md:relative">
            <img className="hidden w-screen md:block md:absolute" src={backgroundImg} alt="backgroundimg" />
            <div className="container-home md:absolute">
                <div id="fondo">
                    <img className="w-screen md:hidden xl:hidden" src={backgroundImgMovies} alt="background" />
                </div>
                <div id="buttons">
                    <div id="genero">
                        <nav>
                            <a>Kids</a> •
                            <a>Fantasy Movies</a> •
                            <a>Action</a>
                        </nav>                                      
                    </div>
                    <span id="movy">MOVY ORIGINAL</span>
                    <div id="rectangle"></div>
                    <div id="botones">
                        <Icon
                            class="plus"
                            icon="fa-plus"
                            fasOrFar="fas"
                        />
                        <Icon
                            class="play"
                            icon="fa-play-circle"
                            fasOrFar="far"
                        />
                        <Icon
                            class="info"
                            icon="fa-info-circle"
                            fasOrFar="fas"
                        />          
                    </div>      
                    <div id="nombrebotones">
                        <div id="plus">My list</div>
                        <div id="play">Play  </div>
                        <div id="info">Info</div>                
                    </div>  
                </div>
                <div id="movies">
                    <section>
                        <div id="namelist">My List</div>
                        <div className="listmovies">
                            <div className="flex flex-nowrap">
                                <img className="peliculas" src={You} alt="you " />
                                <img className="peliculas" src={SexEducation} alt="sex education" />
                                <img className="peliculas" src={TidyingUp} alt="tidying up" />
                                <img className="peliculas" src={BirdBox} alt="bird box" />
                                <img className="peliculas" src={Fyre} alt="fyre" /> 
                                <img className="peliculas" src={You} alt="you " />
                                <img className="peliculas" src={SexEducation} alt="sex education" />
                                <img className="peliculas" src={TidyingUp} alt="tidying up" />
                                <img className="peliculas" src={BirdBox} alt="bird box" />
                                <img className="peliculas" src={Fyre} alt="fyre" /> 
                                <img className="peliculas" src={You} alt="you " />
                                <img className="peliculas" src={SexEducation} alt="sex education" />
                                <img className="peliculas" src={TidyingUp} alt="tidying up" />
                                <img className="peliculas" src={BirdBox} alt="bird box" />
                                <img className="peliculas" src={Fyre} alt="fyre" /> 
                                <img className="peliculas" src={You} alt="you " />
                                <img className="peliculas" src={SexEducation} alt="sex education" />
                                <img className="peliculas" src={TidyingUp} alt="tidying up" />
                                <img className="peliculas" src={BirdBox} alt="bird box" />
                                <img className="peliculas" src={Fyre} alt="fyre" />     
                            </div>                              
                        </div>
                    </section>
                    <section>
                        <div id="namelist">Trending</div>
                        <div className="listmovies">
                            <Trending />              
                        </div>
                    </section>
                    <section>
                        <div id="namelist">Top Rated</div>
                        <div className="listmovies"> 
                            <TopRated />         
                        </div>
                    </section>
                </div>
            </div>
            <Footer
                bg="bg-black"
                paddingBottom="pb-5"
            />
        </main>
    )
}

export default LayoutMoviesPage;

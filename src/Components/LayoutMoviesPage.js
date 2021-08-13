import React from 'react';
import '../index.css';
import backgroundImgMovies from '../Assets/Screen Shot mobile.png';
import backgroundImg from '../Assets/Screen Shot web.png'
import Icon from './Icon';
import Footer from '../Components/Footer'
import Trending from './Trending';
import RecentlyAdded from './RecentlyAdded';
import MyList from './MyList';


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
                            <MyList />
                        </div>
                    </section>
                    <section>
                        <div id="namelist">Trending</div>
                        <div className="listmovies">
                            <Trending />              
                        </div>
                    </section>
                    <section>
                        <div id="namelist">Recently Added</div>
                        <div className="listmovies"> 
                            <RecentlyAdded />         
                        </div>
                    </section>
                </div>
            </div>
            <Footer
                bg="bg-black"
                paddingBottom="pb-5"
                footer="footermovies"
            />
        </main>
    )
}

export default LayoutMoviesPage;



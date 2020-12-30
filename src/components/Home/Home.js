import React from 'react';
import { CustomCarousel } from '../../sub-components/Carousel/CustomCarousel'
import './Home.css'

export const Home = () => {
    return (
        <div className="home">
            <div className="home__carousel">
                <CustomCarousel />
            </div>
            <div className="home__container">
                Welcome to cookbook website. We are currently making delicious food recipes, Once it ready we will show it to you here
            </div>
            
             
             
        </div>
    );
};


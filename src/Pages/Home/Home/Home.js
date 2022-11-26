import React from 'react';
import Banner from './Banner/Banner';
import BannerTwo from './Bannertwo/BannerTwo';
import Category from './Category/Category';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Category></Category>
            <BannerTwo></BannerTwo>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner/Banner';
import BannerTwo from './Bannertwo/BannerTwo';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <BannerTwo></BannerTwo>
        </div>
    );
};

export default Home;
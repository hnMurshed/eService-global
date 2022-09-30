import React from 'react';
import Banner from './sections/Banner/Banner';
import GrowingProcess from './sections/GrowingProcess/GrowingProcess';
import Services from './sections/Service/Services';
import TeamExperts from './TeamExperts/TeamExperts';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <TeamExperts />
            <GrowingProcess />
        </div>
    );
};

export default Home;
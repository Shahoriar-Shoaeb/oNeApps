import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import TrendingApp from '../TrendingApp/TrendingApp';

const TrendingApps = () => {
    const trenDingAppData = useLoaderData();
    console.log(trenDingAppData);
    return (
        <div className="">
            <h1>Trending Apps</h1>
            <h4>Explore All Trending Apps on the Market developed by us</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    trenDingAppData.slice(0, 8).map(app => <TrendingApp key={app.id} app={app}></TrendingApp>)
                }
                <NavLink to='/allApps'><button className='!border-amber-900'>Show All</button></NavLink>
            </div>
        </div>
    );
};

export default TrendingApps;
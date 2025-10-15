import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TrendingApp from '../TrendingApp/TrendingApp';

const TrendingApps = () => {
    const trenDingAppData = useLoaderData();
    console.log(trenDingAppData);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            
            {
                trenDingAppData.map(app => <TrendingApp key={app.id} app={app}></TrendingApp>)
            }
            <button className='border-amber-300'>Show All...</button>
        </div>
    );
};

export default TrendingApps;
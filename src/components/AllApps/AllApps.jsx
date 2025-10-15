import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TrendingApp from '../TrendingApp/TrendingApp';

const AllApps = () => {
    const allAppsData = useLoaderData();
    console.log(allAppsData);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            
            {

                allAppsData.map(app => <TrendingApp key={app.id} app={app}></TrendingApp>)
            }
            
        </div>
    );
};

export default AllApps;
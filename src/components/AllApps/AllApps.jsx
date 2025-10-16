import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TrendingApp from '../TrendingApp/TrendingApp';

const AllApps = () => {
    const [search, setSearch] = useState('');
    const allAppsData = useLoaderData();
    console.log(allAppsData);
    const filtApps = allAppsData.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="">
            <h1>Our All Applications</h1>
            <h4>Explore All Apps on the Market developed by us. We code for Millions</h4>
            <div className="">
                <h1>({allAppsData.length})Apps Found</h1>
                <input type="text" placeholder="Search apps..."
                className="input input-bordered w-full max-w-xs mb-4 p-2 border rounded-md"
                value={search} onChange={(e) => setSearch(e.target.value)}/>
                {
                    filtApps.length>0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {
                                filtApps.map(app => <TrendingApp key={app.id} app={app}></TrendingApp>)
                            }
                        </div>
                    ) : (<p>No app found</p>)
                }
            </div>

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>  
                {
                    allAppsData.map(app => <TrendingApp key={app.id} app={app}></TrendingApp>)
                }
                
            </div> */}
        </div>
    );
};

export default AllApps;
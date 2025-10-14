import React from 'react';
import App from '../App/App';

const Apps = () => {
    return (
        <div>
            <div className="mx-auto text-center my-10">
            <h1>Trending Apps</h1>
            <h6>Explore All Trending Apps on the Market developed by us</h6>
            </div>
            <div className="flex flex-wrap gap-5 justify-center my-10">
                <App></App>
                <App></App>
                <App></App>
                <App></App>
                <App></App>
                <App></App>
                <App></App>
                <App></App>
            </div>
        </div>
    );
};

export default Apps;
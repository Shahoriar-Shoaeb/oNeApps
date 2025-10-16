import React from 'react';

const States = () => {
    return (
        <div className="">
            <h1 className='text-center'>Trusted by Millions, Built for You</h1>
            <div className="stats shadow mx-auto my-10 w-2/2">
                <div className="stat place-items-center">
                    <div className="stat-title">Total Downloads</div>
                    <div className="stat-value">29.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Reviews</div>
                    <div className="stat-value text-secondary">906K</div>
                    <div className="stat-desc text-secondary">46% more than last month</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Active Apps</div>
                    <div className="stat-value">132+</div>
                    <div className="stat-desc">31 more will Launch</div>
                </div>
            </div>
        </div>
    );
};

export default States;
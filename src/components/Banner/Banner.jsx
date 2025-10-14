import React from 'react';
import bannerImage from '../../assets/hero.png';

const Banner = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm mx-auto">
            
            <div className="card-body">
                <h2 className="card-title"> We Build Productive Apps </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end mx-auto">
                <button>Google Play</button>
                <button>App Store</button>
                </div>
            </div>
            <figure>
                <img src={bannerImage} alt="" />
            </figure>
        </div>
        // <div>
        //     <h1>We Build Productive Apps</h1>
        //     <p>At one@pp, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        //     <div className="">
        //         <button>Google Play</button>
        //         <button>App Store</button>
        //     </div>
        //     <img src={bannerImage} alt="" />
        // </div>
    );
};

export default Banner;
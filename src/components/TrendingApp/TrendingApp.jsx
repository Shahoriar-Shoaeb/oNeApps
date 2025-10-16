import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const TrendingApp = ({app}) => {
    const {image, title ,downloads, ratingAvg} = app;
    return (
        <Link to={`/appDetails/${app.id}`}>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src={image}
                    alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {title}
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline"><MdOutlineFileDownload />{downloads}</div>
                    <div className="badge badge-outline"><FaStar />{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TrendingApp;
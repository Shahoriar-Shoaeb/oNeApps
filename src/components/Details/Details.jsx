import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const singleBook = data.find(app => app.id === parseInt(id));
    console.log(singleBook);
    const {image, title, companyName, description, downloads, ratingAvg, reviews, size} = singleBook;
    return (
        <div className="">
            <div className="card card-side bg-base-100 shadow-sm">
                <figure className='max-w-[350px] max-h-[350px]'>
                    <img
                    src={image}
                    alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Developed by : {companyName}</p>
                    <div className="stats shadow mx-auto my-10 w-2/2">
                        <div className="stat place-items-center">
                            <div className="stat-title">Downloads</div>
                            <div className="stat-value">{downloads}</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Average Ratings</div>
                            <div className="stat-value text-secondary">{ratingAvg}</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Total Reviews</div>
                            <div className="stat-value">{reviews}</div>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Install Now ({size} MB)</button>
                    </div>
                </div>
            </div>
            <div className="">
                <h3>Ratings:</h3>
            </div>
            <div className="">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Details;
import React from 'react';

const PerProducts = ({ option, setCar }) => {
    const { sellerName, yearUsed, posted, original, resalePrice, location, img, name, Details } = option;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <img className='w-1/2' src={img} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title text-success">{name}</h2>
                    <h2 className='font-bold'>Seller Name :{sellerName}</h2>
                    <p>Location:{location}</p>
                    <p> Use:{yearUsed}Years</p>
                    <p>Post Date:{posted}</p>
                    <p>Original Price:{original}</p>
                    <p>Resale Price:{resalePrice}</p>
                    <p> Details:{Details}</p>
                    <div className="card-actions justify-end">

                        <label htmlFor="booking-modal" className="btn btn-primary text-center"

                            onClick={() => setCar(option)

                            }
                        >Booking now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerProducts;
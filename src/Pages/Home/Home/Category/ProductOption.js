import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductOption = ({ option }) => {
    const { name, img } = option;
    const navigate = useNavigate()
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className=" text-center text-2xl font-bold">{name}</h2>
                <figure className="px-10 pt-10">

                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">



                    <button onClick={() => navigate('/product')} className="btn btn-success px-10 mt-3 mx-auto flex justify-center"> See all details </button>
                </div>
            </div>
        </div>
    );
};

export default ProductOption;
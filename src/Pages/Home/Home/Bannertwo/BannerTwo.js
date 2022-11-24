import React from 'react';

const BannerTwo = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhg5PhZC0VZqNURem_KsH2i1sQ3r9re8H2A&usqp=CAU" alt='' className=" rounded-lg w-1/2 shadow-2xl" />
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Resell Car!</h1>
                        <p className="py-6">Find the best deals on cars from the trusted dealers and sellers in Bangladesh. Bikroy.com has the largest collection of cars from top brands and latest ....</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTwo;
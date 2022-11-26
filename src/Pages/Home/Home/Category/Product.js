import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import PerProducts from './PerProducts';

const Product = () => {
    const [productsOptions, setProductsOptions] = useState([]);
    const [car, setCar] = useState(null);


    useEffect(() => {
        fetch('productsOptions.json')
            .then(res => res.json())
            .then(data => setProductsOptions(data))
    }, [])
    return (
        <div>
            <div className='grid gap-6 grid-cols-1  py-10'>

                {
                    productsOptions.map(option => <PerProducts
                        key={option._id}
                        option={option}
                        setCar={setCar}


                    ></PerProducts>)
                }

            </div>
            {
                car && <BookingModal
                    car={car}
                    setCar={setCar}
                ></BookingModal>}
        </div>
    );
};

export default Product;
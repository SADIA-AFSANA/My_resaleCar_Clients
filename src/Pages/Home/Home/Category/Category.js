import React, { useEffect, useState } from 'react';
import ProductOption from './ProductOption';

const Category = () => {
    const [productsOptions, setProductsOptions] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/productsOptions')
            .then(res => res.json())
            .then(data => setProductsOptions(data))
    }, [])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>

            {
                productsOptions.map(option => <ProductOption
                    key={option._id}
                    option={option}
                ></ProductOption>)
            }

        </div>
    );
};

export default Category;
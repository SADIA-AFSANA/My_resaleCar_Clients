import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import PerProducts from './PerProducts';
import {
    useQuery
} from '@tanstack/react-query'
import Loading from '../../../Shared/Loading/Loading';

const Product = () => {
    // const [productsOptions, setProductsOptions] = useState([]);
    const [car, setCar] = useState(null)
    const { data: productsOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['productsOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productsOptions')
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/productsOptions')
    //         .then(res => res.json())
    //         .then(data => setProductsOptions(data))
    // }, [])
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
                    refetch={refetch}

                ></BookingModal>}
        </div>
    );
};

export default Product;
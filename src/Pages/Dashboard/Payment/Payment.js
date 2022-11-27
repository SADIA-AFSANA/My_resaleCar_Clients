import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const { data } = useLoaderData();
    console.log('booking data', data);
    return (
        <div>
            <h2 className="text-success">payment</h2>
        </div>
    );
};

export default Payment;
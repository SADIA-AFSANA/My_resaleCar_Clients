import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_Pk);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const { price, sellerName, yearUsed, posted, original, resalePrice, location, img, name, Details } = booking;
    return (
        <div>
            <h2 className="text-success text-2xl font-bold">payment for{booking.sellerName}</h2>
            {/* <p>please pay {price} for your product</p> */}
            <p>please pay $ {resalePrice} for your product</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
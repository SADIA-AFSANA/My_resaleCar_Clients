import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Bookings</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings &&
                            bookings?.map((booking, i) =>
                                <tr key={bookings._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.sellerName}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.phone}</td>

                                    <td>{booking.location}</td>
                                    <td>

                                        {
                                            booking.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}

                                            >
                                                <button className='btn btn-primary'>Pay</button>
                                            </Link>

                                        }
                                        {
                                            booking.price && booking.paid &&
                                            <span className='text-primary'>paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;
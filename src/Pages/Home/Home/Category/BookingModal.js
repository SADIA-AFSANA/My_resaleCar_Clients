import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const BookingModal = ({ car, setCar, refetch }) => {
    const { name, sellerName, resalePrice, location, } = car;
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const sellerName = form.sellerName.value;
        const resalePrice = form.resalePrice.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        // console.log(name, sellerName, resalePrice, email, phone, location);
        const booking = {
            sellerName,
            resalePrice,
            name,
            email,
            phone,
            location
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setCar(null);
                    toast.success('Booking done')
                }
                else {
                    toast.error(data.message);
                    refetch();
                }
            })

    }

    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name="sellerName" type="text" disabled value={sellerName} className="input input-bordered w-full " />
                        <input name="resalePrice" type="text" disabled value={resalePrice} className="input input-bordered w-full " />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your name" className="input input-bordered w-full " />
                        <input name="email" type="text" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input name="location" type="text" placeholder="Meeting Location" className="input input-bordered w-full " />
                        <br />
                        <input className=" btn btn-secondary input input-bordered w-full " type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
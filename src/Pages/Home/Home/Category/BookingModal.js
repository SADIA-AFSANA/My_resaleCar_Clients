import React from 'react';

const BookingModal = ({ car, setCar }) => {
    const { name, sellerName, resalePrice, location, } = car;

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
        console.log(booking);
        setCar(null);
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
                        <input name="name" type="text" placeholder="Your name" className="input input-bordered w-full " />
                        <input name="email" type="text" placeholder="Email Address" className="input input-bordered w-full " />
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
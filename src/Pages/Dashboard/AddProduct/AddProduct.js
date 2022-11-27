import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey);
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('add successfully');
                            navigate('/dashboard/managedproduct')
                        })
                }

            })

    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>Add a product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)} >
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input type="text" {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input type="text" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs py-3">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register('specialty')}
                        className="select input-bordered w-full max-w-xs py-3">
                        <option disabled selected>Select a specialty </option>
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-bold">Photo</span>

                    </label>
                    <input type="file" {...register("image", { required: true })} className="input input-bordered w-full max-w-xs" />
                </div>

                <input className='btn btn-success py-3' value="Add Product" type="submit" />
                {/* {
                    signupError && <p className='text-red-500'>{signupError}</p>
                } */}
            </form>
        </div>
    );
};

export default AddProduct;
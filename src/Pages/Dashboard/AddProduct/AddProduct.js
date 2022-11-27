import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        console.log(data);
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
                    <input type="file" {...register("img", { required: true })} className="input input-bordered w-full max-w-xs" />
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
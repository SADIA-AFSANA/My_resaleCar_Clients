import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useToken from '../../hooks/usetoken';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('');
    const [createdEmail, setCreatedEmail] = useState('');
    const [token] = useToken(createdEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = data => {

        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('user created successfully')


                const userInfo = {
                    displayName: data.name
                };

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message);
            });
    }

    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedEmail(email);

            })
    }



    return (
        <div>
            <div className='h-[800px] flex justify-center items-center bg-yellow-100'>
                <div className='w-96 p-7'>
                    <h2 className='text-4xl '>SignUp</h2>
                    <form onSubmit={handleSubmit(handleSignUp)} >
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
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'length should be 6 character.' } })} className="input input-bordered w-full max-w-xs" /></div>
                        <div className='form-control w-full my-3'>
                            <select className='p-3 border rounded-2xl' {...register("role")}>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>

                        <input className='btn btn-success' value="Signup" type="submit" />
                        {
                            signupError && <p className='text-red-500'>{signupError}</p>
                        }
                    </form>
                    <p>Already have an account <Link className='btn btn-primary' to="/login">Login</Link></p>
                    <div className='divider'>OR</div>

                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
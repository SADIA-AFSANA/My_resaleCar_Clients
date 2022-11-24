import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();

    const handleSignUp = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
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
                            <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                            <label className="label">

                            </label>
                        </div>
                        <input className='btn btn-success' value="Signup" type="submit" />
                    </form>
                    <p>Already have an account <Link className='btn btn-primary' to="/login">Login</Link></p>
                    <div className='divider'>OR</div>
                    <button className='btn btn-secondary w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
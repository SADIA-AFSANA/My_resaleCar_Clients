import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)

            });
    }

    return (
        <div className='h-[800px] flex justify-center items-center bg-orange-100'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl '>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>

                    <input className='btn btn-success' value="Login" type="submit" />
                    <div>
                        {
                            loginError && <p>{loginError}</p>
                        }
                    </div>
                </form>
                <p>New to Account <Link className='btn btn-primary' to="/signup">SIGN Up</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-secondary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
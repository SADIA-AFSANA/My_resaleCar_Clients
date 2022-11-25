// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'
// import { useForm } from "react-hook-form";
// import { AuthContext } from '../../Context/AuthProvider';
// import toast from 'react-hot-toast';


// const SignUp = () => {
//     const { register, handleSubmit } = useForm();
//     const { createUser, updateUser } = useContext(AuthContext);
//     const [signupError, setSignupError] = useState('');

//     const navigate = useNavigate();

//     const handleSignUp = data => {
//         console.log(data)
//         setSignupError('');

        // createUser(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);

        //         toast('Create user successful.');

        //         const userInfo = {
        //             displayName: data.name
        //         };

        //         updateUser(userInfo)
        //             .then(() => {
        //                 navigate('/');
        //             })
        //             .catch(err => console.log(err));

        //     })
        //     .catch(error => {
        //         console.log(error)
        //         setSignupError(error.message);
        //     });

//     }
//     return (
//         <div className='h-[800px] flex justify-center items-center text-neutral'>
//             <div className='w-96 p-7'>
//                 <h2 className='text-4xl text-center '>Sign Up</h2>

//                 <form onSubmit={handleSubmit(handleSignUp)}>

//                     <div className="form-control w-full ">

//                         <label className="label"><span className="label-text">Name</span></label>

//                         <input type="text"  {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />

//                     </div>
//                     <div className="form-control w-full ">

//                         <label className="label"><span className="label-text">Email*</span></label>

//                         <input type="email"  {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />

//                     </div>
//                     <div className="form-control w-full ">
//                         <label className="label"> <span className="label-text">Password*</span></label>

//                         <input type="password"  {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'length should be 6 character.' } })} className="input input-bordered w-full" />
//                     </div>
//                     <div className='form-control w-full my-3'>
//                         <select className='p-3 border' {...register("role")}>
//                             <option value="buyer">Buyer</option>
//                             <option value="seller">Seller</option>
//                         </select>
//                     </div>

//                     <input className='btn w-full' type="submit" value='SignUp' />
//                     {
//                         signupError && <p className='text-red-500'>{signupError}</p>
//                     }
//                 </form>
//                 <p className='my-2'>Already have an account? <Link to='/login'><span className='text-primary'>Please login</span></Link></p>

//                 <div className="divider">OR</div>
//                 <button className='btn btn-outline w-full bg-red-400'>CONTINUE WITH GOOGLE</button>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

// ============
// import React, { createContext, useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
// import app from '../Firebase/firebase.config'

// export const AuthContext = createContext();
// const auth = getAuth(app)

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     const updateUser = (userInfo) => {
//         return updateProfile(auth.currentUser, userInfo);
//     }

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     useEffect(() => {

//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             console.log('observing users');
//             setUser(currentUser);
//             setLoading(false);
//         })

//         return () => unsubscribe();
//     }, [])

//     const authInfo = {
//         createUser,
//         signIn,
//         updateUser,
//         logOut,
//         user,
//         loading
//     }

//     return (
//         <div>
//             <AuthContext.Provider value={authInfo}>
//                 {children}
//             </AuthContext.Provider>
//         </div>
//     );
// };

// export default AuthProvider;
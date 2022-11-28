import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email
                }

            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-secondary w-full'>Google</button>
        </div>
    );
};

export default SocialLogin;
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';
import googleLogo from '../../../images/social/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    // if (user) {
    //     navigate(from, { replace: true });
    // }
    if (token) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
            </div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn mx-auto d-flex align-items-center justify-content-center'>
                <img width="20px" src={googleLogo} alt="" />
                <span className='mx-3'> Google Sign In</span>
            </button>
            {
                errorElement
            }
        </div>
    );
};

export default SocialLogin;
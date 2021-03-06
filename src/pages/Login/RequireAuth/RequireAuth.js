import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        <div>
            <h5 className='text-success'> Please Verify your email address</h5>
            <button
                className='btn'
                onClick={async () => {
                    await sendEmailVerification();
                    Toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;
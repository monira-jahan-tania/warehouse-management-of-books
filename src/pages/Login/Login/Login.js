import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Logo from '../../Logo/Logo';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios, { Axios } from 'axios';
import './Login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    if (loading) {
        <Loading />
    }

    if (user) {
        // navigate(from, { replace: true });
    }
    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://hidden-brook-58395.herokuapp.com/login', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });

    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('email Sent ');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='login'>
            <h1>Please Log In </h1>
            <div className='line'></div>
            <form onSubmit={handleLogin}>
                <input ref={emailRef} name='email' type="email" placeholder='email' />
                <div className='line'></div>
                <input name='password' type="password" placeholder='password' />
                <div className='line'></div>
                <br />
                <input className='btn' type="submit" value="Login" />
            </form>
            {
                errorElement
            }
            <p className='d-flex justify-content-around'>New to <Logo />? Please <Link to='/register'> Register</Link> Now..</p>
            <p>Forget Password? <button className='btn pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;
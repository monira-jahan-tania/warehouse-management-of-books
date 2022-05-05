import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Logo from '../../Logo/Logo';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios, { Axios } from 'axios';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

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
        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });

    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div className='login'>
            <h1>Please Log In </h1>
            <div className='line'></div>
            <form onSubmit={handleLogin}>
                <input name='email' type="email" placeholder='email' />
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
            <SocialLogin />
        </div>
    );
};

export default Login;
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Logo from '../../Logo/Logo';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        <Loading />
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);

    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div className='register'>
            <h1>Please Sign Up To See Your Stocks</h1>
            <div className='line'></div>
            <form onSubmit={handleRegister}>
                <input name='name' type="text" placeholder='Username' required />
                <div className='line'></div>
                <input name='email' type="email" placeholder='email' required />
                <div className='line'></div>
                <input name='password' type="password" placeholder='password' required />
                <div className='line'></div>
                <br />
                <input className='btn' type="submit" value="Register" />
            </form>
            {
                errorElement
            }
            <p className='d-flex justify-content-around'>New to <Logo /> ? Please <Link to='/login' onClick={navigateLogin}> Login</Link> Now..</p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
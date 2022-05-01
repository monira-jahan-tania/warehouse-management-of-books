import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Logo from '../../Logo/Logo';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = (event) => {
        event.preventDfault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
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
            <p className='d-flex justify-content-around'>New to <Logo />? Please <Link to='/register'> Register</Link> Now..</p>
        </div>
    );
};

export default Login;
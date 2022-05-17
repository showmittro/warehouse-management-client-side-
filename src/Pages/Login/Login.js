import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import LoginPage from '../../images/login.jpg'
import Google from '../../images/google.png'
import { Button } from 'react-bootstrap';
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(signInWithEmailAndPassword)
    }

   
    



    return (
        <div className='mt-5'>

            <div>
                <h1 >Please LogIn</h1>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <form onSubmit={handleUserSignIn}>
                                <div class="mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        class="form-control"
                                        id="email"
                                        placeholder="Your Email"
                                        onBlur={handleEmailBlur}
                                        required />
                                </div>
                                <div class="mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        class="form-control"
                                        id="password"
                                        onBlur={handlePasswordBlur}
                                        placeholder="Your Password"
                                        required />
                                </div>
                                <p style={{ color: 'red' }}>{error?.message}</p>
                                {
                                    loading && <p>Loading...</p>
                                }
                                <div class="mb-3">
                                    <button type="submit" class="form-control text-white fw-bold" style={{ background: '#DAA520' }} >LogIn</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className='img-fluid h-100 w-100' src={LoginPage} alt="" />

                        </div>
                        <p>
                            New to Biycle-Inventory? <Link className='' to="/register">Create an account</Link>
                        </p>
                    </div>
                </div>


                <Button
                 onClick={() =>
                    signInWithGoogle()
                        .then(result => {
                            const user = result.user;
                            if (user) {
                                navigate(from, { replace: true });
                            }
                            error('');
                        })} 
                 style={{ background: 'black', border: 'none' }}>
                      <img style={{ height: '30px' }} src={Google} alt="" /> GoogleSingIn</Button>

            </div>

        </div>
    );
};

export default Login;
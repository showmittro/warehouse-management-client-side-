import React from 'react';
import LoginPage from '../../images/login.jpg'
import Google from '../../images/google.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mt-5'>
           
            <div>
            <h3 >Please Register</h3>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <form>
                            <div class="mb-3">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Your Email"
                                    required />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="Your Password"
                                    required />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="Re-Type-Password"
                                    required />
                            </div>
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


            <Button style={{ background: 'black', border: 'none' }}> <img style={{ height: '30px' }} src={Google} alt="" /> GoogleSingIn</Button>

        </div>
            
        </div>
    );
};

export default Register;
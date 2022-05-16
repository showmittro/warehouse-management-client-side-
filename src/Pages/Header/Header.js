import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="#" style={{ color: 'yellow' }}>Biycle Inventory</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" className='text-decoration-none fw-bold' ><a style={{ color: 'yellow' }} className="nav-link">Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-decoration-none fw-bold' to="/blog"> <a style={{ color: 'yellow' }} className="nav-link" href="#">Blogs</a> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-decoration-none fw-bold' to="/about"><a style={{ color: 'yellow' }} className="nav-link" href="#">About</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" className='text-decoration-none fw-bold' ><a style={{ color: 'yellow' }} className="nav-link">Login</a></Link>
                            </li>
                            {/* {

                                user?.email ?
                                    <div className="mx-2" >
                                        {user.displayName}
                                        <img src={user.photoUrl} alt="" />

                                        <button className="btn btn-outline-success" onClick={logOut}>LogOut</button>
                                    </div> : <div className="d-flex">
                                    </div>

                            } */}


                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;
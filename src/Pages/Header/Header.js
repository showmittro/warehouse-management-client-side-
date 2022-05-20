import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="#" style={{ color: '#DAA520' }}>Biycle Inventory</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" className='text-decoration-none fw-bold' ><a style={{ color: '#DAA520' }} className="nav-link">Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-decoration-none fw-bold' to="/blog"> <a style={{ color: '#DAA520' }} className="nav-link" href="#">Blogs</a> </Link>
                            </li>
                           
                            {

                                user?.email ?
                                    <div className=" d-flex" >
                                         <li class="nav-item">
                                <Link to="/addItem" className='text-decoration-none fw-bold' ><a style={{ color: '#DAA520' }} className="nav-link">Add Item</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/manageInventories" className='text-decoration-none fw-bold' ><a style={{ color: '#DAA520' }} className="nav-link">Manage Inventories</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/myItem" className='text-decoration-none fw-bold' ><a style={{ color: '#DAA520' }} className="nav-link">My Item</a></Link>
                            </li>

                                        <div className='my-auto'>
                                        {user.displayName}
                                        <img src={user.photoUrl} alt="" />
                                        </div>

                                        <button style={{background:'#DAA520'}} className="btn mx-2" onClick={handleSignOut}>LogOut</button>
                                    </div> : <div className="d-flex">
                                    <li class="nav-item">
                                <Link to="/login" className='text-decoration-none fw-bold' ><a style={{ color: '#DAA520' }} className="nav-link">Login</a></Link>
                            </li>
                                    </div>

                            }


                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;
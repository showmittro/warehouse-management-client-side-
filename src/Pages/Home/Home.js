import React from 'react';
import './Home.css'
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {



    return (
        <div>

            <div className='header-banner  d-flex justify-content-center align-items-center'>
                <div className="container">
                    <div className='text-Black' style={{ color: '#DAF7A6 ' }}>
                        <h1 className='fw-bold'>My <span style={{ color: 'yellow' }}>Biycle </span> Inventory WORLD</h1>
                        <p>A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist</p>

                    </div>
                </div>
            </div>
            <Services></Services>
            <Brands></Brands>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;
import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 h-100' style={{background:'black',height:''}}>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    <div className="col">
                        <ul className='list-unstyled text-white'>
                            <h5>Information</h5>
                            <li>About Me</li>
                            <li>Blog</li>
                            <li>Testimonial</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className='list-unstyled text-white'>
                            <h5>Helpful Links</h5>
                            <li>Services</li>
                            <li>Supports</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className='list-unstyled text-white'>
                            <h5>Contact Me</h5>
                            <li>Address: Feni Bangladesh</li>
                            <li>Email: personaltutor@gmail.com</li>
                            <li>Phone: +88545265252</li>
                        </ul>
                    </div>

                </div>
                <div className='text-white text-center'>
                <hr />
                <p className='pb-3'>copyRight@bicyleInventory2022</p>
                </div>
            </div>

            
        </div>
    );
};

export default Footer;
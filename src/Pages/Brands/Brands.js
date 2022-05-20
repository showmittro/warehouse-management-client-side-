import React from 'react';
import Brands1 from '../../images/brand1.png'
import Brands2 from '../../images/brand2.png'
import Brands3 from '../../images/brand3.png'
import Brands4 from '../../images/brand4.png'
import Brands5 from '../../images/brand5.png'
import Brands6 from '../../images/brand6.png'
import Brands7 from '../../images/brand7.png'
import Brands8 from '../../images/brand8.png'
import Brands9 from '../../images/brand9.png'
import Brands10 from '../../images/brand10.png'
import Brands11 from '../../images/brand11.jpg'



const Brands = () => {
    return (
        <div className='mt-5'>

            <div className="container">
                <h2 className='fw-bold' style={{ color: '#DAA520' }}> <i>Our Brands</i> </h2>
                <div  >

                    <div style={{marginLeft:'50px'}} class="row row-cols-2 row-cols-md-4 pt-4 g-4">
                        {/* item 1  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img style={{}} className='h-100 w-100' src={Brands1} alt="" />
                            </div>
                        </div>
                        {/* item 2  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands2} alt="" />
                            </div>
                        </div>
                        {/* item 3  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands3} alt="" />
                            </div>
                        </div>
                        {/* item 3  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands3} alt="" />
                            </div>
                        </div>
                        {/* item 4  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands4} alt="" />
                            </div>
                        </div>
                        {/* item 5  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands5} alt="" />
                            </div>
                        </div>
                        {/* item 6  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands6} alt="" />
                            </div>
                        </div>
                        {/* item 7  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands7} alt="" />
                            </div>
                        </div>
                        {/* item 8  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands8} alt="" />
                            </div>
                        </div>
                        {/* item 9  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands9} alt="" />
                            </div>
                        </div>
                        {/* item 10  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands10} alt="" />
                            </div>
                        </div>
                        {/* item 11  */}
                        <div className="col">
                            <div style={{ border: '1px solid yellow', color: 'black', height: '150px', width: '150px' }}>
                                <img className='h-100 w-100' src={Brands11} alt="" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default Brands;
import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="container">
                <h3 style={{color:'#DAA520'}} className='mt-5 fw-bold'>Contact Us</h3>
                <div className="row d-flex align-items-center pt-5">
                    <div className="col-12 col-md-6">
                        <h5 className='fw-bold '>Get Intouch
                        </h5>
                        <p>Have a question or just want to say hi? We'd love to hear from you.</p>
                        <div class="mb-3">
                            <input style={{ border: '1px solid #DAA520' }} type="text" class="form-control" placeholder="Your Full Name" />
                        </div>
                        <div class="mb-3">
                            <input style={{ border: '1px solid #DAA520' }} type="email" class="form-control" placeholder="Your Email" />
                        </div>
                        <div class="mb-3">
                            <input style={{ border: '1px solid #DAA520' }} type="number" class="form-control" placeholder="Your Number" />
                        </div>
                        <div class="mb-3">
                            <textarea style={{ border: '1px solid #DAA520' }} class="form-control" placeholder=' Type Your Meassage Here' rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <input style={{ background: '#DAA520' }} type="button" class="form-control text-white fw-bold rounded" value="Submit" />
                        </div>





                    </div>
                    <div className="col-12 col-md-6">
                        <p><iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29378.474195382754!2d91.38132083558204!3d23.012413937304867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753429e88a352f7%3A0xdf9547cb76f03b88!2sFeni!5e0!3m2!1sen!2sbd!4v1653046233993!5m2!1sen!2sbd" height="380" allowfullscreen="" ></iframe></p>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
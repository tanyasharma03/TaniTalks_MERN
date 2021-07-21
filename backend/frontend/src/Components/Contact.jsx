import React from 'react';
import Message from './Message';

const Contact = () => {
    return (
        <div>
            <div className="contact-info">
                <div className="container-fluid mt-4">
                    <div className="row">
                        <div className="col-lg-4 col-12 d-flex justify-content-around">
                             {/* phone number  */}
                            <div className="contact-info-item d-flex justify-content-start align-items-center">
                            <i class="zmdi zmdi-phone-in-talk zmdi-hc-lg"></i>
                                <div className="contact-info-content">
                                    <div className="contact-title">
                                       <h6>Phone</h6>
                                    </div>
                                    <div className="contact-text">
                                        <p>+91 9876543321</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                             {/* email  */}
                            <div className="col-lg-4 col-12 d-flex justify-content-around">
                            <div className="contact-info-item d-flex justify-content-start align-items-center">
                            <i class="zmdi zmdi-email zmdi-hc-lg"></i>
                                <div className="contact-info-content">
                                    <div className="contact-title">
                                       <h6> Email</h6>
                                    </div>
                                    <div className="contact-text">
                                        <p>tasu2612@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                             {/* address  */}
                            <div className="col-lg-4 col-12 d-flex justify-content-around">
                            <div className="contact-info-item d-flex justify-content-start align-items-center">
                            <i class="zmdi zmdi-home zmdi-hc-lg"></i>
                                <div className="contact-info-content">
                                    <div className="contact-title">
                                        <h6>Address</h6>
                                    </div>
                                    <div className="contact-text">
                                        <p>Jhrsuguda, Odisha, India</p>
                                    </div>
                                </div>
                            </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <Message />
                
            </div>
    )
}

export default Contact

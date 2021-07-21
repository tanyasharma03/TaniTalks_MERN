import React from 'react'
import signpic from "../Images/Register.png";
import "bootstrap/dist/css/bootstrap.css";
import ImageSec from './ImageSec';
import RegisterForm from './RegisterForm';
import "../App.css";


export const Register = () => {
    return (
        <div>
            <section>
                <div className="container-fluid mt-4 mb-4">
                    <div className="signup-content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 mx-auto">
                            <div className="signup-form">
                            <h2 className="form-title" style={{fontWeight:700,fontSize:"25px"}}> Sign up</h2>
                           <RegisterForm />
                           </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mx-auto">
                           <ImageSec to="/signin" message="I am already registered" img={signpic} />
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
        </div>
    )
}

export default Register

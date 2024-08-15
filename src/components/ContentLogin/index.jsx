import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom'

export const ContentLogin = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();

    const location = useLocation()
    //const { name, price, description, img } = location.state

    const handleSubmit = async (e) => {
        
        try {
            axios.get(process.env.REACT_APP_URL_API_USER)
                .then((response) => {
                    const user = response.data;
                    const userExist = user.map((users) => {
                        if(users.email == email && users.pass == password){
                            return true;
                        }
                            
                    });
                
                    if (userExist.includes(true)) {
                        localStorage.setItem('user-email', email);
                        navigate('/shop');
                    } else {
                        navigate('/login');
                    }
                });


        } catch (error) {
            console.error(error);
        }

    }
    return (
        <>
            {/*<!-- Breadcrumb Start -->*/}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <a className="breadcrumb-item text-dark" href="#">Home</a>
                            <span className="breadcrumb-item active">Login</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/*<!-- Breadcrumb End -->*/}


            {/*<!-- Contact Start -->*/}
            <div className="container-fluid">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Login</span></h2>
                <div className="row px-xl-5">
                    <div className="col-lg-6 mx-auto mb-5">
                        <div className="contact-form bg-light p-30">
                            <div id="success"></div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email"
                                    required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                                    required="required" data-validation-required-message="Please enter a password" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4" onClick={handleSubmit}> Login </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Contact End -->*/}
        </>

    );
};
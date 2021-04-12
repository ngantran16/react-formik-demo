import React, { useState } from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';
import Images from '../../themes/Images';
import './Contact.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contact = () => {
    return (
        <div className="container">
            <Header />
            <div class="main">
                <img src={Images.imgBackground} alt="background-img" className="background-img" />
                <div className="wrapper">
                    <div className="form-backgronund">
                        <form action="" className="form-contact">
                            <div className="title-header">
                                <img src={Images.email} alt="email-icon" className="email-icon" />
                                <span className="title-contact">Contact us</span>
                            </div>
                            <div class="">
                                <div className="form-content">
                                    <div className="input-item"> 
                                        <div className="lable-title">
                                            <label>Your name</label>
                                        </div>
                                        <input type="text" className="input-text" placeholder="Enter the issue" />
                                    </div>

                                    <div className="input-item">
                                    <div className="lable-title">
                                            <label>Message:</label>
                                        </div>
                                        <textarea 
                                        rows={5}
                                        style={{height: 80, width: 220}}>
                                            Enter your Message
                                        </textarea>
                                    </div>
                                </div>
                                <div className="input-item"s>
                                    <div className="lable-title">
                                        <label>Select:</label>
                                    </div>
                                    <select className="input-text">
                                        <option value="Rider">Rider</option>
                                        <option value="Grap">Grap</option>
                                        <option selected value="Developer">Developer</option>
                                        <option value="Tester">Tester</option>
                                    </select>
                                </div>
                            </div>
                            <div className="action-form">
                                <button className="radius-button">
                                    <img src={Images.arrow} alt="arrow-img" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
        </div>
    );
}

export default Contact;
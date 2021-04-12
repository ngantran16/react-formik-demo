import React from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';
import Images from '../../themes/Images';
import './Contact.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    validationRules,
    validateValuesByRule
  } from '../../utils/validation';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          selected: '',
          messages: '',
        },
        validate: (values) => {
          return validateValuesByRule({
            name: validationRules.required,
            message: validationRules.required,
          })(values);
        },
        onSubmit: (values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 400);
        }
      });

return (
<div className="container">
<Header />
<div class="main">
    <img src={Images.imgBackground} alt="background-img" className="background-img" />
    <div className="wrapper">
        <div className="form-backgronund">
            <form method="post" onSubmit={formik.handleSubmit}>
                <div className="title-header">
                    <img src={Images.email} alt="email-icon" className="email-icon" />
                    <span className="title-contact">Contact us</span>
                </div>
                <div className="form-content">
                    <div className="input-item"> 
                        <div className="lable-title">
                            <label>Your name</label>
                        </div>
                        <div className={classNames({
                        'form-group': true,
                        'has-error': formik.touched.name && formik.errors.name
                        })}>
                        <input 
                            type="text" 
                            id="name" 
                            className="input-text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="Enter the issue" />
                            {formik.touched.name && formik.errors.name && (
                                <span className="help-block">
                                {formik.errors.name}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="input-item">
                    <div className="lable-title">
                        <label>Message:</label>
                    </div>
                        <div className={classNames({
                        'form-group': true,
                        'has-error': formik.touched.messages && formik.errors.messages
                        })}>
                        <textarea 
                        rows={5}
                        style={{height: 80, width: 220}}
                        type="text" 
                        id="messages" 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your Message"
                        >
                        </textarea>
                        {formik.touched.messages && formik.errors.messages && (
                            <span className="help-block">
                            {formik.errors.messages}
                            </span>
                        )}
                        </div>
                    </div>
                </div>
                <div className="input-item"s>
                    <div className="lable-title">
                        <label>Select:</label>
                    </div>
                    <select className="input-text">
                        <option selected value="Rider">Rider</option>
                        <option value="Grap">Grap</option>
                        <option value="Developer">Developer</option>
                        <option value="Tester">Tester</option>
                    </select>
                </div>
            <div className="action-form">
                <button 
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                    className="radius-button"
                    >
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
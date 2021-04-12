import React from 'react';
import Images from '../themes/Images';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <p>© 2021 Uber Technologies Inc.</p>
                <p>Terms of Use | Legal notices | Privacy & Security</p>
            </div>
            <div className="social-icon">
                <img src={Images.facebook} alt="" />
                <img src={Images.linkedin} alt="" />
                <img src={Images.youtube} alt="" />
            </div>
        </div> 
    )
}

export default Footer;
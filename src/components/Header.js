import React from 'react';
import Images from '../themes/Images';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Images.uberIcon} alt="uber-icon" className="uber-icon" />
                <div> Uberbd </div>
            </div>
            <div>
                <img src={ Images.menuIcon } alt="menu-icon" className="menu-icon" />
            </div>
        </header>
    );
}

export default Header;
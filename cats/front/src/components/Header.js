import React from 'react';
import logo from './../cat-icon.svg';

const Header = ({ title }) => {
    return (
        <nav>
            <h1 className="display-4 text-center">
                <img src={logo} className="logo" alt="logo"/>
                { title }
            </h1>
        </nav>
    );
};

export default Header;
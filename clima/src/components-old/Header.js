import React from 'react';

const Header = ({ titulo }) => {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <div className="nav-wrapper light-blue darken-3">
                <a href="#!" className="brand-logo">{ titulo }</a>
            </div>    
        </nav>
    );
};

export default Header;
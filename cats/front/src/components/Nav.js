import React from 'react';

const Nav = ({ titleLeft, titleRight, isLeft, leftHandler, rightHandler }) => {
    return (
        <div className="nav-btns">
            <button 
                onClick={() => leftHandler()}
                className={isLeft? "active" : ""}>
                { titleLeft }
            </button>
            <button 
                onClick={() => rightHandler()}
                className={isLeft? "" : "active"}>
                { titleRight }
            </button>   
        </div>
    );
};

export default Nav;
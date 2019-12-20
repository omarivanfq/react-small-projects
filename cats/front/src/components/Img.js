import React from 'react';

const Img = ({ url }) => {
    return (
        <div
            style={{
                display: "block",
                width:"100%",
                height:"100%",
                backgroundImage: `url(${ url })`,
                backgroundSize: "cover"
            }}
            ></div>
    );
};

export default Img;
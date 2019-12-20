import React from 'react';

const Cancion = ({ letra }) => {
    if (!letra) {
        return null;
    }
    return (
        <React.Fragment>
            <h2>Letra canción</h2>
            <p className="letra">{ letra }</p>
        </React.Fragment>
    );
};

export default Cancion;
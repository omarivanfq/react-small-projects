import React from 'react';

const Resultado = ({ resultado }) => {
    if (!resultado.main) return <h6 className="text-center">selecciona una locación</h6>;
    return (
        <div className="resultado">
            <h4>{resultado.name}</h4>
            { resultado.main.temp } &#x2103;
        </div>
    );
};

export default Resultado;
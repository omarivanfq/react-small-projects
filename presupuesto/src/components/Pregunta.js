import React, { useState } from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setReady }) => {

    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        if (cantidad <= 0 || isNaN(cantidad)) {
            setError(true);
            return;
        }
        setPresupuesto(cantidad);
        setError(false);
        setReady(true);
    };

    return (
        <form
            onSubmit={onSubmit}>
            { error ? <Error mensaje="Cantidad inválida"/> : null }
            <div className="campo">
                <h2>Ingresa tu presupuesto</h2>
                <input
                    type="number"
                    className="u-full-width"
                    onChange={e => setCantidad(parseInt(e.target.value,10))}/>
                <input
                    type="submit"
                    value="Ingresar presupuesto"
                    className="button-primary u-full-width"/>
            </div>
        </form>
    );
};

export default Pregunta;
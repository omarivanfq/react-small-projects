import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setReady, setRestante }) => {

    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        if (cantidad <= 0 || isNaN(cantidad)) {
            setError(true);
            return;
        }
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setReady(true);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje="El presupuesto es incorrecto"/> : null }
            <form
                onSubmit={onSubmit}
                >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Agrega tu presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}/>
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"/>
            </form>
        </Fragment>
    );
};

export default Pregunta;
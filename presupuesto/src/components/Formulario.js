import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ setGasto }) => {

    const [ nombre, setNombre ] = useState("");
    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        if (cantidad <= 0 || isNaN(cantidad) || nombre === "") {
            setError(true);
            return;
        }
        setError(false);
        setGasto(nombre, cantidad);
        setNombre("");
        setCantidad(0);
    }

    return (
        <form
            onSubmit={onSubmit}>
            <h2>Agregar gasto</h2>
            { error ? <Error mensaje="Cantidad o nombre inválido"/> : null }
            <div className="campo">
                <label>Nombre</label>
                <input 
                    className="u-full-width"
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}/>
            </div>
            <div className="campo">
                <label>Cantidad</label>
                <input 
                    className="u-full-width"
                    type="number"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}/>
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"/>
        </form>
    );
};

export default Formulario;
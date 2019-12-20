import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

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
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        };
        setError(false);
        setGasto(gasto);
      //  setCrearGasto(gasto);
        setNombre("");
        setCantidad("");
    }

    return (
        <form
            onSubmit={onSubmit}
            >
            <h2>Agrega tus gastos</h2>
            { error ? <Error mensaje="Datos introducidos incorrectos"/> : null }
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => setNombre(e.target.value)}
                    value={nombre}
                    />
            </div>
            <div className="campo">
                <label htmlFor="">Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => setCantidad(parseInt(e.target.value,10))}
                    value={cantidad}
                    />
            </div>
            <input 
                type="submit"
                name="button-primary u-full-width" 
                value="Agregar gasto"
                />
        </form>
    );
};

export default Formulario;
import React, { Fragment, useState } from 'react';

const Formulario = ({ consultarClima }) => {

    const [ busqueda, setBusqueda ] = useState({
        ciudad: "",
        pais: ""
    });

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        consultarClima(busqueda);
    }

    return (
        <Fragment>
            <form 
                onSubmit={handleSubmit}
                className="card-panel teal">
                <h5 className="text-center brand-logo">Consulta el clima</h5>
                <div className="input-field">
                    <input 
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        onChange={handleChange}
                        />
                        <label htmlFor="ciudad">Ciudad:</label>
                </div>
                <div className="input-field">
                    <select
                        name="pais"
                        id="pais"
                        onChange={handleChange}
                        >
                        <option value="">-- selecciona un pais -- </option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Buscar clima"
                    className=" btn-block btn-large yellow accent-4"
                    />
            </form>
        </Fragment>
    );
};

export default Formulario;
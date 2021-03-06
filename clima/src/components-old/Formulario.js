import React, { useState } from 'react';

const Formulario = ({ datosConsultar }) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: ""
    });

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const consultaClima = e => {
        e.preventDefault();
        datosConsultar(busqueda);
    }

    return (
        <form
            onSubmit={consultaClima}
            >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}/>
                    <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select 
                    onChange={handleChange}
                    name="pais"
                    id="pais">
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
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Buscar clima"/>
            </div>
        </form>
    );
};

export default Formulario;
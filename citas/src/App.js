import React, { useState, useEffect, Fragment } from 'react';

const Cita = ({ cita, index, eliminarCita }) => {
    return (
        <div className="cita">
            <p>Mascota: <span>{ cita.mascota }</span></p>
            <p>Dueño: <span>{ cita.propietario }</span></p>
            <p>Fecha: <span>{ cita.fecha }</span></p>
            <button 
                type="button"
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(index)}>
                    Eliminar
            </button>
        </div>
    );
}

const Formulario = ({ agregarCita }) => {

    const citaInicial = {
        mascota: "",
        propietario: "",
        fecha: ""
    };

    const [ cita, setCita ] = useState({...citaInicial});

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        agregarCita(cita);
        setCita({...citaInicial});
    }

    return (
        <Fragment>
            <h2>Formulario</h2>
            <form 
                onSubmit={onSubmit}
                className="container">
                <label>Mascota:</label>
                <input 
                    type="text"
                    placeholder="Nombre de mascota"
                    name="mascota"
                    className="u-full-width"
                    onChange={handleChange}
                    value={cita.mascota}
                    />
                <label>Dueño:</label>
                <input 
                    type="text"
                    placeholder="Nombre de dueño"
                    name="propietario"
                    className="u-full-width"
                    onChange={handleChange}
                    value={cita.propietario}
                    />
                <label>Fecha:</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={cita.fecha}
                    />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    />
            </form>
        </Fragment>
    );
};

const App = () => {

    const citasIniciales = JSON.parse(localStorage.getItem("citas")) || [];  //////////////////////////////////

    const [ citas, setcitas ] = useState(citasIniciales);

    const agregarCita = cita => {
        const nuevasCitas = [...citas, cita];
        setcitas(nuevasCitas);
    }

    const eliminarcita = index => {
        const nuevasCitas = [...citas];
        nuevasCitas.splice(index, 1);
        setcitas(nuevasCitas);
    }

    useEffect(
        () => {
            localStorage.setItem("citas", JSON.stringify(citas));
        },
        [ citas ]
    );

    return (
        <Fragment> 
            <h1>Administrar Citas</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario
                            agregarCita={agregarCita}
                            />
                    </div>
                    <div className="one-half column">
                        <h1>citas</h1>
                        {
                            citas.map(
                                (cita, index) => (
                                    <Cita
                                        key={`${cita.mascota}${cita.fecha}`}
                                        cita={cita}
                                        index={index}
                                        eliminarCita={eliminarcita}
                                        />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default App;
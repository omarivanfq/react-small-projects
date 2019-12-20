import React, { useState, useEffect, Fragment } from 'react';

const Formulario = ({ crearCita }) => {

  const citaInicial = { 
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  };

  const [ cita, setCita ] = useState({...citaInicial});

  const handleChange = e => { 
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    crearCita(cita);
    setCita({...citaInicial});
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form
        onSubmit={onSubmit}>
        <label>Nombre Mascota</label>
        <input 
          type="text" 
          name="mascota"
          className="u-full-width" 
          placeholder="Nombre Mascota"
          value={cita.mascota} 
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input 
          type="text" 
          name="propietario"
          className="u-full-width"  
          placeholder="Nombre Dueño de la Mascota"
          value={cita.propietario} 
          onChange={handleChange} 
        />

        <label>Fecha</label>
        <input 
          type="date" 
          className="u-full-width"
          name="fecha"
          value={cita.fecha} 
          onChange={handleChange}
        />               

        <label>Hora</label>
        <input 
          type="time" 
          className="u-full-width"
          name="hora" 
          value={cita.hora} 
          onChange={handleChange}
        />

        <label>Sintomas</label>
        <textarea 
          className="u-full-width"
          name="sintomas"
          value={cita.sintomas} 
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="button-primary u-full-width"
          >
            Agregar
        </button>
      </form>
    </Fragment>
  );
}

const Cita = ({ eliminarCita, cita, index }) => {
  return(
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propetario}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>
      <button 
        onClick={() => eliminarCita(index)}
        type="button"
        className="button eliminar u-full-width">
          eliminar
      </button>
    </div>
  );
}

const App = () => {

  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [ citas, setCitas ] = useState(citasIniciales);

  const crearCita = cita => {
    const nuevasCitas = [...citas, cita];
    setCitas(nuevasCitas);
  }

  const eliminarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  }

  useEffect(
    () => {
      let citasIniciales = JSON.parse(localStorage.getItem("citas"));
      if (citasIniciales) {
        localStorage.setItem("citas", JSON.stringify(citas));
      } else {
        localStorage.setItem("citas", JSON.stringify([]));
      }
    },
    [ citas ]
  );

  const titulo = (citas.length > 0? "Administrar citas" : "No hay citas aún");

  return (
    <Fragment>
      <h1>
        Administrador de pacientes
      </h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
              />
          </div>
          <div className="one-half column">
            <h2>{ titulo }</h2>
            { 
              citas.map((cita, index) => (
                <Cita
                  key={index}
                  index={index}
                  cita={cita}
                  eliminarCita={eliminarCita}
                  />
              ))
            }
          </div>  
        </div>
      </div>
    </Fragment>  
  );
};

export default App;
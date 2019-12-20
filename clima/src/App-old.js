import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

import './index.css';

function App () {

  const [ ciudad, setCiudad ] = useState("");
  const [ pais, setPais ] = useState("");
  const [ error, setError ] = useState(false);
  const [ resultado, setResultado ] = useState({});

  useEffect(() => {
    if (ciudad === "") return;
    const consultarAPI = async () => {
      const appId = 'b70edca46d4cf25b5b119535e904d093';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ ciudad },${ pais }&appid=${ appId }`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setResultado(resultado);
    }

    consultarAPI();
  }, [ ciudad, pais ]);

  const datosConsultar = datos => {
    if (datos.ciudad === "" || datos.pais === "") {
      setError(true);
      return;
    }
    setCiudad(datos.ciudad);
    setPais(datos.pais);
    setError(false);
  };

  let componente;

  if (error) {
    componente = <Error mensaje="Ambos campos son obligatorios"/>;
  } 
  else if (resultado.cod === "404") {
    componente = <Error mensaje="Ciudad no existe"/>
  }
  else {
    componente =  <Clima
                    resultado={resultado}
                    />;
  }

  return (
      <div className="App">
        <Header
          titulo="Clima React App"
          />
          <div className="contenedor-form">
            <div className="container">
              <div className="row">
                <div className="col s12 m6">
                  <Formulario
                    datosConsulta={datosConsultar}
                    />
                </div>
                <div className="col s12 m6">
                  { componente }
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}

export default App;
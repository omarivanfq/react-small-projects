import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Resultado from './components/Resultado';
import Formulario from './components/Formulario';
import Error from './components/Error';

const App = () => {

  const [ resultado, setResultado ] = useState({});
  const [ error, setError ] = useState(false);

  const consultarClima = async ({ ciudad, pais }) => {
    if (ciudad === "" || pais === "") {
      setError(true);
      return;
    }
    const appId = 'b70edca46d4cf25b5b119535e904d093';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ ciudad },${ pais }&appid=${ appId }&units=metric`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setResultado(resultado);
    setError(false);
  }

  let component;
  
  if (error) {
    component = <Error mensaje="Ambos campos deben ser llenados"/>;
  }
  else if (resultado.cod === "404") {
    component = <Error mensaje="La ciudad especificada no existe"/>;
  }
  else {
    component = <Resultado resultado={resultado} />;
  }

  return (
    <div>
      <Header titulo="App del clima"/>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <Formulario
              consultarClima={consultarClima}
              />
          </div>
          <div className="col s12 m6">
            { component }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
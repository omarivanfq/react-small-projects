import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import './index.css';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';
import ListaGastos from './components/ListaGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

const App = () => {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ ready, setReady ] = useState(false);
  const [ gastos, setGastos ] = useState([]);

  const setGasto = (nombre, cantidad) => {
    const gasto = { nombre, cantidad, id: shortid.generate() }
    const gastosActuales = [...gastos, gasto ];
    setGastos(gastosActuales);
    setRestante(restante - cantidad);
  }

  useEffect(
    () => {
      setRestante(presupuesto)
    },
    [ presupuesto ]
  );

  return (
    <div className="container">
      <header><h1>App de presupuesto</h1></header>
      <div className="contenido-principal contenido">
      {
        ready
        ?
        <div className="row">
          <div className="column one-half">
            <Formulario 
              setGasto={setGasto}
              />
          </div>
          <div className="column one-half">
            <ListaGastos
              gastos={gastos}
              />
            <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
              />
          </div>
        </div>
        :
        <Pregunta
          setPresupuesto={setPresupuesto}
          setReady={setReady}/>
        }
      </div>
    </div>
  );
};

export default App;
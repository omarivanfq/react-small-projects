import React, { useState, useEffect } from 'react';
import Pregunta from './components-old/Pregunta';
import Formulario from './components-old/Formulario';
import Listado from './components-old/Listado';
import ControlPresupuesto from './components-old/ControlPresupuesto';
import './index.css';

const App = () => {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ ready, setReady ] = useState(false);
  const [ gasto, setGasto ] = useState({});
  const [ gastos, setGastos ] = useState([]);

  useEffect(
    () => {
      if (Object.keys(gasto).length === 0 && gasto.constructor === Object) return; // para evitar agregar un objeto vacío (cuando recién se abre la app)
      const listaGastos = [...gastos, gasto];
      setGastos(listaGastos);

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

    }, [ gasto ] // para que se re-renderice cada vez que hay un nuevo gasto
  );

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
        <div className="contenido-principal contenido">
          {
            (
              ready
              ? 
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    setGasto={setGasto}
               //     setCrearGasto={setCrearGasto}
                    />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}/>
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                    />
                </div>
              </div>
              :
              <Pregunta 
                setPresupuesto={setPresupuesto}
                setReady={setReady}
                setRestante={setRestante}
                />
            )
          }
        </div>
    </div>
  );
};

export default App;
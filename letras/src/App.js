/*import React from 'react';

const Header = ({ title }) => {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo center">{ title }</a>
    </div>
  </nav>
  );
}

const Form = () => {
  return (
    <form>
        <div className="input-field col s12">
          <input 
            id="first_name"
            type="text"
            required
            className="validate"/>
          <label htmlFor="first_name">First name:</label>
        </div>
        <div className="input-field col s12">
          <input 
            id="last_name"
            type="text"
            className="validate"/>
          <label htmlFor="last_name">Last Name:</label>
        </div>
        <div className="input-field col s6">
          <input 
            id="age"
            type="number"
            className="validate"/>
          <label htmlFor="age">Age:</label>
        </div>
        <div className="input-field col s6">
          <input 
            id="cats"
            type="number"
            className="validate"/>
          <label htmlFor="cats">Cats:</label>
        </div>
        <div className="input-field col s12">
          <input
            type="submit"
            className="btn col s12"
            value="Enviar"
            />
        </div>
    </form>
  );
}

const App = () => {
  return (
    <div>
      <Header
        title="Nombre de app"
        />
      <div className="container">
        <div className="card">
          <div className="card-text">
            <div className="row">
              <div className="col s6">
                <Form
                  />
              </div>
              <div className="col s6">
                <div className="card-image">
                  <img src="https://i0.wp.com/musikorner.com/wp-content/uploads/2017/08/madonna-.jpg?resize=790%2C1012&ssl=1"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
*/
/* import React from 'react';

const Header = ({ title }) => {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo center">{ title }</a>
    </div>
  </nav>
  );
}

const Form = () => {
  return (
    <form>
        <div className="input-field col s12">
          <input 
            id="first_name"
            type="text"
            className="validate"/>
          <label htmlFor="first_name">First name:</label>
        </div>
        <div className="input-field col s12">
          <input 
            id="last_name"
            type="text"
            className="validate"/>
          <label htmlFor="last_name">Last Name:</label>
        </div>
        <div className="input-field col s6">
          <input 
            id="age"
            type="number"
            className="validate"/>
          <label htmlFor="age">Age:</label>
        </div>
        <div className="input-field col s6">
          <input 
            id="cats"
            type="number"
            className="validate"/>
          <label htmlFor="cats">Cats:</label>
        </div>
        <div className="input-field col s12">
          <input
            type="submit"
            className="btn col s12"
            value="Enviar"
            />
        </div>
    </form>
  );
}

const App = () => {
  return (
    <div >
      <Header title="Aplicación Demo"/>
      <div className="container">
        <div className="card">
          <div 
            className="card-body"
            style={
              {
              // width:"100%",
             //   backgroundColor:"#000000",
              // display:"block"
              }
            }>
              <div className="row">
                <div className="col s6">
                  <Form />
                </div>
                <p className="col s6">Hola</p>
              </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default App;

*/

import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';
import './index.css';
const App = () => {

  const [ artista, setArtista ] = useState("");
  const [ letra, setLetra] = useState(null);
  const [ info, setInfo ] = useState({});

  useEffect(
    () => {
      if (artista) {
        const consultarInfo = async artista => {
          const url =`https://theaudiodb.com/api/v1/json/1/search.php?s=${ artista }`; 
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setInfo(resultado.artists[0]); 
        }
        consultarInfo(artista);
      }
    },
    [ artista ]
  );

  const consultarLetra = async ({artista, cancion}) => {
    const url = `https://api.lyrics.ovh/v1/${ artista }/${ cancion }`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setLetra(resultado.lyrics);
    setArtista(artista);
  }

  return (
    <Fragment>
      <Formulario 
        consultarLetra={consultarLetra}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion
              informacion={info}
              />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
              />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;

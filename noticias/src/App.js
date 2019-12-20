import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {

  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = "general") => {
    const country = 'mx';
  //  const category = 'business';
    const apikey = 'ee1ff0ea652d4afb8e3778283502a933';
    const url = `https://newsapi.org/v2/top-headlines?country=${ country }&category=${ categoria }&apiKey=${ apikey }`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({ noticias: noticias.articles });
  }

  render() {
    return (
      <Fragment>
        <Header 
          titulo="Noticias React API"
          />
          <div className="container white contenedor-noticias">
            <Formulario 
              consultarNoticias={this.consultarNoticias}
              />
            <ListaNoticias 
              noticias={this.state.noticias}
              />
          </div>
      </Fragment>
    );
  }
}

export default App;
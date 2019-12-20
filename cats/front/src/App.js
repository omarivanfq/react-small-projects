import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Grid from './components/Grid';
import Swal from 'sweetalert2';
import Cat from './components/Cat';

const App = () => {

  const [ randomCat, setRandomCat ] = useState({});
  const [ favs, setFavs ] = useState([]);
  const [ fetchNewRandomCat, setFetchNewRandomCat ] = useState(true);
  const [ fetchFavs, setFetchFavs ] = useState(true);
  const [ showHome, setShowHome ] = useState(true);
  const apikey = "g00dLuCk";

  useEffect(
    () => {
      const fetchFavs = async () => {
        const favsUrls = await fetch("http://localhost:8080/api/images/fav", {
          method: "GET",
          headers: {
            "api_key": apikey
          }
        });
        const favsUrlsJson = await favsUrls.json();
        setFavs(favsUrlsJson.images);
      }
      if (fetchFavs) {
        fetchFavs();
        setFetchFavs(false);
      }

      const fetchCat = async () => {
        const catUrl = await fetch("http://localhost:8080/api/images", {
          method: "GET",
          headers: {
            "api_key": apikey
          }
        });
        const catJson = await catUrl.json();
        setRandomCat(catJson.image);
      };

      if (fetchNewRandomCat) {
        fetchCat();
        setFetchNewRandomCat(false);
      }
       
    }, [ fetchNewRandomCat, fetchFavs ]
  );

  const addToFav = async () => {
    const url = `http://localhost:8080/api/images/fav/${ randomCat.id }`;
    const response = await fetch(url, {
          method: "POST",
          headers: {
            "api_key": apikey
          }
        });
      if (response.status === 200) {
        // setShowHome(false);
        Swal.fire(
          'OMG',
          '¡Añadido a favoritos!',
          'success'
        )
      }
      setFetchFavs(true);
  }

  const removeFromFav = async (id) => {
    const url = `http://localhost:8080/api/images/fav/${ id }`;
    const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "api_key": apikey
          }
        });      
    setFetchFavs(true);
  }

  let component;
  if (showHome) {
    component = <Cat
                  goToNext={() => setFetchNewRandomCat(true)}
                  addToFav={addToFav}
                  cat={randomCat} />;
  }
  else {
    component = <Grid 
                  removeFromFav={removeFromFav}
                  favs={favs}/>;
  }

  return (
    <React.Fragment>
      <Header 
        title="Kittens Tinder"/>
      <Nav 
        titleLeft="Home"
        titleRight="Favs"
        isLeft={showHome}
        leftHandler={() => setShowHome(true)}
        rightHandler={() => setShowHome(false)}
        />
        <div className="container">
            { component }
        </div>
      <footer>@omarivanfq</footer>
    </React.Fragment>
  );
};

export default App;

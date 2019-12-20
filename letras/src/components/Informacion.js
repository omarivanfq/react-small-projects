import React from 'react';

const Informacion = ({ informacion }) => {

    console.log("info", informacion);

    if (Object.keys(informacion).length === 0)
     return null;

    return (
        <div className="card border-light">
            <div className="card-header-bg-primary text-light font-weight-bold">
                Informacion del artista
            </div>
            <div className="card-body">
                <img src={informacion.strArtistThumb} alt="Foto Artista"/>
                <p className="card-text">Género: { informacion.strGenre }</p>
                <h2 className="card-text text-center">
                    biografía
                </h2>
                <p className="card-text">{informacion.strBiographyES}</p>
                <p className="card-text">
                    <a 
                        href={`http://${informacion.strFacebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a 
                        href={`http://${informacion.strTwitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fab fa-twitter"></i>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Informacion;
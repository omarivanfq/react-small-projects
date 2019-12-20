import React from 'react';
import GridCat from './GridCat';
const index = ({ favs, removeFromFav }) => {
    return (
        <div>
            <h2>Favorites</h2>
            <div className="cats-grid">
                {
                    favs.map(
                        fav => <GridCat
                            removeFromFav={removeFromFav}
                            key={fav.url} 
                            cat={fav}/>
                    )
                }
            </div>
        </div>
    );
};

export default index;
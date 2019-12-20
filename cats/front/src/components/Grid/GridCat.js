import React, { useState } from 'react';
import Img from './../Img';

const GridCat = ({ cat, removeFromFav }) => {

    const [ hover, setHover ] = useState(false);

    return (
        <div className={"cat-grid--cat " + (hover? "hovered" : "")}>
            <Img url={cat.url}/>
            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => removeFromFav(cat.id)}
                className="delete-fav"/>
        </div>
    );
};

export default GridCat;
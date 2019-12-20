import React from 'react';
import Button from './Button';
import Img from './Img';

const Cat = ({ cat, addToFav, goToNext }) => {
    return (
        <div className="cat-card">
            <Img url={cat.url}/>
            <div className="buttons">
                <Button 
                    onClick={() => {addToFav(); goToNext()}}
                    text="❤"/>
                <Button
                    onClick={() => goToNext()}
                    text="𝗫"/>
            </div>
        </div>
    );
};

export default Cat;
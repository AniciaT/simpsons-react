import React from 'react';

function DisplaySimpsonQuote({quote, image, character}) {
    return (
        <div className= "DisplaySimpsonQuote">
        <img
            src={image}     
        />
        <ul>
            <li>Name: {character}{' '}</li>
            <li>Quote: {quote}</li>
        </ul>
        </div>
    );
};

export default DisplaySimpsonQuote;
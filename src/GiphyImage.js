import React from 'react';

export default function GiphyImage({giphy}){
    return (
        <img src={giphy.url} />
    );
}
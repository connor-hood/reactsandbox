import React from 'react';

import useGif from '../useGif';

const Tag = () => {
    const {gif, fetchGif} = useGif();

    return(
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="Tag Gif" />
           
            <button onClick={() => fetchGif()}>Click for New</button>
        </div>
    )
}


export default Tag;
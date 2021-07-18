import React, { useState } from 'react';
import '../PracticeHook/practiceHook.css'

import useGif from '../useGif';

const Tag = () => {
    const [tag, setTag] = useState('Dogs')
    const {gif, fetchGif} = useGif(tag);

    return(
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="Tag Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => fetchGif(tag)}>Click for New</button>
        </div>
    )
}


export default Tag;
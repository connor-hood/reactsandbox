import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../apis/APIKEYS';

const Random = () => {

    useEffect(() => {
        const fetchGif = async () => {
            const url = `https://api.giphy.com/v1/gis/random?api_key=${API_KEY}`
            const { data } = await axios.get(url);

            console.log(data)

        }

        fetchGif();
    }, []);

    return(
        <div>
            <h1>Random</h1>
        </div>
    )
}

export default Random
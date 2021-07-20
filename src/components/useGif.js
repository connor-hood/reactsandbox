import { useState, useEffect } from 'react';
import axios from 'axios';
import GIPHY_API_KEY from '../../apis/APIKEYS';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`

const useGif = (tag) => {
    const [gif, setGif] = useState('');

    const fetchGif = async (tag) => {
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSrc = data.data.images.downsized_large.url;
        setGif(imageSrc)
    }

    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    return { gif, fetchGif };

}


export default useGif;
import axios from 'axios';


const KEY = 'AIzaSyDN7qnXZeRT5Pyb_M7-HzJB0RXsCvZJlFA';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY,
    }
});
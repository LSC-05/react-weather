import axios from 'axios';
const APIURL = import.meta.env.VITE_APIURL;
const APIKEY = import.meta.env.VITE_APIKEY;

export const getWeatherByCityName = async (cityName) => {
    const url = `${APIURL}?units=metric&lang=ja&q=${cityName}&appid=${APIKEY}`;
    const response = await axios.get(url);
    return response.data;
};

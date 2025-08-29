import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { WeatherBox } from './../blocks/WeatherBox';
import { NotFound } from './../blocks/NotFound';
import { getWeatherByCityName } from './../providers/WeatherAPI';

export const Search = () => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const word = searchParams.get("q");

    useEffect(()=>{
        (async ()=>{
            try{
                const data = await getWeatherByCityName(word);
                setIsError(false);
                setData(data);
            }catch(error){
                setIsError(true);
            }
        })();
    },[word]);

    return isError ? <NotFound />:
    Object.keys(data).length > 0 && <WeatherBox data={data} />
};

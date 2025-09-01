import { useEffect, useContext } from 'react';
import { StateContext } from './StateContext';
import { DispatchContext } from './DispatchContext';
import { getWeatherByCityName } from './WeatherAPI';

export const InitData = () => {
  const {weatherTokyo} = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async ()=>{
      if (weatherTokyo !== undefined){
        return;
      }
      const data = await getWeatherByCityName("Okinawa");
      dispatch({
        type: "save",
        payload: {
          name: "weatherOkinawa",
          data: data,
        }
      });
    })();
  }, []);
    
  return;
};

import { useEffect, useContext } from 'react';
import { StateContext } from './StateContext';
import { DispatchContext } from './DispatchContext';
import { getWeatherByCityName } from './WeatherAPI';

export const InitData = () => {
  const {weatherOkinawa} = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async ()=>{
      if (weatherOkinawa !== undefined){
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

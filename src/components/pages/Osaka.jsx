import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { DispatchContext } from './../providers/DispatchContext';
import { WeatherBox } from './../blocks/WeatherBox';
import { getWeatherByCityName } from './../providers/WeatherAPI';

export const Osaka = () => {
  const { weatherOsaka } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {
      if (weatherOsaka !== undefined) {
        return;
      }
      const data = await getWeatherByCityName('Osaka');
      dispatch({
        type: 'save',
        payload: {
          name: 'weatherOsaka',
          data: data,
        },
      });
    })();
  }, []);

  return weatherOsaka !== undefined && <WeatherBox data={weatherOsaka} />;
};


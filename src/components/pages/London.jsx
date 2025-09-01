import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { DispatchContext } from './../providers/DispatchContext';
import { WeatherBox } from './../blocks/WeatherBox';
import { getWeatherByCityName } from './../providers/WeatherAPI';

export const London = () => {
  const { weatherLondon } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {
      if (weatherLondon !== undefined) {
        return;
      }
      const data = await getWeatherByCityName('London');
      dispatch({
        type: 'save',
        payload: {
          name: 'weatherLondon',
          data: data,
        },
      });
    })();
  }, []);

  return weatherLondon !== undefined && <WeatherBox data={weatherLondon} />;
};

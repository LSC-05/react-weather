import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { WeatherBox } from './../blocks/WeatherBox';

export const Home = () => {
    const { weatherTokyo } = useContext(StateContext);
    return weatherTokyo !== undefined && <WeatherBox data={weatherTokyo} />;
};

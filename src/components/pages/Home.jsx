import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { WeatherBox } from './../blocks/WeatherBox';

export const Home = () => {
    const { weatherOkinawa } = useContext(StateContext);
    return weatherOkinawa !== undefined && <WeatherBox data={weatherOkinawa} />;
};

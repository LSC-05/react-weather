import { Outlet } from 'react-router-dom';
import { AppTheme } from './AppTheme';
import { WeatherAppBar } from './../blocks/WeatherAppBar';
import { WeatherBottomNavigation } from './../blocks/WeatherBottomNavigation';

export const Layout = () => (
    <AppTheme>
        <WeatherAppBar />
        <Outlet />
        <WeatherBottomNavigation />
    </AppTheme>
)
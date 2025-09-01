import { Layout } from './../layouts/Layout';
import { Home } from './../pages/Home';
import { About } from './../pages/About';
import { NotFound } from './../pages/NotFound';
import { Osaka } from './../pages/Osaka';
import { Nagoya } from './../pages/Nagoya';
import { Hokkaido } from './../pages/Hokkaido';
import { Tokyo } from './../pages/Tokyo';
import { Search } from './../pages/Search';
import { London } from "./../pages/London";

export const routeData = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'osaka',
        element: <Osaka />,
      },
      {
        path: 'nagoya',
        element: <Nagoya />,
      },
      {
        path: 'hokkaido',
        element: <Hokkaido />,
      },
      {
        path: 'tokyo',
        element: <Tokyo />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: "london",
        element: <London />
      }
    ],
  },
];

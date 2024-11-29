import { lazy } from 'react';

const CountryListPage = lazy(() => import('./pages/CountryListPage'));
const CountryDetailsPage = lazy(() => import('./pages/CountryDetailsPage'));

const coreRoutes = [
  {
    path: '/',
    title: 'CountryListPage',
    component: CountryListPage,
  },
  {
    path: '/country-details',
    title: 'CountryDetailsPage',
    component: CountryDetailsPage,
  },
];

const routes = [...coreRoutes];

export default routes;

import React, { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '../layouts/Index';
import Loading from '../pages/Loading';
import NotFound from '../pages/NotFound';

const App = lazy(() => import('../pages/App'));

const Routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Suspense fallback={<Loading />} children={<App />} /> }],
  },
  { path: '*', element: <NotFound /> },
];

export default Routes;

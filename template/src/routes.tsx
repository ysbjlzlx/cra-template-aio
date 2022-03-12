import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Layout from './layouts/Index';
import Loading from './pages/Loading';

const App = lazy(() => import('./pages/App'));

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true, element: <Suspense fallback={<Loading />} children={<App />} /> }],
    },
  ]);
}

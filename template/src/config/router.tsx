import { lazy, Suspense } from 'react';
import {createBrowserRouter, RouteObject} from 'react-router-dom';

import Layout from '../layouts/Index';
import Loading from '../pages/Loading';
import NotFound from '../pages/NotFound';

const App = lazy(() => import('../pages/App'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        ),
      },
    ],
  },
  { path: '*', element: <NotFound /> },
];

export default createBrowserRouter(routes);

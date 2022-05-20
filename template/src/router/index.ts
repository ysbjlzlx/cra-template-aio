import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';

const Router = (): ReactElement | null => {
  return useRoutes(routes);
};

export default Router;

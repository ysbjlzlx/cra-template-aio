import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = (): ReactElement => {
  return <Outlet />;
};
export default Layout;

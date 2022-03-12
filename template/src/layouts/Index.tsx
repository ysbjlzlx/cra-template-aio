import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = ({ children }) => {
  return <Outlet />;
};
export default Layout;

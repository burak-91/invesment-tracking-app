import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import { LayoutContainer, MainContent } from './Layout.styles';

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <TopNavbar />
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout; 
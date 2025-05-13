import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header'; // Adjust path if needed
import './index.css'; // Global styles

const Layout = () => {
  return (
     <>
      <Header />
      <div className="global-container">
        
        <Outlet />
  
      </div>
    </>
  );
};

export default Layout;

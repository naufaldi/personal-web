import React, { FunctionComponent } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

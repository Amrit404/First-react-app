import React, { Fragment } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SideBarWrapper from './components/SideBarWrapper';

function App() {
  return (
    <Fragment>
      <Navbar />
      <SideBarWrapper />
      <Footer />
    </Fragment>
  );
}

export default App;

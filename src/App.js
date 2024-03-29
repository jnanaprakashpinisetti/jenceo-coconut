// import './App.scss';
import React, { useState } from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopNav from './components/TopNav'


function App() {

  return (
    <>
      <TopNav />
      <HashRouter>
        <Navbar />
      </HashRouter>
      <Footer />



    </>
  );
}

export default App;

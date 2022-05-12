import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' />
          <Route path='/signUp' />
          <Route path='/home' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Home />
      </Router>
    </>
  );
}

export default App;

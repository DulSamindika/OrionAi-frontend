import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import WritersHome from './components/writers/WritersHome';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wri" element={<WritersHome />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;

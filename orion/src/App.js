import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/home';
import WritersHome from './components/writers/WritersHome';
import WriterLvl1 from './components/writers/WriterLvl1'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wri" element={<WritersHome />} />
        <Route path="/wri2" element={< WriterLvl1 />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;

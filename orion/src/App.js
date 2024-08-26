import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/home';
import WritersHome from './components/writers/WritersHome';
import WriterLvl1 from './components/writers/WriterLvl1'
import TaskTwo from './components/writers/Task2';
import TaskThree from './components/writers/Task3';
import TaskFour from './components/writers/Task4';
import TaskFive from './components/writers/Task5';
import Task from './components/writers/Task';
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
        <Route path="/wriTask" element={< Task />} />
        <Route path="/wriTask2" element={< TaskTwo />} />
        <Route path="/wriTask3" element={< TaskThree />} />sss
        <Route path="/wriTask4" element={< TaskFour />} />
        <Route path="/wriTask5" element={< TaskFive />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;

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

import WriterLvl1 from './components/writers/WriterLvl1';
import Artist from './components/Artists/Artist';  
import ArtistLvl1 from './components/Artists/ArtistLvl1';
import Musician from './components/Musicians/Musician';
import MusicianLvl1 from './components/Musicians/MusicianLvl1';
import CodersHome from './components/coders/CodersHome';
import CodersLvl1 from './components/coders/CodersLvl1';

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
        <Route path="/writer" element={<WritersHome />} />
          <Route path="/WriterLvl1" element={<WriterLvl1 />} />
          <Route path="/artists" element={<Artist />} /> {/* Add this route */}
          <Route path="/ArtistLvl1" element={<ArtistLvl1 />} /> 
          <Route path="/musician" element={<Musician />} />
          <Route path="/MusicianLvl1" element={<MusicianLvl1 />} />
          <Route path="/coders" element={<CodersHome />} />
          <Route path="/CodersLvl1" element={<CodersLvl1 />} />
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

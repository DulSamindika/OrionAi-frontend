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
import ArtTask1 from './components/Artists/ArtTask1';


import Task1 from './components/writers/Task1';
import Task2 from './components/writers/Task2';
import Task3 from './components/writers/Task3';
import Task4 from './components/writers/Task4';
import Task5 from './components/writers/Task5';


import Artist from './components/Artists/Artist';  
import ArtistLvl1 from './components/Artists/ArtistLvl1';
import Musician from './components/Musicians/Musician';
import MusicianLvl1 from './components/Musicians/MusicianLvl1';
import CodersHome from './components/coders/CodersHome';
import CodersLvl1 from './components/coders/CodersLvl1';


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

        <Route path="/WriterLvl1" element={<WriterLvl1 />} />
          <Route path="/artists" element={<Artist />} /> {/* Add this route */}
          <Route path="/ArtistLvl1" element={<ArtistLvl1 />} /> 
          <Route path="/musician" element={<Musician />} />
          <Route path="/MusicianLvl1" element={<MusicianLvl1 />} />
          <Route path="/coders" element={<CodersHome />} />
          <Route path="/CodersLvl1" element={<CodersLvl1 />} />

          
        <Route path="/wri2" element={< WriterLvl1 />} />
        <Route path="/wriTask" element={< Task />} />
        <Route path="/wriTask2" element={< TaskTwo />} />
        <Route path="/wriTask3" element={< TaskThree />} />
        <Route path="/wriTask4" element={< TaskFour />} />
        <Route path="/wriTask5" element={< TaskFive />} />

        <Route path="/ArtTask1" element={< ArtTask1 />

        <Route path="/Task1" element={< Task1 />} />
        <Route path="/Task2" element={< Task2 />} />
        <Route path="/Task3" element={< Task3 />} />
        <Route path="/Task4" element={< Task4 />} />
        <Route path="/Task5" element={< Task5 />} />

      </Routes>
      </Router>
    </>
  );
}

export default App;

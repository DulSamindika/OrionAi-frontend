import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import WritersHome from './components/writers/WritersHome';
import WriterLvl1 from './components/writers/WriterLvl1';
import Task1 from './components/writers/Task1';
import Task2 from './components/writers/Task2';
import Task3 from './components/writers/Task3';
import Task4 from './components/writers/Task4';
import Task5 from './components/writers/Task5';
import Artist from './components/Artists/Artist';  
import ArtistLvl1 from './components/Artists/ArtistLvl1';
import TaskA1 from './components/Artists/TaskA1';
import TaskA2 from './components/Artists/TaskA2';
import TaskA3 from './components/Artists/TaskA3'
import TaskA4 from './components/Artists/TaskA4';
import TaskA5 from './components/Artists/TaskA5';
import Musician from './components/Musicians/Musician';
import MusicianLvl1 from './components/Musicians/MusicianLvl1';
import CodersHome from './components/coders/CodersHome';
import CodersLvl1 from './components/coders/CodersLvl1';
import Login from './components/Login';    // Adjust the path if needed
import Register from './components/Register';  // Adjust the path if needed
import Hello from './components/Hello';





import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
        <Routes>
          {/* Conditionally render Navbar except for Login page */}
          <Route 
            path="/*" 
            element={
              <>
                <Navbar />
                <AppRoutes />
              </>
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Hello" element={<Hello />} />
        </Routes>
      </Router>
    </>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/writer" element={<WritersHome />} />
      <Route path="/WriterLvl1" element={<WriterLvl1 />} />
      <Route path="/artists" element={<Artist />} />
      <Route path="/ArtistLvl1" element={<ArtistLvl1 />} />
      <Route path="/TaskA1" element={<TaskA1 />} />
      <Route path="/TaskA2" element={<TaskA2 />} /> 
      <Route path="/TaskA3" element={<TaskA3 />} />
      <Route path="/TaskA4" element={<TaskA4 />} />
      <Route path="/TaskA5" element={<TaskA5 />} />
      <Route path="/musician" element={<Musician />} />
      <Route path="/MusicianLvl1" element={<MusicianLvl1 />} />
      <Route path="/coders" element={<CodersHome />} />
      <Route path="/CodersLvl1" element={<CodersLvl1 />} />
      <Route path="/Task1" element={<Task1 />} />
      <Route path="/Task2" element={<Task2 />} />
      <Route path="/Task3" element={<Task3 />} />
      <Route path="/Task4" element={<Task4 />} />
      <Route path="/Task5" element={<Task5 />} />

      <Route path="/TaskA1" element={<TaskA1 />} />
      <Route path="/TaskA2" element={<TaskA2 />} />
      <Route path="/TaskA3" element={<TaskA3 />} />
      <Route path="/TaskA4" element={<TaskA4 />} />
      <Route path="/TaskA5" element={<TaskA5 />} />


    </Routes>
  );
};

export default App;
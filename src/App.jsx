import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';



function App() {

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Grid />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

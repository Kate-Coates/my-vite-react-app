import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
      <div className="App">
        <div className="App-header">
          <Navbar />
          <Grid />
        </div>
      </div>
  );
}

export default App;

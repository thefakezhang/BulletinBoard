import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bulletin from './Components/Bulletin';
import Main from "./Components/Main"
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Main /> 
      <Link to = "/home">Home</Link>
    </div>
  );
}

export default App;

import React from 'react';
import { Router, Link } from '@reach/router';
import './App.scss';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <React.StrictMode>
      <Navbar />
    </React.StrictMode>
  );
}

export default App;

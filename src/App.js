import React from 'react';
import { Router, Link } from '@reach/router';
import './App.scss';
import Navbar from './components/navbar/navbar';
import CategoryNav from './components/categoryNav/categoryNav';

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <CategoryNav />
    </React.StrictMode>
  );
}

export default App;

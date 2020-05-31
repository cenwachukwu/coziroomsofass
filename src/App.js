import React from 'react';
import { Router, Link } from '@reach/router';
import './App.scss';
import Navbar from './components/navbar/navbar';
import CategoryNav from './components/categoryNav/categoryNav';
import Container from './components/mobileNav/container/container';

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <CategoryNav />
      <Container />
    </React.StrictMode>
  );
}

export default App;

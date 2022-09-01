import React from 'react';
import Grid from './components/grid/Grid';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <Navbar />
      <Grid />
      <Card />
    </>
  );
}

export default App;

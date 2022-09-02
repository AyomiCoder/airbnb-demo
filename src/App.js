import React from 'react';
import Grid from './components/grid/Grid';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Card from './components/Card/Card';
import dataCard from './data'

function App() {
  const dataElements = dataCard.map(item => {
    return(
      <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      review={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
      />
     
    )
  })
  return (
    <>
      <Navbar />
      <Grid />
      <section className="cards-list">
        {dataElements}
      </section>
    </>
  );
}

export default App;

import React from 'react';
import "./CardGrid.scss";
import Card from "./Card.jsx";

function CardGrid() {
  return (
    <div className='grid'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardGrid;
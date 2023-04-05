import React, { useEffect, useState } from 'react';
import "./CardGrid.scss";
import Card from "./Card.jsx";
import { useCards } from '../layout/hooks/useCards';


function CardGrid() {
  const cards = useCards();
  return (
    <div className='grid'>
      {cards.map((card) => (
        <Card title={card.title}
          imageUrl={card.cover}
          id={card.id}
          key={card.id} />
      ))}
    </div>
  );
}

export default CardGrid;
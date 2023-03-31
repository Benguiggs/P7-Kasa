import React, {useEffect, useState} from 'react';
import "./CardGrid.scss";
import Card from "./Card.jsx";


function CardGrid() {
const [cards, setCards] = useState([]);


useEffect(fetchCards, []);

function fetchCards() {
fetch("DataBase.json")
.then((res) => res.json())
.then((res) => setCards(res))
.catch(console.error);
}

  return (
    <div className='grid'>
{cards.map((card) => (
<Card title={card.title} imageUrl ={card.cover} />
  ))}
    </div>
  );
}

export default CardGrid;
import React from 'react';
import { Link } from "react-router-dom";
import "./CardGrid.scss";
import "./Card.scss";


function Card() {
  return (
    <Link to="/appartement">
    <div className='card'>
      <div className="card__subtitle">Titre de la location</div>
      </div>
      </Link>
  )
}

export default Card;
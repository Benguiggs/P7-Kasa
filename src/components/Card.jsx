import React from 'react';
import { Link } from "react-router-dom";
import "./CardGrid.scss";
import "./Card.scss";


function Card(props) {
  return (
    <Link to="/appartement"
      state={{
        cardId: props.id
      }}
    >
      <div className='card'>
        <img src={props.imageUrl} alt="" />
        <div className="card__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default Card;
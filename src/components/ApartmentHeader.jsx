import React from 'react';
import "../components/ApartmentHeader.scss";

export function ApartmentHeader(props) {

  const { room } = props;
  const { name } = room.host.name;
  const [firstName, lastName] = name.split(".");

  return (
    <div className='Apartment__header'>
      <div className='Apartment__title'>
        <h1>{room.title}</h1>
        <h2>{room.location}</h2>
        <div className='apartment__tags'>
          {room.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className='Apartment__owner'>
        <div className='Apartment__owner__view'>
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className='Apartment__owner__badge'>
            <img src={room.host.picture} alt="" />
          </div>
        </div>
        <div className='Apartment__owner__stars'>

          {[1, 2, 3, 4, 5].map((number) => (
            <span key={number} className={props.room.rating >= number ? "on" : ""}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

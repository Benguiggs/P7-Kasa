import React from 'react';
import "../components/ApartmentHeader.scss";

export function ApartmentHeader({ ApartmentSelected }) {

const {name} = ApartmentSelected.host;
const [firstName, lastName] = name.split(".");

  return (
    <div className='Apartment__header'>
    <div className='Apartment__title'> 
<h1>{ApartmentSelected.title}</h1>
<h2>{ApartmentSelected.location}</h2>
<div className='apartment__tags'>
  {ApartmentSelected.tags.map((tag) => (
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
      <img src={ApartmentSelected.host.picture} alt="" />
    </div>
</div>
<div className='Apartment__owner__stars'>

{[1, 2, 3, 4 ,5].map((number) => (
  <span key={number} className={ApartmentSelected.rating >= number ? "on" : ""}>★</span>
))}
</div>
</div>
</div>
  )
}

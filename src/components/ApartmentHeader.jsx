import React from 'react';
import "../components/ApartmentHeader.scss";

export function ApartmentHeader() {
  return (
    <div className='Apartment__header'>
    <div className='Apartment__title'> 
<h1>Crazy loft on Canal Saint Martin</h1>
<h2>Paris, île de France</h2>
<div className='apartment__tags'>
<span>Cozy</span>
<span>Canal</span>
<span>Paris 10</span>
</div>
</div>
<div className='Apartment__owner'>
<div className='Apartment__owner__view'>
    <h3>
    <span>Alexandre</span>
    <span>Dumas</span>
    </h3>
    <div className='Apartment__owner__badge'></div>
</div>
<div className='Apartment__owner__stars'>
<span className='on'> ★</span>
<span className='on'> ★ </span>
<span className='on'> ★</span>
<span className='off'> ★</span>
<span className='off'> ★</span>
</div>
</div>
</div>
  )
}

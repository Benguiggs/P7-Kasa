import React from 'react'
import "../pages/ApartmentPage.scss"

function ApartmentPage() {
  return (
    <div className='apartment__page'>
    <div>
        <img src="../AppartementBackground.png" alt="Banniére d'un appartement"/>
    </div>
    <div className='Apartment__title'>
<h1>Crazy loft on Canal Saint Martin</h1>
<h2>Paris, île de France</h2>
<span className='Apartment__tags'>Cozy</span>
<span className='Apartment__tags'>Canal</span>
<span className='Apartment__tags'>Paris 10</span>
</div>

<div className='Apartment__owner'>
<h3>Alexandre Dumas</h3>
<div className='Apartment__owner__badge'></div>
<div className='Apartment__owner__stars'>
<span> ☆</span>
<span> ☆</span>
<span> ☆</span>
<span> ☆</span>
<span> ☆</span>
</div>
</div>

<div className='Apartment__description'>
<p>Description</p>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore, temporibus similique eius nostrum reprehenderit labore laborum dolores in obcaecati quasi illum itaque. Reiciendis quis iusto debitis molestiae minima quos! Aperiam repellat itaque ratione quo veniam reiciendis sunt quidem molestiae reprehenderit, harum consequuntur molestias placeat, est, id nesciunt doloribus numquam!
</p>
</div>
<div className='Apartment__description'>
<p>Description</p>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore, temporibus similique eius nostrum reprehenderit labore laborum dolores in obcaecati quasi illum itaque. Reiciendis quis iusto debitis molestiae minima quos! Aperiam repellat itaque ratione quo veniam reiciendis sunt quidem molestiae reprehenderit, harum consequuntur molestias placeat, est, id nesciunt doloribus numquam!
</p>
</div>
</div>
  );
}

export default ApartmentPage
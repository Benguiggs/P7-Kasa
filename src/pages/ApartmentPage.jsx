import React from 'react';
import { ApartmentBanner } from '../components/ApartmentBanner';
import { ApartmentHeader } from '../components/ApartmentHeader';
import { ApartmentDescription } from '../components/ApartmentDescription';
import "../pages/ApartmentPage.scss";

function ApartmentPage() {
  return (
    <div className='apartment__page'>
<ApartmentBanner />
<ApartmentHeader />
<div className='Apartment__area'>
<ApartmentDescription />
<ApartmentDescription />
</div>
</div>
  );
}

export default ApartmentPage;
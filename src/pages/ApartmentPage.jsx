import React from 'react';
import { image__banner } from '../components/ImageBanner';
import { ApartmentHeader } from '../components/ApartmentHeader';
import { PanelDescription } from '../components/PanelDescription';
import "../pages/ApartmentPage.scss";

function ApartmentPage() {
  return (
    <div className='apartment__page'>
<image__banner />
<ApartmentHeader />
<div className='Apartment__area'>
<PanelDescription />
<PanelDescription />
</div>
</div>
  );
}

export default ApartmentPage;
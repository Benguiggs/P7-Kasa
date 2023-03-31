import React, {useEffect, useState,} from 'react';
import { ImageBanner } from '../components/ImageBanner';
import { ApartmentHeader } from '../components/ApartmentHeader';
import { PanelDescription } from '../components/PanelDescription';
import "../pages/ApartmentPage.scss";
import {useLocation} from "react-router-dom";


function ApartmentPage() {
const location = useLocation();
const [ApartmentSelected, setApartmentSelected] = useState(null);
  useEffect(fetchCardDatas, []);

function fetchCardDatas() {
  fetch("DataBase.json")
  .then((res) => res.json())
  .then ((apartments) => {
    const ApartmentSelected =
  apartments.find((apartment) => apartment.id === location.state.apartmentId);
  setApartmentSelected(ApartmentSelected)
;})
.catch(console.error);
}

if (ApartmentSelected == null) return <div>Loading...</div>;
  return (
    <div className='apartment__page'>
<ImageBanner imageUrl={ApartmentSelected.cover} />
<ApartmentHeader ApartmentSelected={ApartmentSelected} />
<div className='Apartment__area'>
<PanelDescription title="Description" content={ApartmentSelected.description}/>
<PanelDescription title="Equipements" content={ApartmentSelected.equipments.map((eq) => (
  <li>{eq}</li>
))} />
    </div>
   </div>
  );
}

export default ApartmentPage;
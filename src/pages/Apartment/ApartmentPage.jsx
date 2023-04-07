import React, { useEffect, useState } from 'react';
import { ImageBanner } from '../components/ImageBanner';
import { ApartmentHeader } from '../components/ApartmentHeader';
import { PanelDescription } from '../components/PanelDescription';
import "../pages/ApartmentPage.scss";
import { useRoom } from '../layout/hooks/useRoom';


function ApartmentPage() {

  const room = useRoom();
  console.log(room);
  if (room == null) return <div>Loading...</div>;
  return (
    <div className='apartment__page'>
      <ImageBanner pictures={room.pictures} />
      <ApartmentHeader room={room} />
      <div className='apartment__area'>
        <PanelDescription title="Description" content={room.description} />
        <PanelDescription title="Equipements" content={room.equipments.map((eq, i) => (
          <li key={i}>{eq}</li>
        ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
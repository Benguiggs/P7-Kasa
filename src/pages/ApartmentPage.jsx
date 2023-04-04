import React, {useEffect, useState,} from 'react';
import { ImageBanner } from '../components/ImageBanner';
import { ApartmentHeader } from '../components/ApartmentHeader';
import { PanelDescription } from '../components/PanelDescription';
import "../pages/ApartmentPage.scss";
import {useLocation} from "react-router-dom";


function ApartmentPage() {
const location = useLocation();
const [room, setRoom] = useState(null);
console.log("room:", room)
  useEffect(fetchRoomDatas, []);

function fetchRoomDatas() {
  fetch("DataBase.json")
  .then((res) => res.json())
  .then((rooms) => {
  const room = rooms.find((room) => room.id === location.state.apartmentId);
  setRoom(room);
})
.catch(console.error);
}

if (room == null) return <div>Loading...</div>;
  return (
    <div className='apartment__page'>
<ImageBanner pictures={room.pictures}/>
<ApartmentHeader room={room} />
<div className='Apartment__area'>
<PanelDescription title="Description" content={props.room.description}/>
<PanelDescription title="Equipements"
 content={room.equipments.map((eq, i) => (
 <li key={i}>{eq}</li>
  ))}
   />
    </div>
   </div>
  );
}

export default ApartmentPage;
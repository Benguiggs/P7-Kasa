import React from 'react';
import "./Footer.scss";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
        <img src="logo_b&w.png" alt="Logo de l'agence Kasa" width="100"/>
        </div>
        <div className='footer_quote'>© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
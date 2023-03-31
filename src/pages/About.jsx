import React from 'react';
import { PanelDescription } from '../components/PanelDescription';
import { ImageBanner } from '../components/ImageBanner';
import "../pages/About.scss";



function About() {
  return (
    <>
    <ImageBanner  />
    <div className='about__container'>
    <PanelDescription  title="Fiabilité"  content=""/>
    <PanelDescription  title="Respect"  content=""/>
    <PanelDescription  title="Services" content="" />
    <PanelDescription  title="Responsabilité" content="" />
    </div>
    </>

  );
}

export default About;
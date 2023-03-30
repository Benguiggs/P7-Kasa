import React from 'react';
import { PanelDescription } from '../components/PanelDescription';
import { ImageBanner } from '../components/ImageBanner';
import "../pages/About.scss";



function About() {
  return (
    <>
    <ImageBanner />
    <div className='about__container'>
    <PanelDescription />
    <PanelDescription />
    <PanelDescription />
    <PanelDescription />
    </div>
    </>

  );
}

export default About;
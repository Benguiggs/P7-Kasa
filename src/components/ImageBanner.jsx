import React from 'react';
import "../components/ImageBanner.scss"
import { useState } from 'react';

export function ImageBanner(props) {
  const pictures = props.pictures;


  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };


  const picturesAvailable = () => {
    return pictures && pictures.length > 0;
  };


  const getCarousel = () => {
    if (!picturesAvailable()) {
      return <img src="./aboutBackground.png" alt="" className='show' />
    }
    return pictures.map((img, i) => (
      <img key={img} src={img} alt="" className={getClassName(i)}></img>
    ));
  };

  return (
    <div className='image__banner'>
      <div className='image__container' >{getCarousel()}</div>
      {picturesAvailable() && (
        <>
          <button className='btn_button__previous' onClick={moveToPrevious}>
            <i className='fas fa chevron-right'></i>
          </button>

          <span className='counter__slides'>
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className='btn_button__next' onClick={moveToNext}>
            <i className='fas fa chevron-left'></i>
          </button>
        </>
      )}
    </div>
  );
}


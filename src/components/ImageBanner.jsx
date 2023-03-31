import React from 'react';
import "../components/ImageBanner.scss"

export function ImageBanner(props) {
  const  imageUrl  = props.imageUrl ? props.imageUrl: "/aboutBackground.png"; 
  return (
    <div className='Image__banner'>
    <img src={imageUrl}/>
</div>
  );
}


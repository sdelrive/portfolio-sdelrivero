// @ts-nocheck

import { useEffect, useRef } from 'react';
import './ParallaxImage.css'

const ParallaxImage = ({ background, topground}) => {



  return (
    <div   className='parallax-image "hero__image"'>
      <img className='parallax_background move-back' src={background} alt="background"/>
      <img className='parallax_top  move-top' src={topground} alt="top layer" />
    </div>
  )
}

export default ParallaxImage

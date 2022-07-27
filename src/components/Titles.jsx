import React from 'react'

import MovingComponent from 'react-moving-text';

const Titles = () => {
  return (
    <div className='mt-72 ml-80 w-2/4 uppercase'>
      <div className="text-9xl leading-none">
          <MovingComponent
              type="fadeInFromTop"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="both"
          >
              Bem-vindo(a) à multipixels.
          </MovingComponent> 
      </div>

      <div className='text-4xl text-red-500 pl-12 leading-10'>
          <MovingComponent
              type="fadeInFromLeft"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="forwards"
          >
          Uma rádio, diferenciada!
      </MovingComponent>
      </div>
    </div>
  )
}

export default Titles
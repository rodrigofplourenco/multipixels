import React from 'react'

import MovingComponent from 'react-moving-text';
// import { FaAngleDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='lg:block lg:pt-72 lg:pl-80 lg:h-auto uppercase h-screen flex flex-col justify-center items-center'>
      <div className="lg:text-9xl lg:w-2/4 text-xl leading-none">
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

      <div className='lg:text-4xl lg:w-2/4 text-sm text-red-500 lg:pl-12 lg:leading-10'>
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

        {/* <a 
            className='lg:mx-auto lg:mt-12 mt-4 flex justify-center animate-bounce lg:w-20 lg:h-20 w-8 h-8 border border-white flex items-center justify-center rounded-full cursor-pointer'
            href='#temp'
        >
            <FaAngleDown size={42}/>
        </a> */}
    </div>
  )
}

export default Hero
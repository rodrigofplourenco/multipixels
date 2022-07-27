import React from 'react'

import { FaAngleDown } from 'react-icons/fa';

const GoDownButton = () => {
  return (
    <div className="w-full flex justify-center mt-20">
      <a 
          className='animate-bounce w-20 h-20 border border-white flex items-center justify-center rounded-full cursor-pointer'
          href='#temp'
      >
          <FaAngleDown size={42}/>
      </a>
    </div>
  )
}

export default GoDownButton
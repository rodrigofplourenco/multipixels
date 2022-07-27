import React from 'react'

import { FaHeart, FaCoffee } from 'react-icons/fa';

const Credits = () => {
  return (
    <div className='w-full fixed top-0 py-3 text-center bg-transparent text-white'>
      <p>
        Multipixels &copy; Website made with <FaHeart size={18} className='inline text-red-500' /> by <a href="https://github.com/rodrigofplourenco" target='_blank' className='hover:text-red-500' rel="noreferrer">iSkell</a>
      </p>
    </div>
  )
}

export default Credits;
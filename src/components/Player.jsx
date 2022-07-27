import React, { createRef, useState } from 'react'

import ReactPlayer from 'react-player'
import { FaPlay, FaPause } from 'react-icons/fa';

const Player = () => {
  const audioPlayer = createRef();

  const [playing, setPlaying] = useState(false);

  console.log(playing)

  function play() {
    const audioPlayerNode = audioPlayer.current;

    setPlaying(true);
  }

  function pause() {
    const audioPlayerNode = audioPlayer.current;

    setPlaying(false);
  }

  return (
    <div className='w-full fixed bottom-0 h-14 bg-gray-700 text-white uppercase flex items-center justify-center'>
      <ReactPlayer 
        url='https://apolo.souzahost.com/8042/stream' 
        playing={playing} 
        width={0}
        height={0}
        ref={audioPlayer}
      />

      {
        !playing &&
          <FaPlay 
            size={24} 
            className='cursor-pointer'
            onClick={play}
          />
      }

      {
        playing &&
          <FaPause 
            size={24} 
            className='cursor-pointer'
            onClick={pause}
          />
      }
    </div>
  )
}

export default Player
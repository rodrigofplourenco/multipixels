import React, { createRef, useState } from 'react'

import ReactPlayer from 'react-player'
import { FaPlay, FaPause } from 'react-icons/fa';

import streams from '../config/streams';

const Player = () => {
  const audioPlayer = createRef();

  const [activeStream, setActiveStream] = useState(streams[0]);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  function play() {
    setPlaying(true);
  }

  function pause() {
    setPlaying(false);
  }

  function changeStream(stream) {
    setActiveStream(stream);
  }

  return (
    <div className='w-full fixed bottom-0 py-3 bg-gray-700 text-white uppercase flex lg:flex-row md:flex-row flex-col items-center justify-center'>
      <ReactPlayer 
        url={activeStream.url}
        playing={playing} 
        volume={volume}
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

      <input 
        type="range" 
        min="0" 
        max="1" 
        step="any" 
        value={volume} 
        onChange={(e) => setVolume(e.target.value)}
        className="lg:mx-12 md:mx-6 lg:my-0 my-6"
      />

      <div className='flex justify-center items-center border border-white p-2 rounded cursor-pointer'>
        <img 
          className='w-6 h-6 rounded-full'
          src={activeStream.thumbnail} 
          alt={activeStream.title}
        />

        <p className='pl-3'>{activeStream.title}</p>
      </div>

      {
        streams.map(stream => 
          stream !== activeStream &&
            <div 
              className='flex justify-center items-center p-2 cursor-pointer' 
              onClick={() => changeStream(stream)}
              key={stream.title}
            >
              <img 
                className='w-6 h-6 rounded-full lg:ml-6 lg:mt-0 md:mt-0 mt-3 cursor-pointer'
                src={stream.thumbnail} 
                alt={stream.title} 
              />

              <p className='pl-3'>{stream.title}</p>
            </div>
        )
      }
    </div>
  )
}

export default Player
import React, { useCallback } from 'react'

import ParticlesComponent from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

const Particles = () => {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])
  
  return (
    <ParticlesComponent options={particlesOptions} init={particlesInit}/>
  )
}

export default Particles
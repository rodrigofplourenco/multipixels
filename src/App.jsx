import React, { useCallback } from 'react';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import MovingComponent from 'react-moving-text';
import Player from './components/Player';

import { FaAngleDown } from 'react-icons/fa';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div>
            <Particles options={particlesOptions} init={particlesInit}/>

            <div>
                <div className='mt-72 ml-80 w-2/4 uppercase'>
                    <MovingComponent
                        type="fadeInFromTop"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="both"
                        className="text-9xl leading-none"
                    >
                        Bem-vindo(a) à multipixels.
                    </MovingComponent> 

                    <MovingComponent
                        type="fadeInFromLeft"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="forwards"
                        className='text-4xl text-red-500 pl-12 leading-10'
                    >
                        Uma rádio, diferenciada!
                    </MovingComponent>

                </div>

                <div className="w-full flex justify-center mt-20">
                    <a 
                        className='animate-bounce w-20 h-20 border border-white flex items-center justify-center rounded-full cursor-pointer'
                        href='#temp'
                    >
                        <FaAngleDown size={42}/>
                    </a>
                </div>

                <Player />
            </div>
        </div>
    );
}

export default App;

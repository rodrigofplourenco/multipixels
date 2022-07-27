import React, { useCallback } from 'react';

import './App.css';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import MovingComponent from 'react-moving-text';
import Player from './components/Player';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>

            <div className='multipixels'>
                <div className='titles'>
                    <MovingComponent
                        type="fadeInFromTop"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="both"
                        className="title"
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
                        className='subtitle'
                    >
                        Uma rádio, diferenciada!
                    </MovingComponent>
                </div>

                <Player />
            </div>
        </div>
    );
}

export default App;

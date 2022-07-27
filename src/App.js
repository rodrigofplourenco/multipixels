import React, { useCallback } from 'react';

import './App.css';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import MovingComponent from 'react-moving-text';

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
                        type="flash"
                        duration="2000ms"
                        delay="0.3s"
                        direction="normal"
                        timing="ease"
                        iteration="infinite"
                        fillMode="both"
                        className="title"
                    >
                        Bem-vindo(a) à multipixels.
                    </MovingComponent>

                    <MovingComponent
                        type="pulse"
                        duration="1000ms"
                        delay="0.3s"
                        direction="normal"
                        timing="ease"
                        iteration="infinite"
                        fillMode="forwards"
                        className='subtitle'
                    >
                        Uma rádio, diferenciada!
                    </MovingComponent>
                </div>
            </div>
        </div>
    );
}

export default App;

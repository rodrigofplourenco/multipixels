import React from 'react';

import Particles from './components/Particles';
import Credits from './components/Credits';
import Hero from './components/Hero';
import Player from './components/Player';

function App() {
    return (
        <div className="main">
            <Particles />

            <Credits />

            <div>
                <Hero />
            </div>

            <Player />
        </div>
    );
}

export default App;

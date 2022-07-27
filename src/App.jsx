import React from 'react';

import Particles from './components/Particles';
import Titles from './components/Titles';
import GoDownButton from './components/GoDownButton';
import Player from './components/Player';

function App() {
    return (
        <div>
            <Particles />

            <div>
                <Titles />

                <GoDownButton />

                <Player />
            </div>
        </div>
    );
}

export default App;

import { useState } from 'react';
import ReactPlayer from 'react-player'

const Player = () => {
    const [playState, setPlayState] = useState(false)

    return (
        <div className={playState ? 'player_container_wide' : 'player_container'}>
            <ReactPlayer
            className='react_player'
                src='https://www.youtube.com/watch?v=Vq06YF1YB7Y' 
                controls={true}
                style={{display: "flex", width: '100%', height: 'auto', aspectRatio: '16/9'}}
                onPlay={() => setPlayState(state => !state)}
                onPause={() => setPlayState(state => !state)}
            />
        </div>
    );
}

export default Player;

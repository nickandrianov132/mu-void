import ReactPlayer from 'react-player'

const Player = () => {
    return (
        <div className='player_container'>
            <ReactPlayer
            className='react_player'
                src='https://www.youtube.com/watch?v=Vq06YF1YB7Y' 
                controls={true}
                style={{display: "flex", width: '100%', height: 'auto', aspectRatio: '16/9'}}
            />
        </div>
    );
}

export default Player;

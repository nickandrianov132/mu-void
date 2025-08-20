import Images from '../../../assets/Images';

const DiscordWidgetHeader = ({online}) => {
    return (
        <div className='discord_header'>
            <div className='discord_logo_wrapper'>
                <img className='discord_logo' src={Images.white_discord_logo}/>
            </div>
            <div className='discord_online_wrapper'>
                <p className='p_online'>{online} {online === 1 ? "User Online" : "Users Online"}</p>
            </div>
        </div>
    );
}

export default DiscordWidgetHeader;

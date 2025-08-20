
const DiscordUserContainer = ({name, avatar, status}) => {
    return (
        <div className="discord_user_container">
            <img className="discord_user_img" src={avatar}/>
            {/* <p className="discord_user_name">{name}</p> */}
            <span className={status}></span>
        </div>
    );
}

export default DiscordUserContainer;

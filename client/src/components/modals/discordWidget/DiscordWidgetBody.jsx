import DiscordUserContainer from "./DiscordUserContainer";

const DiscordWidgetBody = ({users}) => {
    return (
        <div className='discord_body'>
            {users.map((user) => 
                <DiscordUserContainer
                    key={user.username} 
                    name={user.username}
                    avatar={user.avatar_url}
                    status={user.status}
                />
            )}
        </div>
    );
}

export default DiscordWidgetBody;

import { useFetchDiscordQuery } from "../../../services/discordApi";
import DiscordWidgetBody from "./DiscordWidgetBody";
import DiscordwidgetFooter from "./DiscordwidgetFooter";
import DiscordWidgetHeader from "./DiscordWidgetHeader";

const DiscordWidget = () => {
    const {data, isSuccess, isError, error} = useFetchDiscordQuery()
    // console.log(data);
    return (
        <>
        {isSuccess &&
        
        <div className='discord_widget_container'>
            <DiscordWidgetHeader 
                online={data.presence_count}
            />
            <DiscordWidgetBody 
                users={data.members}
            />
            <DiscordwidgetFooter 
                discordName={data.name}
                inviteLink={data.instant_invite}
            />
        </div>
        }
        </>
    );
}

export default DiscordWidget;

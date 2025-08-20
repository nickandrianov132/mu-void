import DiscordWidget from './modals/discordWidget/DiscordWidget';
import Online from './modals/Online';
import TopPlayers from './modals/TopPlayers';

const Aside = () => {
    return (
        <aside className='right_sidebar_container'>
            <Online />
            <TopPlayers />
            <DiscordWidget />
        </aside>
    );
}

export default Aside;

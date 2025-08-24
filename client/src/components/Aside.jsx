import DiscordWidget from './modals/discordWidget/DiscordWidget';
import Online from './modals/Online';
import TopPlayers from './modals/TopPlayers';
import BannerMMOTOP from './modals/mmotop/BannerMMOTOP';
const Aside = () => {
    return (
        <aside className='right_sidebar_container'>
            <Online />
            <TopPlayers />
            <DiscordWidget />
            <BannerMMOTOP />
        </aside>
    );
}

export default Aside;

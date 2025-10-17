import CastleInfo from './modals/castleInfo/CastleInfo';
import DiscordWidget from './modals/discordWidget/DiscordWidget';
import Online from './modals/Online';
import BannersBoard from './modals/topBanners/BannersBoard';
import TopPlayers from './modals/TopPlayers';

const Aside = () => {
    return (
        <aside className='right_sidebar_container'>
            <Online />
            <TopPlayers />
            <CastleInfo />
            <DiscordWidget />
            <BannersBoard />
        </aside>
    );
}

export default Aside;

import DiscordWidget from './modals/discordWidget/DiscordWidget';
import Online from './modals/Online';
import BannersBoard from './modals/topBanners/BannersBoard';
import TopPlayers from './modals/TopPlayers';
// import BannerMMOTOP from './modals/topBanners/BannerMMOTOP';
// import BannerTopG from './modals/topBanners/BannerTopG';
const Aside = () => {
    return (
        <aside className='right_sidebar_container'>
            <Online />
            <TopPlayers />
            <DiscordWidget />
            <BannersBoard />
            {/* <BannerMMOTOP />
            <BannerTopG /> */}
        </aside>
    );
}

export default Aside;

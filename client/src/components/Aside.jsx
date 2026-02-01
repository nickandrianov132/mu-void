import Images from '../assets/Images';
import CastleInfo from './modals/castleInfo/CastleInfo';
import DiscordWidget from './modals/discordWidget/DiscordWidget';
import Online from './modals/Online';
import BannersBoard from './modals/topBanners/BannersBoard';
import TopPlayers from './modals/TopPlayers';
import Player from './Player';

const Aside = () => {
    return (
        <aside className='right_sidebar_container'>
            <Online />
            <TopPlayers />
            <CastleInfo />
            <DiscordWidget />
            <BannersBoard />
            {/* <img className='winter_decor1_img' src={Images.winter_decor1}/> */}
            {/* <img className='winter_decor3_img' src={Images.winter_decor3}/> */}
            {/* <Player /> */}
        </aside>
    );
}

export default Aside;

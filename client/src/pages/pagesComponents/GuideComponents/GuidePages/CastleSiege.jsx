import React from 'react';
import EventsHeader from './GuidePagesComponents/EventsBCDSCCcomponents/EventsHeader';
import EventsContainer from './GuidePagesComponents/EventsBCDSCCcomponents/EventsContainer';
import Images from '../../../../assets/Images';
import MayaContentItem from './GuidePagesComponents/MayaContentItem';
import CSLordMixRewards from './GuidePagesComponents/CSLordMixRewards';

const CastleSiege = () => {
    return (
        <div className="guide_main_container">
            <EventsContainer>
                <EventsHeader 
                    title="Castle Siege Info:"
                />
                <div className='cs_info_body'>
                    <h4 className='cs_body_h4'>The castle siege takes place in the Valley of Loren according to schedule:</h4>
                    <div className='cs_image_wrapper'>
                        <img className='cs_body_img' src={Images.Valley_of_Loren}/> 
                    </div>
                    <div className="cs_schedule_wrapper">
                        <p className='cs_body_p'>🔸Castle Siege Guild Registration start from Monday 00:00 to Tuesday 23:59</p>
                        <p className='cs_body_p'>🔸Castle Siege Warfare start on Saturday from 21:00 to 22:00</p>
                    </div>
                    <div className='cs_desc_wrapper'>
                        <div className='lord_mix_wrapper'>
                            <h4 >CS Owner has access to Lord Mix in Throne room:</h4>
                            <div className='lord_mix_img_wrapper'>
                                <img src={Images.lord_mix1} />
                            </div>
                            <ul>
                                <li> - Go to the Valley of Loren (Loren Deep) location.</li>
                                <li> - Proceed inside the Castle and enter the Throne Room.</li>
                                <li> - Talk to the special NPC called <em>Senior</em> which is found inside the Throne room.</li>
                                <li> - Place all required items in the 8 x 4 lord’s Storage area.</li>
                                <li> - Press the combine button.</li>
                            </ul>
                            <CSLordMixRewards 
                                title="Lord Mix Rewards:"
                                timing="🕗1 combination every 24 hours period!"
                                opt="✨2-4 Excellent options & 4 Sockets each item"
                                weaponsExc="Bone Blade, Grand Viper Staff, Sylphid Wind Bow, Raven Stick, Soley Scepter, Phoenix Glove, Brova, Aileen Bow, Chroma Staff, Striker Scepter, "
                                weaponsArch="Divine Sword, Crossbow, Staff, Stick, Scepter of Archangel, "
                                weaponsSock="Flamberge, Sword Breaker, Absolute Scepter, Stringer Bow, Ethernal Wing Bow, Deadly Staff, Inberial Staff"
                                armorsExc="Dragon Knight, Venom, Sylphid Rey, Storm Blitz, Volcano, Sunlight, Phoenix Soul, "
                                armorsSock="Brave, Titan, Hades, Eternal Wing, Seraphim, Divine, Royal, Phantom, Destroy"
                                shieldSock="Salamander Shield, Frost Barrier, Crimson Glory"
                            />
                            <h4 >CS Owner has access to Land of Trial location with Boss Erohim:</h4>
                            <div className='lord_mix_img_wrapper'>
                                <img src={Images.erohim_resp} />
                            </div>
                            <CSLordMixRewards 
                                title="Erohim Boss Drop:"
                                timing="🕗 Respawn every 12 hours"
                                opt="✨Excellent items & Ancient Items with 1-3 Excellent options"
                                weaponsExc="Bone Blade, Grand Viper Staff, Sylphid Wind Bow, Raven Stick, Soley Scepter, Phoenix Glove, Brova, Aileen Bow, Chroma Staff, Striker Scepter"
                                armorsExc="Dragon Knight, Venom, Sylphid Rey, Storm Blitz, Volcano, Sunlight, Phoenix Soul"
                                ancient="Anubis, Enis, Hyon, Vicious, Gaion, Muren, Agnis, Broys, Semeden, Chrono, Aruans, Heras, Evis, Sylion, Karis, Drake, Garuda, Rave, Mist"
                            />
                            <h4 >Great Dragon apears on Land of Trial location:</h4>
                            <div className='gd_description_wrapper'>
                                <p className='cs_body_p'>🔸One Great Dragon apears in random position in Land of Trial every 6 hours 🕗</p>
                                <p className='cs_body_p'>🔸After killing him you will get <em>Flame of Condor</em>.</p>
                            </div>
                            <div className='gd_img_wrapper'>
                                <img src={Images.cs_gd_drop} />
                            </div>
                        </div>
                    </div>
                </div>
            </EventsContainer>
        </div>
    );
}

export default CastleSiege;

import HomeContent from './pagesComponents/HomeComp/HomeContent';
import Images from '../assets/Images';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GUIDE_SANTA_INFO } from '../utils/constants';

const imgArray = [Images.easy_obt1, Images.easy_obt2, Images.easy_obt3]

const Home = () => {
const navigate = useNavigate()
    return (
        <div className='home_container'>
            
            {/* <HomeContent
                title="🔖VIP is now available!🔥💣"
                date="18.11.2025"
                sideImage={Images.vip_news}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'> Buy VIP for WCoins! </h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b className='intro_b'>For New Players 3 Days of Gold VIP free!🔰</b><br/><br/>🔸- For new accounts 3 days of <b className='b_gold'>Gold VIP</b> will be activated automatically to grow and make resets faster!<b className='b_symbol'>💪</b><br/>🔸- All other players can purchase VIP in the account panel using WCoins.<b className='b_symbol'>🪙</b><br/><br/><em className='ps_em'> </em></p>
                    </div>
                </div>
            </HomeContent> */}
            {/* <HomeContent
                title="💥Weekend Events Coming!💝"
                date="18.11.2025"
                sideImage={Images.sunday_events}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>🎉Take part in events on Sunday!</h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b className='intro_b'>Meet the events from Game Master:</b><br/>🔸<b>Find GM Event</b> - random Boxes of Kundun +3,+4,+5.🎁<br/>🔸<b>Jewel Drop Event</b> - location Lorencia near the Bar.💎<br/>🔸<b>Bring Item Event</b> - random Boxes of Kundun +3,+4,+5.🎁<br/><br/><em className='ps_em'>On Sunday 23.11.2025 at 18:30 Server Time GM will commence events, additional info check in <b className='b_game'>Game</b> and in our <a href='https://discord.gg/ANTqvCrQCk' className='b_discord'>Discord</a>!</em></p>
                    </div>
                </div>
            </HomeContent> */}
            {/* <HomeContent
                title="🎁Added Jewels cheance drop!💎"
                date="08.11.2025"
                sideImage={Images.jewels_drop_add}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>Server is Open!</h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b>Following our players requests we added chance of getting jewels(Bless, Soul, Life, Chaos) from:</b><br/>❤️ Heart of love - 2% chance .<br/>🧨 Firecracker - 3% chance.<br/>🥈 Silver medal - 4% chance.<br/>🥇 Gold medal - 5% chance <br/><b></b></p>
                    </div>
                </div>
            </HomeContent> */}
            {/* <HomeContent
                title="🎉Server is Open!🔓"
                date="08.11.2025"
                sideImage={Images.open_bg_edit}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>Server is Open!</h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b className='intro_b'>Welcome everyone to our server Mu Online!</b><br/>🔹 Bonus Weekend Exp+50% Drop +10%🔥.<br/>🔹 Bonus Evening Exp+100% Drop +10% from 18:00 to 22:00🔥.<br/>🔹 All classes available from 1 lvl.<br/>🔹 Vote fot us and get WCoins! <br/><b>Join us and bring your friends to build a server with pleasant gaming atmosphere!</b></p>
                    </div>
                </div>
            </HomeContent> */}
                <HomeContent
                    title="🔖The opening is approaching!📆"
                    date="7.01.2026"
                    sideImage={Images.vote_bg1}
                >
                    <div className='description_list'>
                        <div className='opening_wrapper_h4'>
                            <h4 className='description_item_h4_opening'>Due to upcoming opening OBT is closed!</h4>
                        </div>
                        <div className='description_wrapper_p'>
                            <p className='description_item_p'><b>Waiting for you on the server Opening January 9th at 17:00 Server Time "GMT+0"!</b><br/> - A lot of things was fixed and configured for smooth and comfortable gameplay.<br/> - The voting system in the account panel is <b>available</b>.<br/>- Earn WCoins and buy useful goods in X-Shop.<br/> - Download the updated version of game Client.<br/><a className='a_download' href="https://www.mu-void.com/download"> 👉 Download</a> <br/> - All OBT accounts and characters were deleted.<br/><a className='a_registration' href="https://www.mu-void.com/registration">👉 Registration</a><br/> <b>Thanks to everyone who helps promote our server!</b></p>
                        </div>
                    </div>
                </HomeContent>
            {/* <HomeContent
                title="⭐ Vote for us and earn Wcoins💰"
                date="04.11.2025"
                sideImage={Images.vote_bg1}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>Vote for WCoins now available in account panel!</h4>
                        </div>
                        <div className='description_wrapper_p'>
                        <p className='description_item_p'><br/> - Registration is available now. Login and Vote!<br/><a className='a_registration' href="https://www.mu-void.com/registration">👉 Registration</a> <br/> - In account pannel were added few links of MMO Top100 rankings with WCoins reward.<br/>- Earn WCoins and buy useful goods in X-Shop.<br/> <b>Thanks to everyone who helps promote our server.</b></p>
                        </div>
                        </div>
                        </HomeContent> */}
            <HomeContent
                title="🚀Grand Opening January 09 at 17:00 Server Time🔥"
                date="26.12.2025"
                sideImage={Images.winter_opening1}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>Opening is scheduled for January 9<sup>th</sup> at 17:00 Server Time!</h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b>- The winter season journey will begin on January 9<sup>th</sup> at 17:00 Server Time / 19:00 Kyiv / 20:00 Moscow / 18:00 Madrid.</b> <br/> - Our server is equally opportunity server, everything depends on your activity in game.<br/> - We have <a className='a_bonus_exp' href='https://mu-void.com/guide/resets_info' target='_blank'> Bonus Dynamic Exp & Easy Reset system</a> on our server.<br/> - There is no any way to get equipment/weapons/e.t.c but in game way.<br/> - The only donate is WCoins, to use for getting VIP or buying useful things in X-Shop.<br/> - No any donate will be available until the first Castle Siege which gonna happen next weekends from server launching.<br/> - We hope you will enjoy your adventure!</p>
                    </div>
                </div>
            </HomeContent>
            <HomeContent
                title="💥Opening is approaching📢"
                date="17.12.2025"
                sideImage={Images.opening_january}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>⛄The Winter season opening</h4>
                    </div>
                    <p className='description_item_p'> 🔹 During Open Beta Test we had reworked many aspects of game settings, events, bosses, Classes PVE/PVP, and finally we are pleased to announce that server is going to be opened with x50 rates in the beginning of <b>January 2026</b>.</p>
                    <p className='description_item_p'> 🔹 Stay tuned for updates on our website and <a className='discord_a' href='https://discord.gg/ANTqvCrQCk' target='_blank'>Discord</a>.</p>
                    <p className='description_item_p'></p>
                    <h4 className='description_item_h4'></h4>
                </div>
            </HomeContent>
            <HomeContent
                title="🚀Open Beta Test💢"
                date="05.12.2025"
                sideImage={Images.obt_new}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>🚀OBT started!</h4>
                    </div>
                    <p className='description_item_p'> <b>Registration for OBT is open.</b> <a className='desc_a' href='https://mu-void.com/registration'>Registration</a></p>
                    <p className='description_item_p'>✅ Shadow Phantom Soldier(Elf NPC) gives you increse damage/defence buff up to 400lvl.</p>
                    <p className='description_item_p'>✅ Experience gained during the open beta test has been increased to <b>1500x</b> for testing available content and server settings easier.</p>
                    <p className='description_item_p'><b>💣💥</b> During OBT Reset = <b>1kk zen * Res</b>.</p>
                    <p className='description_item_p'><b>💣💥</b> During OBT Grand Reset coast = <b>1kk zen</b>.</p>
                    <h4 className='description_item_h4'>We hope for the help of our players and welcome your suggestions for improving the game server!</h4>
                </div>
            </HomeContent>
            <HomeContent
                title="📢Updates 📝"
                date="05.12.2025"
                sideImage={Images.updates1}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>🔨Updates 05 december 2025🔧</h4>
                    </div>
                    <h5>Changes:</h5>
                    <ul>
                        <li>- reworked White Wizard Event.<a href='https://mu-void.com/guide/white_wizard_info'>White Wizard!</a></li>
                        <li>- reworked Santa Event. <a href='https://mu-void.com/guide/santa_info'>Santa!</a></li>
                        <li>- minor Classes rework. <a href='https://mu-void.com/guide/classes_info'>Classes!</a></li>
                        <li>- Gold Rabbits drop reworked. <a href='https://mu-void.com/guide/drop_dungeon_event_info'>Rabbits!</a></li>
                        <li>- Drop items rework. <a href='https://mu-void.com/guide/drop_box_info'>Drop!</a></li>
                        <li>- Castle Lord Mix was reworked.</li>
                        <li>- Reduced damage, defense, HP of monsters up ot Atlans3.</li>
                        <li>- Reduced damage, defense, HP of White Wizard & Orcs, Santa & Cursed Goblins, Gold Rabbits.</li>
                        <li>- Added New Socket items into drop from Selupan.</li>
                    </ul>
                    {/* <p className='description_item_p'>✅ There is a very helpfull NPS called "BK_Helper" gives you a sort of usefull buffs lasting 60min for 100 000zen.</p>
                    <p className='description_item_p'>✅ Shadow Phantom Soldier(Elf NPC) gives you increse damage/defence buff up to 400lvl.</p>
                    <p className='description_item_p'>✅ Experience gained during the open beta test has been increased to <b>1500x</b> for testing available content and server settings easier.</p>
                    <h4 className='description_item_h4'>We hope for the help of our players and welcome your suggestions for improving the game server!</h4> */}
                </div>
            </HomeContent>
            <HomeContent
                title="📌OBT Launching 🔔"
                date="01.12.2025"
                sideImage={Images.obt_coming}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>🚀OBT start december 5<sup>th</sup></h4>
                    </div>
                    <p className='description_item_p'>🔶 <b className='p_title'>Due to the extensive rework and content update of the game server, we are pleased to announce that we are launching open beta testing on December 5th.</b></p>
                    <p className='description_item_p'><b>🔨🔧</b> List of all updates and reworks will be posted upon the launching of OBT.<b>📜</b> </p>
                    <h4 className='description_item_h5'>We've decided to rework our server settings and content to make gameplay easier so you can develop and equip your characters faster and more enjoyably.</h4>
                </div>
            </HomeContent>                                         
        </div>
    );
}

export default Home;

import HomeContent from './pagesComponents/HomeComp/HomeContent';
import Images from '../assets/Images';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GUIDE_SANTA_INFO } from '../utils/constants';

// const imgArray = [Images.easy_obt1, Images.easy_obt2, Images.easy_obt3]

const Home = () => {
const navigate = useNavigate()
    return (
        <div className='home_container'>
                {/* <HomeContent
                    title="📢Updates 📝"
                    date="18.02.2026"
                    sideImage={Images.updates1}
                >
                    <div className='description_list'>
                        <div className='opening_wrapper_h4'>
                            <h4 className='description_item_h4_opening'>🔨Updates 18 February 2026🔧</h4>
                        </div>
                        <h5>Due to lack of Zen for Resets and Grand Resets was increased Zen Reward in following events:</h5>
                        <ul>
                            <li className='changes_li'>- White Wizard Orcs.<a href='https://mu-void.com/guide/white_wizard_info'>check!👈</a></li>
                            <li className='changes_li'>- Santa Event. <a href='https://mu-void.com/guide/santa_info'>check!👈</a></li>
                            <li className='changes_li'>- Devil Square. <a href='https://www.mu-void.com/guide/drop_ds_info'>check!👈</a></li>
                        </ul>
                        <h4 className='description_item_h4'>We hope these changes will make it easier for players to earn Zen for a comfortable gameplay experience.</h4>
                    </div>
                </HomeContent> */}
            {/* <HomeContent
                title="🔖VIP & Donate are available now!🔥💣"
                date="17.02.2026"
                sideImage={Images.vip_news}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'> Buy VIP for WCoins! </h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b className='intro_b'>For New Players 5 Days of Gold VIP free!🔰</b><br/>🔸- For new accounts 5 days of <b className='b_gold'>Gold VIP</b> will be activated automatically to grow and make resets faster!<b className='b_symbol'>💪</b><br/>🔸- All other players can purchase VIP in the account panel using WCoins.<b className='b_symbol'>🪙</b><br/><em className='ps_em'> </em><br/><em className='donate_em'>💲💰Purchasing WCoins is now available in user panel!💥</em></p>
                    </div>
                </div>
            </HomeContent> */}
            {/* <HomeContent
                title="💥Weekend Events Coming!💝"
                date="09.01.2026"
                sideImage={Images.saturday_events}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>🎉Take part in events on Saturday!</h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b className='intro_b'>Meet the events from Game Master:</b><br/>🔸<b>Find GM Event</b> - Boxes of Kundun +1,+2,+3 x 2!🎁🧨<br/>🔸<b>Jewel Drop Event</b> - location Lorencia near the Bar.💎<br/>🔸<b>Bring Item Event</b> - Boxes of Kundun +4 x 2, +5 x 1!🎁🧨<br/><br/><em className='ps_em'>On Saturday 10.01.2026 at 18:00 Server Time GM will commence events, additional info check in <b className='b_game'>Game</b> and in our <a href='https://discord.gg/ANTqvCrQCk' className='b_discord'>Discord</a>!</em></p>
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
                date="06.02.2026"
                sideImage={Images.opening_bg2}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>Server is Open!</h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b className='intro_b'>Welcome everyone to our server Mu Online!</b><br/>🔹 Bonus Weekend Exp+50% Drop +10% from 24:00 Friday to 24:00 Sunday🔥.<br/>🔹 Bonus Evening Exp+50% Drop +10% from 18:00 to 22:00(Except Weekends)🔥.<br/>🔹 All classes available from 1 lvl.<br/> 🔹 200 free start points! <br/>🔹 Vote fot us and get WCoins! <br/><b>Join us and bring your friends to build a server with pleasant gaming atmosphere!</b></p>
                    </div>
                </div>
            </HomeContent> */}
                {/* <HomeContent
                    title="🔖The opening is approaching!📆"
                    date="07.01.2026"
                    sideImage={Images.vote_bg1}
                >
                    <div className='description_list'>
                        <div className='opening_wrapper_h4'>
                            <h4 className='description_item_h4_opening'>Due to upcoming opening OBT is closed!</h4>
                        </div>
                        <div className='description_wrapper_p'>
                            <p className='description_item_p'><b>Waiting for you on the server Opening January 9th at 17:00 Server Time "GMT+0"!</b><br/> - A lot of things was fixed and configured for smooth and comfortable gameplay.<br/> - Vote for our server!<br/> - Download the updated version of game Client.<br/><a className='a_download' href="https://www.mu-void.com/download"> 👉 Download</a> <br/> - All OBT accounts and characters were deleted.<br/><a className='a_registration' href="https://www.mu-void.com/registration">👉 Registration</a><br/> <b>Thanks to everyone who helps promote our server!</b></p>
                        </div>
                    </div>
                </HomeContent> */}
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
            {/* <HomeContent
                title="Open Beta-test in August 24th"
                date="20.01.2026"
                sideImage={Images.opening_feb}
            >
                <div className='description_list'>
                        <h2 className='description_header'>Opening is scheduled for February 6<sup>th</sup> at 17:00 Server Time!</h2>
                    <div className='description_wrapper'>
                        <p className='description_item'></p>
                    </div>
                </div>
            </HomeContent> */}
            {/* <HomeContent
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
            </HomeContent> */}
    <HomeContent
    title="MU-Void: Open Beta Launch! 🛠️"
    date="04.09.2026"
    sideImage={Images.obt_1}
    >
    <div className="description_list">
        {/* OBT TESTER BONUS */}
        <p className="description_item_p" style={{ border: '1px dashed #ffb703', padding: '8px', borderRadius: '4px', backgroundColor: 'rgba(255, 183, 3, 0.1)' }}>
        <b className="item_bold" style={{ color: '#ffb703' }}>🎁 Tester Reward:</b> Help us polish the server! All active OBT participants will receive <span className="item_bold" style={{ color: '#ffb703' }}>Free Gold VIP for 5 Days upon the official launch</span> as a thank you for your support.
        </p>

        <h4 className="description_item_h4">⚔️ Join the Open Beta and help us shape the ultimate anti-monopoly MU experience! ⚔️</h4>

        <p className="description_item_p">
        <b className="item_bold">Why Open Beta?</b> Before the live release, we want to ensure absolute stability and perfect balance under real player conditions. All core features are live, and your feedback during this phase will directly shape the final product.
        </p>

        <p className="description_item_p">
        <b className="item_bold">Fair Power Rotation:</b> The unique Grand Reset System is designed to break top-guild monopolies. During this OBT, you can see in real-time how capping the top players opens up bosses and Castle Siege for mid-tier guilds and newcomers.
        </p>

        <p className="description_item_p">
        <b className="item_bold">Combat System Tweaks:</b> The attack speed caps and raw weapon damage scaling are set, but they need heavy PvP testing. Join in, try out different builds, and share your feedback — class balance is now in your hands.
        </p>

        <p className="description_item_p">
        <b className="item_bold">Overhauled Ancient Sets:</b> All new competitive PvE and PvP paths for every class are ready for testing. Find the ultimate combinations before the official release!
        </p>

        <p className="description_item_p">
        <b className="item_bold">A message from the developer:</b> MU-Void is a strictly non-commercial project built out of pure passion to fix the flaws of modern MU servers. As the sole developer, I provide the core infrastructure, but the actual life and growth of the server depend entirely on you. Activity is the main engine here. If you enjoy the concept, please invite your friends, bring your guilds, vote for us, and spread the word. Together, we can build a thriving, long-lasting community!
        </p>

        <h4 className="description_item_h4" style={{ marginTop: '15px', color: '#ffb703', fontStyle: 'italic', textAlign: 'center' }}>
        ✨ I built the foundation. Now, the community holds the power. You can join, help us find bugs, and build the comfortable gaming environment you've always wanted. Or, you can pass by and continue hopping from server to server in search of a "perfect place" that doesn't exist. The choice is yours. ✨
        </h4>
    </div>
    </HomeContent>



{/* <HomeContent
  title="Why MU-Void? A True Anti-Monopoly Experience! 🚀"
  date="29.08.2026"
  sideImage={Images.vip_news}
>
  <div className="description_list">

    <p className="description_item_p" style={{ border: '1px dashed #ffb703', padding: '8px', borderRadius: '4px', backgroundColor: 'rgba(255, 183, 3, 0.1)' }}>
      <b className="item_bold" style={{ color: '#ffb703' }}>🎁 Special Launch Bonus:</b> All existing players and newcomers will automatically receive <span className="item_bold" style={{ color: '#ffb703' }}>Free Gold VIP for 3 Days!</span> Jump in and boost your progress right now!
    </p>

    <h4 className="description_wrapper_h4">
      <h4 className="description_item_h4">⚔️ Tired of servers where 2 or 3 top guilds capture every boss? I am too. ⚔️</h4>
    </h4>

    <p className="description_item_p">
      <b className="item_bold">Fair Power Rotation:</b> I designed a unique Grand Reset System that forces top players to roll back their progression. This stops permanent monopolies, keeps the economy alive, and constantly opens up Castle Siege and World Bosses for mid-tier guilds and new players.
    </p>

    <p className="description_item_p">
      <b className="item_bold">True Weapon Value:</b> I completely rebalanced the combat system and capped broken attack speed scaling. Now, upgrading your weapon actually matters — better gear increases your raw power and unique combat stats, not just animation speed.
    </p>

    <p className="description_item_p">
      <b className="item_bold">Overhauled Ancient Sets:</b> No more useless items. I radically reworked Ancient options to create real build diversity. Every class now has multiple competitive paths to top-tier PvP and PvE.
    </p>

    <p className="description_item_p">
      <b className="item_bold">Gatekeep-Free Environment:</b> I configured all event timers, mini-bosses, and map drops so that a single dominant alliance cannot camp everything simultaneously.
    </p>

    <p className="description_item_p">
      <b className="item_bold">A message from the developer:</b> You might see a low online count on the website right now. Many of those are active windows utilizing my customized Off-Exp system. I refuse to display fake, artificially inflated numbers. As the sole developer, admin, and GM of this project, I put my heart into fixing the flaws of modern MU. Give MU-Void a chance!
    </p>

    <h4 className="description_item_h4" style={{ marginTop: '15px', color: '#e63946', fontStyle: 'italic', textAlign: 'center' }}>
      ✨ As a developer, I built the foundation. Now, the community holds the power. You can join, stay, and create the comfortable gaming environment you've always wanted. Or, you can close this tab, continue hopping from server to server, endlessly searching for that "perfect place" that simply doesn't exist. The choice is yours. ✨
    </h4>
  </div>
</HomeContent> */}

    </div>
    );
}

export default Home;

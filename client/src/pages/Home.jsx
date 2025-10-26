import HomeContent from './pagesComponents/HomeComp/HomeContent';
import Images from '../assets/Images';
import { useState } from 'react';

const imgArray = [Images.easy_obt1, Images.easy_obt2, Images.easy_obt3]
const Home = () => {

    return (
        <div className='home_container'>
            <HomeContent
                title="🎉Server is Open!🔓"
                date="24.10.2025"
                sideImage={Images.open_bg_edit}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>Server is Open!</h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b>Welcome everyone to our server Mu Online!</b><br/>🔹 Bonus Weekend Exp+50% Drop +10%🔥.<br/>🔹 Bonus Evening Exp+100% Drop +10% from 18:00 to 22:00🔥.<br/>🔹 All classes available from 1 lvl.<br/>🔹 Vote fot us and get WCoins! <br/><b>Join us and bring your friends to build a server with pleasant gaming atmosphere!</b></p>
                    </div>
                </div>
            </HomeContent>
            <HomeContent
                title="📢Grand Opening October 24th 17:00 Server Time🔥"
                date="16.10.2025"
                sideImage={Images.img_opening_news}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>Opening is scheduled for October 24th 17:00 Server Time!</h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b>Welcome to our classic Mu Online server!</b><br/> - The great journey will begin on 24th of October 17:00 Server Time.<br/> - Our server is equally opportunity server, everything depends on your activity in game.<br/> - There is no any way to get equipment/weapons/e.t.c but in game way.<br/> - The only donate is WC to use for getting VIP or buying things in X-Shop.<br/> - No any donate will be available until the first Castle Siege which gonna happen in 2 weeks after the journey begun.<br/> - We hope you will enjoy your adventure!</p>
                    </div>
                </div>
            </HomeContent>
            <HomeContent
                title="🔖Open Beta-Test is Closed 🔒"
                date="16.10.2025"
                sideImage={Images.bg_obt_close}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>Due to upcoming opening OBT is closed!</h4>
                    </div>
                    <div className='description_wrapper_p'>
                        <p className='description_item_p'><b>Waiting for you on the server Opening October 24th at 17:00 Server Time "UTC"!</b><br/> - A lot of things was fixed and configured for smooth and comfortable gameplay.<br/> - The voting system in the account panel will be available on the opening day.<br/> - Everyone who has already downloaded the game client must download the updated version again.<br/><a className='a_download' href="https://www.mu-void.com/download"> 👉 Download</a> <br/> - All accounts and characters were deleted deleted.<br/><a className='a_registration' href="https://www.mu-void.com/registration">👉 Registration</a></p>
                    </div>
                </div>
            </HomeContent>
            <HomeContent
                title="📌Easy OBT for players💎"
                date="30.08.2025"
                sideImagesArr={imgArray}
            >
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>OBT features:</h4>
                    </div>
                    <p className='description_item_p'>✅ There is a very helpfull NPS called "BK_Helper" gives you a sort of usefull buffs lasting 60min for 100 000zen.</p>
                    <p className='description_item_p'>✅ Shadow Phantom Soldier(Elf NPC) gives you increse damage/defence buff up to 400lvl.</p>
                    <p className='description_item_p'>✅ All base skills you need for smooth start are available in Lorencia bar shop.</p>
                    <h4 className='description_item_h4'>We hope You will get a realy good experience playing on our server!</h4>
                </div>
            </HomeContent>
            <HomeContent 
                title="💥Welcome! Join Open Beta-test!🚀"
                date="24.08.2025"
                sideImage={Images.opening_img}
            > 
                <div className='description_list'>
                    <div className='opening_wrapper_h4'>
                        <h4 className='description_item_h4_opening'>Open beta-test is approaching!</h4>
                    </div>
                    <p className="first-p home-content-p">Welcome on our <b>MU Online</b> server. Open-Beta test will be started on <b>August 28<sup>th</sup></b>, we'll be appreciated to everyone who will participate in Open-Beta test of our server.<br/>
                    </p>
                    <div className='discord_container'>
                    <img className='discord_img' src={Images.discord2}></img>
                    <a className="a_discord" href="https://discord.gg/ANTqvCrQCk" target="_blank">Discord here!</a>
                    </div>
                </div>
            </HomeContent>
                                                    
        </div>
    );
}

export default Home;

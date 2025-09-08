import HomeContent from './pagesComponents/HomeComp/HomeContent';
import Images from '../assets/Images';
import { useState } from 'react';

const imgArray = [Images.easy_obt1, Images.easy_obt2, Images.easy_obt3]
const Home = () => {

    return (
        <div className='home_container'>
            <HomeContent
                title="📌Easy OBT for players💎"
                date="30.08.2025"
                sideImagesArr={imgArray}
            >
                <div className='description_list'>
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

import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";
import MayaContentItem from "./GuidePagesComponents/MayaContentItem";

const BossSelupan = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title="Selupan Boss info:"/>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Selupan Boss Drop info:"
                    remark="All items with 2-4 sockets + Luck & Skill"
                    respInfo="Respawn every 24 hours"
                    images={[Images.selupan_kill_1, Images.selupan_kill_2, Images.selupan_kill_3, Images.selupan_kill_4, Images.selupan_kill_5]}
                    img={Images.selupan1}
                    img2={Images.selupan2}
                    armors="Brave, Titan, Hades, Eternal Wing, Seraphim, Divine, Royal, Phantom, Destroy"
                    weapons="Sword Breaker, Flameberge, Inberial Staff, Deadly Staff, Eternal Wing Stick, Absolute Scepter, Dark Stinger, Frost Mace, Rune Bastard Sword"
                    shields="Crimson Glory, Guardian Shield, Salamander Shield, Frost Barrier"
                />
            </div>
        </div>
    );
}

export default BossSelupan;

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
                    remark="All items with 4 sockets + Luck & Skill"
                    quantity="5 items"
                    respInfo="Respawn every 24 hours"
                    images={[Images.selupan_kill_1, Images.selupan_kill_2, Images.selupan_kill_3, Images.selupan_kill_4]}
                    img={Images.selupan1}
                    img2={Images.selupan2}
                    armors="Hell Night Set, Succubus Set, Lazy Wind Set, Dark Devil Set, Sticky Set, Ambition Set, Stormwing Set, Light Lord Set"
                    weapons="Sonic Blade, Asura, Cyclone Sword, Blast Break, Thunderbolt, Horn of Steel, Magma Spear, Angelic Bow, Devil Crossbow, Summon Spirit Stick, Miracle Staff, Spite Staff"
                    shields="Lazy Wind Shield, Light Lord Shield, Dark Devil Shield, Magic Knight Shield, Ambition Shield"
                />
            </div>
        </div>
    );
}

export default BossSelupan;

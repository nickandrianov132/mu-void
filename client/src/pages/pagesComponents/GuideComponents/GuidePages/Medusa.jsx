import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";
import MayaContentItem from "./GuidePagesComponents/MayaContentItem";

const Medusa = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title='Boss Medusa Info' />
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Medusa Boss Drop info:"
                    remark="All items with 4 sockets + Luck & Skill"
                    quantity="5 items"
                    respInfo="Respawn every 24 hours"
                    // images={[Images.selupan_kill_1, Images.selupan_kill_2, Images.selupan_kill_3, Images.selupan_kill_4, Images.selupan_kill_5]}
                    img={Images.medusa1}
                    // img2={Images.selupan2}
                    armors="Brave, Titan, Hades, Eternal Wing, Seraphim, Divine, Royal, Phantom, Destroy"
                    weapons="Sword Breaker, Flameberge, Inberial Staff, Deadly Staff, Eternal Wing Stick, Absolute Scepter, Dark Stinger, Frost Mace, Rune Bastard Sword"
                    shields="Crimson Glory, Guardian Shield, Salamander Shield, Frost Barrier"
                />
                <div className="content_title_img_wrapper">
                    <h4>Boss Medusa randomly apears in next respawn zones</h4>
                    <img className="content_title_img" src={Images.swamp_zones}/>
                </div>
            </div>
        </div>
    );
}

export default Medusa;

import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";
import MayaContentItem from "./GuidePagesComponents/MayaContentItem";

const CryWolfEvent = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title="CryWolf Event info:"/>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Dark Elf Drop:"
                    img={Images.crywolf_darkelf}
                    armors="Dark Phoenix, Great Dragon, Dark Soul, Hurricane, Red Spirit, Dark Master, Demonic, Piercing Grove"
                    weapons="Knight Blade, Dark Reign Blade, Daybreak, Sword Dancer, Piercing Glove, Shining Scepter, Great Reign Crossbow, Arrow Wiper Bow, Albatross Bow, Platina Staff, Storm Blitz Stick, Archangel Stick, Archangel Staff, Archangel Sword, Archangel Scepter, Archangel Crossbow"
                    shields="Grand Soul Shield, Cross Shield"
                />
                <MayaContentItem 
                    title="Boss Balgass Drop:"
                    respInfo="Respawn every 24 hours"
                    img={Images.crywolf_balgass}
                    remark="✨All weapons + Luck & Skill✨"
                    armors="Dragon Knight, Venom, Sylphid Rey, Storm Blitz, Volcano, Sunlight, Phoenix Soul"
                    weapons="Bone Blade, Grand Viper Staff, Sylphid Wind Bow, Raven Stick, Soley Scepter, Phoenix Glove"
                />
            </div>
        </div>
    );
}

export default CryWolfEvent;

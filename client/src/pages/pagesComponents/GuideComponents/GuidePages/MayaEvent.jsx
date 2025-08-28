import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";
import MayaContentItem from "./GuidePagesComponents/MayaContentItem";

const MayaEvent = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title="Kanturu Maya Event info:"/>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Maya Left & Right Hand"
                    img={Images.maya_hand_1}
                    img2={Images.maya_hand_2}
                    armors="Black Dragon, Ashcrow, Grand Soul, Eclipse, Divine, Iris, Dark Steel, Glorius, Thunder Hawk, Valiant, Ancient, Storm Jahad"
                    weapons="Sword of Destruction, Dark Breaker, Thunder Blade, Rune Blade, Holly Storm Glove, Lord Scepter, Great Lord Scepter, Elemental Mace, Dragon Spear, Saint Crossbow, Celestial Bow, Staff of Kundun, Staff of Destruction, Dragon Soul Staff, Demonic Stick, Ancient Stick"
                />
                <MayaContentItem 
                    title="Maya Event Boss - Nightmare"
                    respInfo="Respawn every 24 hours"
                    remark="All items Exelent with 1-4 / 50% Luck & Skill"
                    quantity="5 items"
                    img={Images.nightmare}
                    armors="Dragon Knight, Venom, Sylphid Rey, Storm Blitz, Volcano, Sunlight, Phoenix Soul"
                    weapons="Bone Blade, Grand Viper Staff, Sylph Wind Bow, Raven Stick, Soley Scepter, Phoenix Glove"
                />
            </div>
        </div>
    );
}

export default MayaEvent;

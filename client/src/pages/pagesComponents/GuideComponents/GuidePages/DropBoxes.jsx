import Images from "../../../../assets/Images";
import GuideBoxesItem from "./GuidePagesComponents/GuideBoxesItem";
import GuideSealBoxItem from "./GuidePagesComponents/GuideSealBoxItem";
import GuideTitle from "./GuidePagesComponents/GuideTitle";

const DropBoxes = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title='Drop Boxes Info' />
            <div className='guide_dropBoxes_container'>
                <GuideBoxesItem 
                    image={Images.heart_of_love}
                    enchance="+7 ...+10"
                    locations=" Noria, Lorencia, Elveland, Devias, Dungeon"
                    armors="Leather, Bronze, Pad, Vine, Silk"
                    weapons="Kris, Katana, Gladius, Tomahawk, Larkan Axe Elven Bow, Skull Staff, Thunder Staff, Mystery Stick"
                    shields="Small Shield, Horn Shield"
                />
                <GuideBoxesItem 
                    image={Images.firecracker}
                    enchance="+7 ...+10"
                    locations=" Noria, Lorencia, Elveland, Devias, Dungeon"
                    armors="Brass, Bone, Wind"
                    weapons="Double Blade, Blade, Crescent Axe, Bill of Balrog, Battle Scepter, Battle Bow, Gorgon Staff, Violent Wind Stick, Book of Shamut"
                    shields="Kite Shield, Elven Shield, Buckler, Dragon Slayer Shield, Skull Shield"
                />
                <GuideBoxesItem 
                    image={Images.silver_medal}
                    enchance="+7 ...+10"
                    locations=" Atlans 1-2, LostTower 1-7"
                    armors="Scale, Plate, Sphinx, Spirit, Violent Wind"
                    weapons="Lightning Sword, Master Scepter, Tiger Bow, Legendary Staff, Red Wing Stick, Book of Neil"
                    shields="Lagre Round Shield"
                />
                <GuideBoxesItem 
                    image={Images.gold_medal}
                    enchance="+7 ...+10"
                    locations=" Tarkan, Icarus, Aida, Arena"
                    armors="Dragon, Legendary, Guardian, Red Wing, Adamantine, Storm Crow, Sacred Fire"
                    weapons="Crystal Sword, Sword of Destruction, Staff of Resurection, Staff of Destruction, Bluewing Crossbow, Silver Bow, Sacred gloves, Great Scepter, Ancient Stick, Book of Lagle"
                    shields="Serpent Shield, Dragon Shield, Legendary Shield, Elemental Shield"
                />
                <GuideBoxesItem 
                    image={Images.green_box}
                    enchance=" +7 ...+11"
                    locations=" Dungeon 1-3 Event Mobs"
                    armors="Black Dragon, Ashcrow, Grand Soul, Eclipse, Divine, Iris, Dark Steel, Glorius, Thunder Hawk, Valiant, Ancient, Storm Jahad"
                    weapons="Dark Breaker, Rune Blade, Holy Storm Glove, Dragon Soul Staff, Demonic Stick, Dragon Spear, Great Lord Scepter, Saint Crossbow, Celestial Bow, Staff of Kundun"
                    shields=""
                />
                <GuideBoxesItem 
                    image={Images.red_box}
                    enchance=" +7 ...+11"
                    locations=" Dungeon 1-3 Event Mobs"
                    armors="Dark Phoenix, Great Dragon, Dark Soul, Hurricane, Red Spirit, Dark Master, Demonic, Piercing"
                    weapons="Knight Blade, Dark Reign Blade, Daybreak, Sword Dancer, Piercing Blade Glove, Shining Scepter, Great Reign Crossbow, Arrow Viper Bow, Albatross Bow, Platina Staff, Raven Stick"
                    shields="Grand Soul Shield, Cross Shield"
                />
                <GuideSealBoxItem 
                    image={Images.silver_box_open}
                    mobs=" Lunar Rabbit, Fire Flame Ghost, Pouch of Blessing, Death King"
                    dk="Garuda Brass, Mist Bronze, Rave Plate"
                    dw="Heras Sphinx, Evis Bone, Sylion Bone"
                    elf="Drake Vine, Karis Spirit"
                />
                <GuideSealBoxItem 
                    image={Images.gold_box_open}
                    mobs=" Lunar Rabbit, Fire Flame Ghost, Pouch of Blessing, Death King"
                    dk="Hyon Dragon, Vicious Dragon"
                    dw="Anubis Legendary, Enis Legendary"
                    elf="Aruans Guardian"
                    sum="Semeden Red Wing, Chrono Red Wing"
                    mg="Gaion Storm Crow, Muren Storm Crow"
                    dl="Agnis Adamantine, Broy Adamantine"
                    rf="Chamers Sacred Fire, Vega Sacred Fire"
                />
                {/* <GuideBoxesItem 
                    image={Images.purple_box}
                    locations=" Dungeon 1-3 Event Mobs"
                    enchance=" +7 ...+11"
                    armors="Dragon, Legendary, Guardian, Red Wing, Adamantine, Storm Crow, Sacred Fire"
                    weapons="Crystal Sword, Staff of Resurection, Staff of Destruction, Bluewing Crossbow, Silver Bow, Sacred gloves, Great Scepter, Ancient Stick, Book of Lagle"
                    shields="Serpent Shield, Dragon Shield, Legendary Shield, Elemental Shield"
                /> */}
            </div>
        </div>
    );
}

export default DropBoxes;

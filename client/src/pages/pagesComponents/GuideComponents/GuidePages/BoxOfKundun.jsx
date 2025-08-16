import Images from "../../../../assets/Images";
import GuideBOK from "./GuidePagesComponents/GuideBOK";

const BoxOfKundun = () => {
    return (
        <div className="guide_main_container">
            <div className="guide_dropBoxes_container">
                <GuideBOK
                    image={Images.bok1}
                    armors="Pad, Leather, Bronze, Vine, Silk"
                    weapons="Kris, Short Sword, Reaper, Katana, Sword of Assasin, Blade, Gladius, Falcon, Serpent Sword, Sword of Salamander, Small Axe, Tomahawk, Elven Axe, Mace, Morning Star, Flail, Battle Scepter, Light Saber, Spear, Dragon Lance, Giant Trident, Serpent Spear, Double Poleaxe, Short Bow, Bow, Elven Bow, Crossbow, Golden Crossbow, Skull Staff, Angelic Staff, Mystery Stick, Book of Shamut"
                    shields="Small Shield, Horn Shield, Kite Shield, Elven Shield, Buckler"
                    pendants="Pendant of Fire, Pendant of Ability"
                    rings="Ring of Fire, Ring of Earth"
                />
                <GuideBOK
                    image={Images.bok2}
                    armors="Bone, Sphinx, Scale, Brass, Plate, Wind, Spirit, Light Plate, Violent Wind"
                    weapons="Light Saber, Legendary Sword, Helical Sword, Larkan Axe, Giant Sword, Battle Axe, Elven Axe, Nikea Axe, Great Hummer, Crescent Axe, Master Scepter, Halberd, Berdysh, Battle Bow, Tiger Bow, Arquebus, Light Crossbow, Serpent Crossbow, Thunder Staff, Gorgon Staff, Violent Wind Stick, Book of Neil"
                    shields="Dragon Slayer Shield, Skull Shield, Spiked shield, Tower Shield"
                    pendants="Pendant of Wind, Pendant of Water"
                    rings="Ring of Wind, Ring of Magic"
                />
                <GuideBOK
                    image={Images.bok3}
                    armors="Dragon, Legendary, Guardian, Adamantine, Red Winged, Storm Crow, Sacred Fire"
                    weapons="Double Blade, Lighting Sword, Crystal Morning Star, Crystal Sword, Sacred Glove, Chaos Dragon Axe, Great Scepter, Great Scythe, Bill of Balrog, Silver Bow, Bluewing Crossbow, Aquagold Crossbow, Legendary Staff, Chaos Staff, Staff of Resurection, Red Winged Stick, Book of Lagle"
                    shields="Plate Shield, Large Round Shield, Serpent Shield, Bronze Shield, Dragon Shield, Legendary Shield, Elemental Shield"
                    pendants="Pendant of Lighting, Pendant of Ice"
                    rings="Ring of Ice, Ring of Poison"
                />
                <GuideBOK
                    image={Images.bok4}
                    armors="Black Dragon, Ashcrow, Grand Soul, Eclipse, Divine, Iris, Dark Steel, Glorius, Thunder Hawk, Valiant, Ancient, Storm Jahad"
                    weapons="Sword of Destruction, Dark Breaker, Thunder Blade, Rune Blade, Holly Storm Glove, Lord Scepter, Great Lord Scepter, Elemental Mace, Dragon Spear, Saint Crossbow, Celestial Bow, Staff of Kundun, Staff of Destruction, Dragon Soul Staff, Demonic Stick, Ancient Stick"
                    shields="Plate Shield, Large Round Shield, Serpent Shield, Bronze Shield, Dragon Shield, Legendary Shield, Elemental Shield"
                    pendants=""
                    rings=""
                />
                <GuideBOK
                    image={Images.bok5}
                    armors="Dark Phoenix, Great Dragon, Dark Soul, Hurricane, Red Spirit, Dark Master, Demonic, Piercing Grove"
                    weapons="Knight Blade, Dark Reign Blade, Daybreak, Sword Dancer, Piercing Glove, Shining Scepter, Great Reign Crossbow, Arrow Wiper Bow, Albatross Bow, Platina Staff, Storm Blitz Stick, Archangel Stick, Archangel Staff, Archangel Sword, Archangel Scepter, Archangel Crossbow"
                    shields="Grand Soul Shield, Cross Shield"
                    pendants=""
                    rings=""
                />
            </div>
        </div>
    );
}

export default BoxOfKundun;

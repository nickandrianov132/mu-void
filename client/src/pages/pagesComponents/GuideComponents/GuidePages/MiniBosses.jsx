import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";
import MayaContentItem from "./GuidePagesComponents/MayaContentItem";

const MiniBosses = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title="Mini Bosses Drop info:"/>
            
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Death Bone:"
                    remark="Apears 20 Death Bones in random places in Dungeon"
                    respInfo="Respawn every 1 hour"
                    img={Images.death_bone}
                    dropImg1={Images.death_bone_drop1}
                    ExtraDropImg1={Images.death_bone_drop2}
                    drop="Jewel of Bless, Jewel of Soul, Jewel of Life"
                    extraDrop="Demon, Spirit of Guardian"
                    gp="10"
                />
            </div>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Metal Balrog:"
                    remark="Apears 1 Metal Balrog in the end of LostTower 7"
                    respInfo="Respawn every 30 minutes"
                    exc={false}
                    img={Images.metal_balrog}
                    dropImg1={Images.metal_balrog_drop}
                    drop="Lochs Feather, Crest of Monarch, Spirit of Dark Raven, Spirit of Dark Horse, Jewel of Creation"
                    skills="Ice Storm, Decay, Multi-shot, Lighting Shock, Gigantic Storm, Destruction, Flame Strike, Fire Scream, Chaotic Desire"
                    gp="50"
                />
            </div>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Zaikan:"
                    remark="Apears 1 Mini boss Zaikan on Tarkan"
                    respInfo="Respawn every 1 hour"
                    img={Images.zaikan}
                    exc={false}
                    drop="Not excellent Weapons +8 ...+10"
                    weapons="Knight Blade, Dark Reign Blade, Piercing Blade Glove, Great Lord Scepter, Great Reign Crossbow, Albatross Bow, Kundun Staff, Demonic Stick, Storm Blitz Stick, Daybreak, Phoenix Soul Star, Arrow Viper Bow, Sword Dancer, Platina Staff, Shining Scepter, Raven Stick, Chrome Staff, Striker Scepter, Brova, Aileen Bow"
                    gp="60"
                />
            </div>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Death King:"
                    remark="Items for 2.5lvl Wings creation"
                    respInfo="Respawn every 6 hours"
                    img={Images.death_king}
                    dropImg1={Images.death_king_drop1}
                    ExtraDropImg1={Images.luck_assembly}
                    drop="Death King's Bone, Hell Maine's Leather, Dark Phoenix Flame, Death Beam Knight Soul"
                    extraDrop="Talisman of Chaos Assembly, Talisman of Luck +1 ... +5"
                    gp="150"
                />
            </div>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Cursed King:"
                    remark="Apears 1 Cursed King on Devias 4"
                    respInfo="Respawn every 3 hours"
                    img={Images.cursed_king}
                    drop="Excelletn Pendants and Rings 1-3 Options +0...+5"
                    dropImg1={Images.cursed_king_drop}
                    exc={true}
                    gp="150"
                />
            </div>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Red Dragon:"
                    remark="Every Dragon Invasion apears 3 Red Dragons in Lorencia or Noria or Devias"
                    respInfo="Respawn every 3 hours"
                    img={Images.red_dragon}
                    dropImg1={Images.gold_silver_box}
                    ExtraDropImg1={Images.luck_assembly}
                    drop="Gold Box, Silver Box, Gold Key, Silver Key"
                    extraDrop="Talisman of Chaos Assembly, Talisman of Luck +1 ... +5"
                    gp="150"
                />
            </div>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Great Dragon:"
                    remark="Apears 1 Great Dragon in random places on Kanturu"
                    respInfo="Respawn every 6 hour"
                    img={Images.great_dragon}
                    dropImg1={Images.flame_of_condor1}
                    drop="Flame of Condor"
                    gp="250"
                />
            </div>

        </div>
    );
}

export default MiniBosses;

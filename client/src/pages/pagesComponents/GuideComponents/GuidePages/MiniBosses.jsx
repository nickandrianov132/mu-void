import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";
import MayaContentItem from "./GuidePagesComponents/MayaContentItem";

const MiniBosses = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title="Mini Bosses Drop info:"/>
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
                />
            </div>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Red Dragon:"
                    remark="Every Dragon Invasion apears 3 Red Dragons in Lorencia"
                    respInfo="Respawn every 3 hours"
                    img={Images.red_dragon}
                    dropImg1={Images.gold_silver_box}
                    ExtraDropImg1={Images.luck_assembly}
                    drop="Gold Box, Silver Box, Gold Key, Silver Key"
                    extraDrop="Talisman of Chaos Assembly, Talisman of Luck +1 ... +5"
                />
            </div>
            <div className="maya_content_container">
                <MayaContentItem 
                    title="Death Bone:"
                    remark="Apears 10 Death Bones in random places in Lorencia"
                    respInfo="Respawn every 1 hour"
                    img={Images.death_bone}
                    dropImg1={Images.death_bone_drop1}
                    ExtraDropImg1={Images.death_bone_drop2}
                    drop="Jewel of Bless, Jewel of Soul, Jewel of Life"
                    extraDrop="Demon, Spirit of Guardian"
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
                />
            </div>
        </div>
    );
}

export default MiniBosses;

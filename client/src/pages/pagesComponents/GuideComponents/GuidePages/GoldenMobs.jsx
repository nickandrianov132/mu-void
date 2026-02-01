import Images from "../../../../assets/Images";
import GoldenMobsContetn from "./GuidePagesComponents/GoldenMobs_Contetn";
import GuideTitle from "./GuidePagesComponents/GuideTitle";


const GoldenMobs = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title="Golden Monsters info:"/>
            <GoldenMobsContetn 
                title="Golden Goblin"
                img1={Images.goblin_280x280}
                desc1="Noria"
                desc2="5 Golden Goblins"
                drop1="Box of Kundun +1"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Rabbit"
                img1={Images.rabbit_280x280}
                desc1="Elveland"
                desc2="5 Golden Rabbits"
                drop1="Box of Kundun +1"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Soldier"
                img1={Images.soldier_280x280}
                desc1="Devias"
                desc2="3 Golden Soldiers"
                drop1="Box of Kundun +1"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Titan"
                img1={Images.titan_340x340}
                desc1="Devias"
                desc2="3 Golden Titans"
                drop1="Box of Kundun +2"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Dark Knight"
                img1={Images.darkKnight_280x280}
                desc1="Dungeon"
                desc2="3 Golden Dark Knight"
                drop1="Box of Kundun +1"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Devil"
                img1={Images.devil_280x280}
                desc1="Losttower 1-7"
                desc2="3 Golden Devils"
                drop1="Box of Kundun +2"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Vepar"
                img1={Images.vepar_280x280}
                desc1="Atlans"
                desc2="3 Golden Vepars"
                drop1="Box of Kundun +2"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Lizard"
                img1={Images.lizard_340x340}
                desc1="Atlans"
                desc2="3 Golden Lizards"
                drop1="Box of Kundun +3"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Wheel"
                img1={Images.wheel_280x280}
                desc1="Tarkan"
                desc2="3 Golden Wheels"
                drop1="Box of Kundun +3"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Tantalos"
                img1={Images.tantalos_280x280}
                desc1="Tarkan"
                desc2="3 Golden Tantalos"
                drop1="Box of Kundun +4"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Golem"
                img1={Images.golem_280x280}
                desc1="Aida"
                desc2="3 Golden Golemss"
                drop1="Box of Kundun +3"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Crust"
                img1={Images.crust_280x280}
                desc1="Icarus"
                desc2="3 Golden Crusts"
                drop1="Box of Kundun +3"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Dragon"
                img1={Images.dragon}
                desc1="Lorencia, Noria, Devias"
                desc2="3 Golden Dragons"
                drop1="Box of Kundun +1,+2,+3"
                qtty1="5"
            />
            <GoldenMobsContetn 
                title="Golden Satyros"
                img1={Images.satyr_280x280}
                desc1="Kanturu"
                desc2="3 Golden Satyros"
                drop1="Box of Kundun +4"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Twin Tale"
                img1={Images.twinTale_280x280}
                desc1="Kanturu Relic"
                desc2="3 Golden Twin Tales"
                drop1="Box of Kundun +4"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Iron Knight"
                img1={Images.ironKnight_280x280}
                desc1="Lacleon"
                desc2="3 Golden Iron Knights"
                drop1="Box of Kundun +5"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Napin"
                img1={Images.napin_280x280}
                desc1="Swamp of Calmness"
                desc2="3 Golden Napins"
                drop1="Box of Kundun +5"
                qtty1="1"
            />
            <GoldenMobsContetn 
                title="Golden Great Dragon"
                img1={Images.greatDragon}
                desc1="Swamp of Calmness"
                desc2="3 Golden Great Dragons"
                drop1="Box of Kundun +4,+5"
                qtty1="5"
            />

        </div>
    );
}

export default GoldenMobs;

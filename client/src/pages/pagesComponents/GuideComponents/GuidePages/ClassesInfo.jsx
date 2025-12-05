import Images from "../../../../assets/Images";
import ClassesInfoItem from "./GuidePagesComponents/ClassesInfoItem";
import GuideTitle from "./GuidePagesComponents/GuideTitle";

const ClassesInfo = () => {
    return (
        <div className="guide_main_container">
            <GuideTitle title='All Classes info:' />
            <ClassesInfoItem 
                classTitle="Dark Wizard - Soul Master - Grand Master"
                img={Images.class_dw}
                as="30"
                asrPVM="lvl * 5 + Agility * 1.5 + Strength / 4"
                asrPVP="Agility * 4 + 3 * lvl"
                def="4"
                dsrPVM="Agility / 3"
                dsrPVP="Agility / 4 + 2 * lvl"
                magDMGmin="Energy / 8"
                magDMGmax="Energy / 3.65"
                skillImg1={Images.soul_barrier_icon}
                skillInfo1=" - maximum absorb damage is 65% for yourself and 40% for others"
                altImg1="Soul Barrier"
                />
            <ClassesInfoItem 
                classTitle="Dark Knight - Blade Knight - Blade Master"
                img={Images.class_dk}
                as="60"
                asrPVM="lvl * 5 + Agility * 1.5 + Strength / 4"
                asrPVP="Agility * 4.5 + 3 * lvl"
                def="3"
                dsrPVM="Agility / 3"
                dsrPVP="Agility / 2 + 2 * lvl"
                physDMGmin="Strenght / 7"
                physDMGmax="Strenght / 4"
                skillImg1={Images.swell_life_icon}
                skillInfo1=" - maximum increment of health is 700%"
                altImg1="Swell Life"
                />
            <ClassesInfoItem 
                classTitle="Fairy Elf - Muse Elf - High Elf"
                img={Images.class_elf}
                as="100"
                asrPVM="lvl * 5 + Agility * 1.5 + Strength / 4"
                asrPVP="Agility * 0.6 + 3 * lvl"
                def="7"
                dsrPVM="Agility / 4"
                dsrPVP="Agility / 7 + 2 * lvl"
                physDMGmin="(Agility + Strenght) / 7"
                physDMGmax="(Agility + Strenght) / 4"
                />
            <ClassesInfoItem 
                classTitle="Summoner - Bloody Summoner - Dimension Master"
                img={Images.summ}
                as="40"
                asrPVM="lvl * 5 + Agility * 1.5 + Strength / 4"
                asrPVP="Agility * 3.5 + 3 * lvl"
                def="3"
                dsrPVM="Agility / 4"
                dsrPVP="Agility / 2 + 2 * lvl"
                magDMGmin="Energy / 9.5"
                magDMGmax="Energy / 4.5 + 0.01"
                curDMGmin="Energy / 9"
                curDMGmax="Energy / 4 + 0.015"
                skillImg1={Images.bers_icon}
                skillInfo1=" - increase of Wizardy & Curse damage on 32k Energy is +520%"
                altImg1="Berserker"
                skillImg2={Images.ref_icon}
                skillInfo2=" - maximum Reflect is 35%"
                altImg2="Damage Reflection"
                skillImg3={Images.weakness_icon}
                skillInfo3=" - maximum percent of damage reduction is 55%"
                altImg3="Weakness"
                skillImg4={Images.innovation_icon}
                skillInfo4=" - maximum amplification of damage is 60%"
                altImg4="Innovation"
                />
            <ClassesInfoItem 
                classTitle="Magic Gladiator - Dual Master"
                img={Images.class_mg}
                as="40"
                asrPVM="lvl * 5 + Agility * 1.5 + Strength / 4"
                asrPVP="Agility * 3.5 + 3 * lvl"
                def="3.5"
                dsrPVM="Agility / 3"
                dsrPVP="Agility / 3.5 + 2 * lvl"
                magDMGmin="Energy / 8"
                magDMGmax="Energy / 3.65"
                physDMGmin="Strenght / 6.5 + Energy / 15 + Agility / 21"
                physDMGmax="Strenght / 3.25 + Energy / 11 + Agility / 16"
                />
            <ClassesInfoItem 
                classTitle="Dark Lord - Lord Emperor"
                img={Images.class_dl}
                as="40"
                asrPVM="lvl * 5 + Agility * 3 + Strength / 4 + Cmd / 10"
                asrPVP="Agility * 4 + 3 * lvl"
                def="7"
                dsrPVM="Agility / 7"
                dsrPVP="Agility / 2 + 2 * lvl"
                physDMGmin="Strenght / 9 + Energy / 10.25"
                physDMGmax="Strenght / 6.5 + Energy / 7.25"
                skillImg1={Images.crit_dmg_icon}
                skillInfo1=" - maximum increase of critical damage is 1200 dmg"
                altImg1="Critical Damage"
                />
            <ClassesInfoItem 
                classTitle="Rage Fighter - Fist Master"
                img={Images.rf}
                as="30"
                asrPVM="lvl * 5 + Agilitylity * 1.25 + Strength / 4"
                asrPVP="Agilitylity * 3.6 + 2.6 * lvl"
                def="6"
                dsrPVM="Agilitylity / 7"
                dsrPVP="Agilitylity / 5 + 1.5 * lvl"
                physDMGmin="Strenght / 7.4 + Vitality / 14"
                physDMGmax="Strenght / 4.65 + Vitality / 11"
                addInfo1="gives Base Damage"
                addInfo2="increase Base Damage percent %"
                skillImg1={Images.increase_health_icon}
                skillInfo1=" - increase Vitality by 200 (max value on 1000 Ene)"
                altImg1="Increase Health"
                skillImg2={Images.increase_block_icon}
                skillInfo2=" - increase Defense Success Rate by 100% (max value on 1000 Ene)"
                altImg2="Increase Block"
                skillImg3={Images.ignore_defense_icon}
                skillInfo3=" - increase Ignore chance by 10% (max value on 1000 Ene)"
                altImg3="Ignore Defense"
                skillImg4={Images.dark_side_icon}
                skillInfo4=" - Str, Agi( % skill dmg), Vit( % base dmg ), Ene( % skill dmg )"
                altImg4="Dark Side"
                skillImg5={Images.dragon_roar_icon}
                skillInfo5=" - Str, Vit( % base dmg), Ene( % skill dmg )"
                altImg5="Dragon Roar"
            />
        </div>
    );
}

export default ClassesInfo;

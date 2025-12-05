import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";
import SantaWizardEvent from "./GuidePagesComponents/SantaWizardEvent";
import SantaWizardItem from "./GuidePagesComponents/SantaWizardItem";

const WhiteWizard = () => {
    return (
        <div className="guide_main_container">
            <GuideTitle title='White Wizard Event info' />
                <SantaWizardEvent 
                timing="2"
                locationInfo="Lorencia, Noria, Devias"
                descInfo="White Wizard and his Orcs invite three locations Lorencia, Noria, Devias apears in random position and towards to City. Slave them to get good rewards!"
            >
                            <SantaWizardItem 
                title="Cursed Goblin"
                item1cheance="65%"
                desc1="Zen"
                img1={Images.white_wizard_orc}
                em1DescClass="em_zem"
                item2cheance="35%"
                desc2="Ring of White Wizard"
                em2DescClass="em_jewels"
            />
            <SantaWizardItem 
                title="Cursed Santa"
                img1={Images.white_wizard}
                em1DescClass="em_zem"
                item2cheance="40%"
                desc2="3pc Jewel of Bless, Soul, Life"
                em2DescClass="em_jewels"
                item3cheance="35%"
                desc3="4pcs Jewel of Bless, Soul, Life"
                em3DescClass="em_jewels"
                item4cheance="25%"
                desc4=" 5pcs Jewel of Bless, Soul, Life"
                em4DescClass="em_jewels"
            />
            </SantaWizardEvent>
        </div>
    );
}

export default WhiteWizard;

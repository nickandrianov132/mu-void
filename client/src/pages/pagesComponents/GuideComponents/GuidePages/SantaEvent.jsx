import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";
import SantaWizardEvent from "./GuidePagesComponents/SantaWizardEvent";
import SantaWizardItem from "./GuidePagesComponents/SantaWizardItem";

const SantaEvent = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title='Santa Event info' />
            <SantaWizardEvent 
                timing="2"
                locationInfo="Lorencia, Noria, Devias"
                image={Images.santa3}
                descInfo="When event started, Cursed Santa🎅 and his Goblins appears in appropriate locations, find and defeat them to get good prizes and save The Cristmas Willage!"
                utf_symbols="🎄⛄"
            >
                            <SantaWizardItem 
                title="Cursed Goblin"
                item1cheance="65%"
                desc1="2,000,000 zen"
                img1={Images.cursed_goblin}
                em1DescClass="em_zem"
                item2cheance="30%"
                desc2="Jewel of Bless, Soul, Life"
                em2DescClass="em_jewels"
                item3cheance="5%"
                desc3="Invitation to Santa Willage"
                em3DescClass="em_invitation"
            />
            <SantaWizardItem 
                title="Cursed Santa"
                item1cheance="10%"
                desc1="20,000,000 zen"
                img1={Images.cursed_santa}
                em1DescClass="em_zem"
                item2cheance="40%"
                desc2="1pc Jewel of Bless, Soul, Life"
                em2DescClass="em_jewels"
                item3cheance="30%"
                desc3="2pcs Jewel of Bless, Soul, Life"
                em3DescClass="em_jewels"
                item4cheance="20%"
                desc4=" 3pcs Jewel of Bless, Soul, Life"
                em4DescClass="em_jewels"
            />
            </SantaWizardEvent>
        </div>
    );
}

export default SantaEvent;

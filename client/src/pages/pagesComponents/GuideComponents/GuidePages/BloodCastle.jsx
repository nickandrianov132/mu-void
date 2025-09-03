import Images from "../../../../assets/Images";
import EventsBody from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsBody";
import EventsContainer from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsContainer";
import EventsHeader from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsHeader";

const BloodCastle = () => {
    return (
        <div className="guide_main_container">
            <EventsContainer>
                <EventsHeader title="Blood Castle Info:" />
                <EventsBody 
                    sec1desc1="Save the Archangel, One of the strongest warriors in the Continent of MU Online, help him and return Absolute Weapon of The Archangel.To do that you will need to create the Cloak of Invisibility using the Scroll of Archangel, the Blood Bone, and a chaos Jewel. Only items of the same level can be combined to create the Cloak of Invisibility for that specific Blood Castle."
                    sec1img1={Images.bc_ticket_combine}
                    sec1desc2="Then find NPC Messenger of The Archangel in Devias and Noria to enter Blood Castle:"
                    sec1img2={Images.archangel}
                    thead1={[{className: "th_base", title:"#Blood Castle"}, {className: "th_base", title:"Required Level"}, {className: "th_base", title: "Required Level MG,DL,RF"}]}
                    tbody1={[
                            {num: "1", regularLvL: "15~80", mgdlrfLvl: "10-60"},
                            {num: "2", regularLvL: "81~130", mgdlrfLvl: "61-110"},
                            {num: "3", regularLvL: "131~180", mgdlrfLvl: "111-160"},
                            {num: "4", regularLvL: "181~230", mgdlrfLvl: "161-210"},
                            {num: "5", regularLvL: "231~280", mgdlrfLvl: "211-250"},
                            {num: "6", regularLvL: "281~330", mgdlrfLvl: "251-310"},
                            {num: "7", regularLvL: "331~400", mgdlrfLvl: "311-400"},
                            {num: "8", regularLvL: "15-400", mgdlrfLvl: "10-400"},
                           ]}
                    sec3desc1="When 1 minute remain you can bring Absolute Weapon of The Archangel to Archangel and get reward for you and all your party members:"
                    thead2={[{className: "th_gold" ,title:"#Blood Castle:"}, {className: "th_gold", title:"Final Reward:"}, {className: "th_gold", title: "Cheance of rewards:"}]}
                    tbody2={[
                            {className: "td_bc", num: "1", monster1:"Jewel of Bless, Soul, Life / 10 Bundle Jewels / Talisman of Luck", monster2: "80% / 10% / 10%"},
                            {className: "td_bc", num: "2", monster1:"Jewel of Bless, Soul, Life / 10 Bundle Jewels / Talisman of Luck", monster2: "80% / 10% / 10%"},
                            {className: "td_bc", num: "3", monster1:"Jewel of Bless, Soul, Life / 10 Bundle Jewels / Talisman of Luck", monster2: "75% / 15% / 10%"},
                            {className: "td_bc", num: "4", monster1:"Jewel of Bless, Soul, Life / 10 Bundle Jewels / Talisman of Luck", monster2: "70% / 20% / 10%"},
                            {className: "td_bc", num: "5", monster1:"Jewel of Bless, Soul, Life / 10 Bundle Jewels / Talisman of Luck", monster2: "60% / 30% / 10%"},
                            {className: "td_bc", num: "6", monster1:"Jewel of Bless, Soul, Life / 10 Bundle Jewels / Talisman of Luck", monster2: "50% / 40% / 10%"},
                            {className: "td_bc", num: "7", monster1:"Jewel of Bless, Soul, Life / 10 Bundle Jewels / Talisman of Luck", monster2: "70% / 30% / 10%"},
                            {className: "td_bc", num: "8", monster1:"10 Bundle Jewels Bless, Soul, Life / Talisman of Luck", monster2: "70% / 30%"},
                           ]}
                />
            </EventsContainer>
        </div>
    );
}

export default BloodCastle;

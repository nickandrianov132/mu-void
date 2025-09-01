import Images from "../../../../assets/Images";
import EventsBody from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsBody";
import EventsContainer from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsContainer";
import EventsHeader from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsHeader";

const DevilSquare = () => {
    return (
        <div className="guide_main_container">
            <EventsContainer>
                <EventsHeader title="Devil Square Info:" />
                <EventsBody 
                    sec1desc1="Only 10 characters are allowed into the Devils Square at one time, and they need the correct level of Devils Invitation to go inside. The Devils Invitation is made from combining the Devils Eye and the Devils Key with a chaos jewel in the Chaos Machine."
                    sec1img1={Images.ds_ticket_combine}
                    sec2desc1="The warp command can be used after entering Devil Square. Other players are not allowed to enter after the 10 slots have been filled. When the character gets killed in Devil Square he will be warped back to Noria. PK is not possible in Devil Square."
                    sec1desc2="To enter in Devil Square click on the Charon in Noria:"
                    sec1img2={Images.ds_charon}
                    thead1={[{className: "th_base", title:"#Devil Square:"}, {className: "th_base", title:"Required Level"}, {className: "th_base", title: "Required Level MG,DL,RF"}]}
                    tbody1={[
                            {num: "1", regularLvL: "15~80", mgdlrfLvl: "15-60"},
                            {num: "2", regularLvL: "81~130", mgdlrfLvl: "61-110"},
                            {num: "3", regularLvL: "131~180", mgdlrfLvl: "111-160"},
                            {num: "4", regularLvL: "181~230", mgdlrfLvl: "161-210"},
                            {num: "5", regularLvL: "231~280", mgdlrfLvl: "211-250"},
                            {num: "6", regularLvL: "281~330", mgdlrfLvl: "251-310"},
                            {num: "7", regularLvL: "15-400", mgdlrfLvl: "15-400"},
                           ]}
                    sec3desc1="There are Golden Monsters in each Devil Square appears at the 10 and 15 minutes after Devil Square start:"
                    thead2={[{className: "th_gold" ,title:"#Devil Square:"}, {className: "th_gold", title:"1st Golden Monster 1:"}, {className: "th_gold", title: "2nd Golden Monster:"}]}
                    tbody2={[
                            {className: "td_gold", num: "1", monster1:"Golden Soldier", monster2: "Golden Titan"},
                            {className: "td_gold", num: "2", monster1:"Golden Vepar", monster2: "Golden Lizard King"},
                            {className: "td_gold", num: "3", monster1:"Golden Devil", monster2: "Golden Iron Wheel"},
                            {className: "td_gold", num: "4", monster1:"Golden Golem", monster2: "Golden Tantolos"},
                            {className: "td_gold", num: "5", monster1:"Golden Crust", monster2: "Golden Satyrus"},
                            {className: "td_gold", num: "6", monster1:"Golden Napin", monster2: "Golden Iron Knight"},
                            {className: "td_gold", num: "7", monster1:"Golden Napin", monster2: "Golden Iron Knight"},
                           ]}
                    sec4desc1="Upon completion of the Devil Square four players will got Zen reward according to experience they got during Devil Square"
                    thead3={[
                            {className: "th_base", title: "#Devil Square:"},
                            {className: "th_base", title: "1st Place:"},
                            {className: "th_base", title: "2nd Place:"},
                            {className: "th_base", title: "3rd Place:"},
                            {className: "th_base", title: "4th Place:"}
                            ]}
                    tbody3={[
                            {className: "td_zen", num: "1", first: "4,000,000", second: "3,000,000", third: "2,000,000", fourth: "1,000,000"},
                            {className: "td_zen", num: "2", first: "5,000,000", second: "4,000,000", third: "3,000,000", fourth: "2,000,000"},
                            {className: "td_zen", num: "3", first: "6,000,000", second: "5,000,000", third: "4,000,000", fourth: "3,000,000"},
                            {className: "td_zen", num: "4", first: "7,000,000", second: "6,000,000", third: "5,000,000", fourth: "4,000,000"},
                            {className: "td_zen", num: "5", first: "8,000,000", second: "7,000,000", third: "6,000,000", fourth: "5,000,000"},
                            {className: "td_zen", num: "6", first: "10,000,000", second: "9,000,000", third: "8,000,000", fourth: "7,000,000"},
                            {className: "td_zen", num: "7", first: "15,000,000", second: "13,000,000", third: "12,000,000", fourth: "11,000,000"},
                            ]}

                />
            </EventsContainer>
        </div>
    );
}

export default DevilSquare;

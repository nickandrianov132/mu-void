import Images from "../../../../assets/Images";
import EventsBody from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsBody";
import EventsContainer from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsContainer";
import EventsHeader from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsHeader";

const ChaosCastle = () => {
    return (
        <div className="guide_main_container">
            <EventsContainer>
                <EventsHeader 
                    title="Chaos Castle Info:"
                />
                <EventsBody 
                    sec1desc1="Chaos Castle is a PvP event where you fighting in a shrinking arena for supremacy and prizes, requiring an Armor of Guardsman to enter. Participants are assigned to floors based on their strength and equipped items, not just character level. The goal is to be the last survivor or to accumulate the most points if time runs out, with rewards including valuable items like Ancient items and Jewels. Obtain Armor of Guardsman: Purchase this item from an NPC in a main city like Noria or Lorencia:"
                    sec1img1={Images.cc_vendors}
                    sec1desc2="Buy & Right-click on the Armor of Guardsman to be transported to the Chaos Castle event:"
                    sec1img2={Images.cc_ticket}
                    thead1={[{className: "th_base", title:"#Chaos Castle:"}, {className: "th_base", title:"Required Level"}, {className: "th_base", title: "Required Level MG,DL,RF"}]}
                    tbody1={[
                            {num: "1", regularLvL: "15~49", mgdlrfLvl: "15-29"},
                            {num: "2", regularLvL: "50~119", mgdlrfLvl: "30-99"},
                            {num: "3", regularLvL: "120~179", mgdlrfLvl: "100-159"},
                            {num: "4", regularLvL: "180~239", mgdlrfLvl: "160-219"},
                            {num: "5", regularLvL: "240~299", mgdlrfLvl: "220-279"},
                            {num: "6", regularLvL: "300~400", mgdlrfLvl: "280-400"},
                            {num: "7", regularLvL: "15-400", mgdlrfLvl: "15-400"},
                           ]}
                    sec3desc1="Upon completion last one who survive in Chaos Castle will get:"
                    thead2={[{className: "th_gold" ,title:"#Chaos Castle:"}, {className: "th_gold", title:"Final Reward:"}, {className: "th_gold", title: "Cheance of rewards:"}]}
                    tbody2={[
                            {className: "td_cc", num: "1-7", monster1:"Ancient Item / Talisman of Chaos Assembly", monster2: "80% / 20%"},
                           ]}
                />
            </EventsContainer>
        </div>
    );
}

export default ChaosCastle;

import Images from "../../../assets/Images";
import EventsBody from "./GuidePages/GuidePagesComponents/EventsBCDSCCcomponents/EventsBody";
import EventsContainer from "./GuidePages/GuidePagesComponents/EventsBCDSCCcomponents/EventsContainer";
import EventsHeader from "./GuidePages/GuidePagesComponents/EventsBCDSCCcomponents/EventsHeader";

const LorenDeep = () => {
    return (
        <div className='guide_main_container'>
            <EventsContainer>
                <EventsHeader title="Loren Deep Event Info:" />
                <div className="small_event_body">
                    <p className="small_event_p">Loren Deep attack is the event happening every day at 18:00 server time in the LorenDeep map. There is an assault of monsters where players could get increased exp and valuables such as  <em className="em_zen">Crest of Monarch</em> and <em className="em_zen">Loch’s Feather</em>🪶.</p>
                    <img src={Images.crest_feather1} className="small_event_img_small"/>
                    <p className="small_event_p">When event begins on Loren Deep location apears a lot of monsters for 60 minutes from 18:00 to 19:00 and from 23:00 to 00:00 server time:</p>
                    <div className="small_event_imgs_wrapper">
                        <img src={Images.loren1} className="small_event_img_big"/>
                        <img src={Images.loren2} className="small_event_img_big"/>
                    </div>
                </div>
                {/* <EventsBody 
                    sec1desc1="Every day at 18:00 Server Time start Loren Deep event where you can gain good exp killing monsters and with some cheance % get Crest of Monarch  or  Loch`s Feather 🪶."
                    sec1img1={Images.crest_feather1}
                    sec1desc2="Monsters apears on location of Loren Deep for 60 minutes from 18:00 to 19:00:"
                    sec1img2={Images.loren1}
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
                /> */}
            </EventsContainer>
        </div>
    );
}

export default LorenDeep;

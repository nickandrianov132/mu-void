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
                        <p className="small_event_p">During the event, strong Hero monsters appear <em className="em_zen">Hero Mutant, Axl Hero, Omega Wing, Golem</em></p>
                    <div className="small_event_imgs_wrapper">
                        <img src={Images.lorendeep_hero_mobs1} className="small_event_img_big"/>
                        <img src={Images.lorendeep_hero_mobs2} className="small_event_img_big"/>
                    </div>
                    <div className="small_event_imgs_wrapper">
                        <img src={Images.lorendeep_hero_mobs3} className="small_event_img_big"/>
                        <img src={Images.lorendeep_hero_mobs4} className="small_event_img_big"/>
                    </div>
                </div>
                <EventsBody 
                    sec3desc1="After killing hero mobs you will get Jewel of Bless and next items:"
                    thead2={[{className: "th_gold" ,title:"#Hero Mob:"}, {className: "th_gold", title:"Reward items:"}, {className: "th_gold", title: "Cheance of rewards:"}]}
                    tbody2={[
                            {className: "td_cc", num: "Hero Mutant", monster1:"Silver Key / Silver Box / Zen ", monster2: "15%/15%/70%"},
                            {className: "td_cc", num: "Axl Hero", monster1:"Silver Key / Silver Box / Zen ", monster2: "15%/15%/70%"},
                            {className: "td_cc", num: "Omega Wing", monster1:"Silver Key / Silver Box / Zen ", monster2: "20%/20%/60%"},
                            {className: "td_cc", num: "Golem", monster1:"Silver Key / Silver Box / Zen ", monster2: "20%/20%/60%"},
                           ]}
                />
            </EventsContainer>
        </div>
    );
}

export default LorenDeep;

import Images from "../../../../assets/Images";
import EventsContainer from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsContainer";
import EventsHeader from "./GuidePagesComponents/EventsBCDSCCcomponents/EventsHeader";

const MossGambler = () => {
    return (
        <div className="guide_main_container">
            <EventsContainer>
                <EventsHeader title="Moss Gambler Info:" />
                <div className="small_event_body">
                    <p className="small_event_p">Moss Gambler is NPC in the Elblend from whom you might get valuable weapons up to powerful super prize weapon. Weapons vary from non excellent plane weapon to excellent weapon up to 3 excellent options. The price of each try to gamble is <em className="em_zen">5 000 000 zen</em>.</p>
                    <h4>Super Prize Weapons:</h4>
                    <div className="small_event_imgs_wrapper_small">
                        <img src={Images.brova} className="small_event_img_small1"/>
                        <img src={Images.chromatic} className="small_event_img_small1"/>
                        <img src={Images.rave_stick} className="small_event_img_small1"/>
                        <img src={Images.aileen_bow} className="small_event_img_small1"/>
                        <img src={Images.striker_scepter} className="small_event_img_small1"/>
                        <img src={Images.phoenix_soul_star} className="small_event_img_small1"/>
                    </div>
                    <p className="small_event_p"><em>Rage Fighter Weapons are in Dark Lord Option!</em></p>
                    <p className="small_event_p">You can find Moss Gambler NPC in Elveland coord 20x225:</p>
                    <div className="small_event_imgs_wrapper">
                        <img src={Images.gambler1} className="small_event_img_big"/>
                        <img src={Images.gambler2} className="small_event_img_big"/>
                    </div>
                </div>
            </EventsContainer>
        </div>
    );
}

export default MossGambler;

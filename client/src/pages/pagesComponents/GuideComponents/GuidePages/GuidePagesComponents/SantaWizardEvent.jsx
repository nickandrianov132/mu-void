import Images from "../../../../../assets/Images";
import SantaWizardItem from "./SantaWizardItem";

const SantaWizardEvent = ({timing, locationInfo, image, descInfo, utf_symbols, children}) => {
    return (
        <div className="santa_wizard_container">
            <div className="event_description_wrapper">
                <div className="desc_div">
                    <div className="timing_div">⏳Timing: <em>every {timing} hours.</em></div>
                    <div className="location_div">🔎Location: <em>{locationInfo}</em></div>
                    <div className="img_wrapper">
                        {/* <img src={Images.santa1_780x480}/> */}
                        <img src={image}/>
                    </div>

                </div>
                <div className="event_info"><p>🔸 {descInfo}<b>{utf_symbols}</b></p></div>
            </div>
            <>
                {children}
            </>
        </div>
    );
}

export default SantaWizardEvent;

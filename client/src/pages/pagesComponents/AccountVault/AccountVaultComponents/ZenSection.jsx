import { pretyZen } from "../../../../utils/functions";

const ZenSection = ({ zen, success }) => {

    return (
        <div className="vault_zen_container">
            <span className="zen_title">🔸Zen:</span>
            {success 
                ?
                <span className="zen_value">{pretyZen(Number(zen))}</span>
                :
                <span className="zen_value">0</span>
            }
        </div>
    );
}

export default ZenSection;

import { GiBouncingSword, GiCrackedShield, GiGlassHeart, GiPotionBall } from "react-icons/gi";
import { getExcOptShort } from "../../../utils/muItemsFunctions";
import { excOptIconWings3, getOptions } from "./ExcOptIcons";

const MarketItemDesc = ({ itemInfo, itemData }) => {
    // console.log(itemInfo);

    return (
        <div className="market_item_decription_container">
            {itemInfo.excOptions &&
                <div className="item_exc_opt_wrapper">
                    {/* {itemInfo.excOptions?.map((opt) => 
                        <span
                            key={opt} 
                            className="exc_opt_span">{opt}</span>
                    )} */}
                    {/* {itemData.isExc &&
                        getExcOptShort(itemData.cat, itemData.id, itemData.exc)?.map((opt) => 
                            <span key={opt} className="exc_opt_span">{opt}</span>
                        )
                    } */}
                    {/* {itemData.isExc &&
                        excOptIconWings3(itemData.exc)
                    } */}
                    {itemData.isExc &&
                        getOptions(itemData.cat, itemData.id, itemData.exc)?.map((icon) => (
                            (icon)
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default MarketItemDesc;

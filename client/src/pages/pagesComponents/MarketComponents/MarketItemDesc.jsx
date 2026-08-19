import { getExcOptShort } from "../../../utils/muItemsFunctions";

const MarketItemDesc = ({ itemInfo, itemData }) => {
    return (
        <div className="market_item_decription_container">
            {itemInfo.excOptions &&
                <div className="item_exc_opt_wrapper">
                    {/* {itemInfo.excOptions?.map((opt) => 
                        <span
                            key={opt} 
                            className="exc_opt_span">{opt}</span>
                    )} */}
                    {itemData.isExc &&
                        getExcOptShort(itemData.cat, itemData.id, itemData.exc)?.map((opt) => 
                            <span key={opt} className="exc_opt_span">{opt}</span>
                        )
                    }
                </div>
            }
        </div>
    );
}

export default MarketItemDesc;

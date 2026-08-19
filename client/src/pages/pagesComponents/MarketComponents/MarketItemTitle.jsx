import { getItemName, getItemTitleColor, isCapeDL } from "../../../utils/muItemsFunctions";

const MarketItemTitle = ({ info, itemInfo }) => {
    // console.log(info);
    return (
         <h4 
            className="market_item_title"
            style={{color: getItemTitleColor(info.cat, info.id, info.level, info.isExc, info.isAncient), backgroundColor: info.isAncient ? "#3240ff" : "transparent"}}
            >{info.isExc && info.cat !== 12 && !isCapeDL(info.cat, info.id)  ? "Exc. " : ""}{info.isAncient ? itemInfo.ancOptions.name : ""} {getItemName(info.cat, info.id, info.level)} {info.level > 0 && `+${info.level}`}
        </h4>
    );
}

export default MarketItemTitle;

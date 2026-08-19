import { useDispatch, useSelector } from "react-redux";
import { getItemDetails, getItemName  } from "../../../utils/muItemsFunctions";
import MarketItemDesc from "./MarketItemDesc";
import MarketItemImage from "./MarketItemImage";
import MarketItemPrice from "./MarketItemPrice";
import MarketItemTitle from "./MarketItemTitle";
import { useFetchBuyMarketItemMutation, useGetBackMarketItemMutation } from "../../../services/userApi";
import { useEffect } from "react";
import { updateError } from "../../../store/slices/vaultErrorSlice";
import { updateSuccess } from "../../../store/slices/vaultSuccessSlice";


const MarketItemCard = ({ info, item }) => {
    const accInfo = useSelector(state => state.userInfo);
    const {isError} = useSelector(state => state.vaultError);
    const {isSuccess} = useSelector(state => state.vaultSuccess);
    const [ fetchGetBackItem, {isError: isGetBackError, isSuccess: isGetBackSuccess, error, data} ] = useGetBackMarketItemMutation();
    const [ fetchBuyItem, {isError: isBuyItemError, isSuccess: isBuyItemSuccess, error: buyItemError, data: buyMarketData}] = useFetchBuyMarketItemMutation();
    const itemInfo = getItemDetails(info.cat, info.id, info.level, info.isExc, info.exc, info.isAncient, info.ancGroup, info.hasHarmony, info.harmonyLevel, info.harmonyType, info.harmonyTypeGroup, info.is380Opt);
    const dispatch = useDispatch();
    // console.log(accInfo);
    // console.log(itemInfo);
    
    console.log(`vaultError: ${isError}`);
    // console.log(`vaultSuccess: ${isSuccess}`);
    // console.log(errorState);
    // console.log(Number(item.PriceZen));
    useEffect(() =>{
        if (isGetBackError) {
            dispatch(updateError({isError: true, message: error.data.message}))
            // console.log(error.data.message);
        }
    }, [isGetBackError])
    useEffect(() =>{
        if (isGetBackSuccess) {
            dispatch(updateSuccess({isSuccess: true, message: data.message}))
            // console.log(error.data.message);
        }
    }, [isGetBackSuccess])
    useEffect(() =>{
        if (isBuyItemError) {
            dispatch(updateError({isError: true, message: buyItemError.data.message}))
            // console.log(error.data.message);
        }
    }, [isBuyItemError])
    useEffect(() =>{
        if (isBuyItemSuccess) {
            dispatch(updateSuccess({isSuccess: true, message: buyMarketData.message}))
            // console.log(error.data.message);
        }
    }, [isBuyItemSuccess])
    // console.log(item);
    function defineShortCurr() {
        let curr = {
            zen: false,
            wCoins: false,
            gPoints: false
        }
        let errorString = ''
        if(accInfo.zen < Number(item.PriceZen)){
            // console.log(item.PriceZen);
            curr = {...curr, zen: true}
        }
        if(accInfo.wCoins < Number(item.PriceWCoin)){
            curr = {...curr, wCoins: true}
        }
        if(accInfo.gPoints < Number(item.PriceGP)){
            curr = {...curr, gPoints: true}
        }
        errorString = `Not enough: ${curr.zen ? "Zen" : ""} ${curr.wCoins ? "WCoins" : ""} ${curr.gPoints ? "GoblinPoints" : ""}!`
        return errorString
    }
    function checkUserBuyError() {
        if(accInfo.zen >= Number(item.PriceZen) & accInfo.wCoins >= Number(item.PriceWCoin) & accInfo.gPoints >= Number(item.PriceGP)) {
            // console.log(`${getItemName(info.cat, info.id, info.level)}: true`);
            console.log(item.PriceZen);
            return false
        } else {
            // console.log(`${getItemName(info.cat, info.id, info.level)}: false`);
            return true
        }
    }
    function buyItemHandler() {
        if (checkUserBuyError()) {
            dispatch(updateError({isError: true, message: defineShortCurr()}))
            return
        }
        fetchBuyItem(item.marketId)
    }

    function takeItemHandler() {
        fetchGetBackItem(item.marketId)
    }
    return (
        <div 
            key={info.serial} 
            className="market_item_container"
            data-tooltip-id="main-tooltip"
            data-tooltip-content={JSON.stringify(info)}
        >
            <MarketItemTitle info={info} itemInfo={itemInfo} />
            <MarketItemImage item={info} />
            <MarketItemDesc itemInfo={itemInfo} itemData={info}/>
            <MarketItemPrice priceWC={item.PriceWCoin} priceGP={item.PriceGP} priceZen={item.PriceZen}/>
            {item.seller === accInfo.accName &&
                <div className="market_card_btn_wrapper">
                    <button 
                        className="market_card_btn"
                        disabled={isError || isSuccess}
                        onClick={takeItemHandler}
                        >Take</button>
                </div>
            }
            {item.seller !== accInfo.accName &&
                <div className="market_card_btn_wrapper">
                    <button 
                        disabled={isError || isSuccess}
                        className="market_card_btn"
                        onClick={buyItemHandler}
                    >Buy</button>
                </div>
            }
        </div>

    );
}

export default MarketItemCard;

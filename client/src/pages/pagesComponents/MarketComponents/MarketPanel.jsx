import { useDispatch, useSelector } from "react-redux";
import { GiArmoredPants, GiArrowhead, GiBarbute, GiBattleAxe, GiBigDiamondRing, GiBoltShield, GiBreastplate, GiBroadsword, GiCrystalWand, GiCutDiamond, GiDigDug, GiFlangedMace, GiGauntlet, GiGemPendant, GiHeavyArrow, GiLegArmor, GiLibertyWing, GiMailedFist, GiOpenTreasureChest, GiSwapBag, GiTiedScroll } from "react-icons/gi";
import { updateMarketQuery } from "../../../store/slices/marketQuerySlice";

const MarketPanel = () => {
    const { catId: searchCategory } = useSelector(state => state.marketQuery)
    const dispatch = useDispatch();
    console.log(searchCategory);
    return (
            <div className="market_nav_panel">  
                <GiBroadsword
                    className={searchCategory === 18 ? "search_item active" : "search_item"}
                    onClick={() => dispatch(updateMarketQuery({catId: 18, page: 1}))}
                />
                <GiCrystalWand
                    className={searchCategory === 5 ? "search_item active" : "search_item"}
                    onClick={() => dispatch(updateMarketQuery({catId: 5, page: 1}))}
                />
                <GiHeavyArrow
                    className={searchCategory === 4 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 4, page: 1}))}
                />
                <GiFlangedMace
                    className={searchCategory === 2 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 2, page: 1}))}
                    
                />
                <GiArrowhead
                    className={searchCategory === 3 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 3, page: 1}))}
                />
                <GiBattleAxe
                    className={searchCategory === 1 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 1, page: 1}))}
                />
                <GiBarbute
                    className={searchCategory === 7 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 7, page: 1}))}
                />
                <GiBreastplate
                    className={searchCategory === 8 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 8, page: 1}))}
                />
                <GiArmoredPants
                className={searchCategory === 9 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 9, page: 1}))}
                />
                <GiLegArmor
                    className={searchCategory === 11 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 11, page: 1}))}
                />

                <GiGauntlet
                    className={searchCategory === 10 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 10, page: 1}))}
                />
                <GiBoltShield
                    className={searchCategory === 6 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 6, page: 1}))}
                />
                <GiBigDiamondRing
                    className={searchCategory === 13 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 13, page: 1}))}
                />
                <GiGemPendant
                    className={searchCategory === 14 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 14, page: 1}))}
                />
                <GiLibertyWing
                    className={searchCategory === 12 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 12, page: 1}))}
                />
                <GiCutDiamond
                    className={searchCategory === 16 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 16, page: 1}))}
                />
                <GiTiedScroll
                    className={searchCategory === 15 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 15, page: 1}))}
                />
                <GiSwapBag
                    className={searchCategory === 17 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 17, page: 1}))}
                />
                <GiOpenTreasureChest
                    className={searchCategory === null ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: null, page: 1}))}
                />
                {/* <GiMailedFist 
                    onClick={() => dispatch(updateMarketQuery({catId: 10}))}
                /> */}
                {/* <GiDigDug
                    onClick={() => dispatch(updateMarketQuery({catId: 17}))}
                /> */}

            </div>
    );
}

export default MarketPanel;

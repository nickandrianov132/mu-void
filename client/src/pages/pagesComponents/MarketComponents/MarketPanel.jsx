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
                    onClick={() => dispatch(updateMarketQuery({catId: 18}))}
                />
                <GiCrystalWand
                    className={searchCategory === 5 ? "search_item active" : "search_item"}
                    onClick={() => dispatch(updateMarketQuery({catId: 5}))}
                />
                <GiHeavyArrow
                    className={searchCategory === 4 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 4}))}
                />
                <GiFlangedMace
                    className={searchCategory === 2 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 2}))}
                    
                />
                <GiArrowhead
                    className={searchCategory === 3 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 3}))}
                />
                <GiBattleAxe
                    className={searchCategory === 1 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 1}))}
                />
                <GiBarbute
                    className={searchCategory === 7 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 7}))}
                />
                <GiBreastplate
                    className={searchCategory === 8 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 8}))}
                />
                <GiArmoredPants
                className={searchCategory === 9 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 9}))}
                />
                <GiLegArmor
                    className={searchCategory === 11 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 11}))}
                />

                <GiGauntlet
                    className={searchCategory === 10 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 10}))}
                />
                <GiBoltShield
                    className={searchCategory === 6 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 6}))}
                />
                <GiBigDiamondRing
                    className={searchCategory === 13 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 13}))}
                />
                <GiGemPendant
                    className={searchCategory === 14 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 14}))}
                />
                <GiLibertyWing
                    className={searchCategory === 12 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 12}))}
                />
                <GiCutDiamond
                    className={searchCategory === 16 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 16}))}
                />
                <GiTiedScroll
                    className={searchCategory === 15 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 15}))}
                />
                <GiSwapBag
                    className={searchCategory === 17 ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: 17}))}
                />
                <GiOpenTreasureChest
                    className={searchCategory === null ? "search_item active" : "search_item"} 
                    onClick={() => dispatch(updateMarketQuery({catId: null}))}
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

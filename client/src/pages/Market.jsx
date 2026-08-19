import { Tooltip } from "react-tooltip";
import { useFetchAccountInfoQuery, useFetchMarketItemsQuery } from "../services/userApi";
import MarketItemCard from "./pagesComponents/MarketComponents/MarketItemCard";
import { getItemDetails, getItemName, getItemTitleColor, isArmor, isCapeDL, isMagicWeapon, isWeapon } from "../utils/muItemsFunctions";
import { useEffect, useState } from "react";
import PageButton from "./pagesComponents/MarketComponents/PageButton";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { HOME_ROUTE } from "../utils/constants";
import MarketPopUp from "./pagesComponents/MarketComponents/MarketPopUp";
import { updateUserInfo } from "../store/slices/userInfoSlice";
import MarketPanel from "./pagesComponents/MarketComponents/MarketPanel";


const Market = () => {
    const {data: userInfo, isSuccess: isUserSuccess, isError: isUserError, isLoading: isUserLoading} = useFetchAccountInfoQuery()
    const {accessToken} = useSelector(state => state.user);
    const accInfo = useSelector(state => state.userInfo);
    const marketQueryInfo = useSelector(state => state.marketQuery)
    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState(20);
    const [searchCategory, setSearchCategory] = useState();
    const [searchUser, setSearchUser] = useState();
    const [pages, setPages] = useState([])
    // const {data: marketData, isError, isSuccess} = useFetchMarketItemsQuery([page, categoryId],{refetchOnMountOrArgChange: true});
    // const {data: marketData, isError, isSuccess} = useFetchMarketItemsQuery({page: page, catId: searchCategory, search: searchUser},{refetchOnMountOrArgChange: true});
    const {data: marketData, isError, isSuccess} = useFetchMarketItemsQuery(marketQueryInfo,{refetchOnMountOrArgChange: true});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let range = [];
    let totalPages = 1;
    let currentPage = 1;
    let boundary = 1;

    console.log(marketData);
    console.log(userInfo);
    console.log(marketQueryInfo);
    useEffect(() => {
        if (isSuccess && userInfo) {
            dispatch(updateUserInfo({accName: userInfo.accName, wCoins: userInfo.wCoinsC, gPoints: userInfo.goblinPoints, zen: Number(userInfo.accZen)}))
            // console.log(`userInfo was updated! ${userInfo.accName}`);
        }
    },[isSuccess])
    useEffect(() => {
        if(!accessToken) {
            navigate(HOME_ROUTE)
        }
    }, [accessToken]);

    useEffect(() => {
        if(isSuccess && accessToken) {
            try {
                
            currentPage = marketData.meta.currentPage;
            totalPages = marketData.meta.totalPages;

            for(let i = 1; i<= totalPages; i++) {
                if(i=== 1 || i === totalPages || (i >= currentPage - boundary && i <= currentPage + boundary)) {
                    range.push(i);
                } else if(range[range.length - 1] !== '...') {
                    range.push('...');
                }
            }
            setPages(range)
            // if(currentPage <= 3) {
            //     let pArr = []
            //     for (let i = currentPage; i <= currentPage + 5; i++) {
            //         pArr.push(i)
            //         // setPages((pArr) => [...pArr, i])
            //     }
            //     setPages(() => [...pArr, totalPages])
            // }
            // if(currentPage > 3 && currentPage < totalPages) {
            //     console.log(pages);
            //     let pArr = [];
            //     for (let i = currentPage - 1; i < totalPages; i++) {
            //         pArr.push(i)
            //     }

            //     setPages(() => [...pArr, totalPages])

            // }
            } catch (error) {
                console.log(error);
            }
        }
    }, [isSuccess, marketData])

    // useEffect(() => {
    //     dispatch(updateMarketQuery({catId: categoryId}))
    // }, [categoryId])


    return (
        <div className="market_container">
            <MarketPanel />
            {isSuccess && marketData.items?.length > 0 ?
                <div className="market_items_grid_wrapper">
                    {marketData.items?.map((item) => 
                        <MarketItemCard
                            key={item.ItemSerial}  
                            info={item.itemData}
                            item={item}
                            
                        />
                    )}
                    <MarketPopUp />
                </div>
                :
                <div className="items_not_found">Items not found...</div>
            }
            <div className="pages_btns_container">
                {isSuccess && 
                    pages.map((p, i) =>
                        <PageButton key={i} page={p} isActive={p === marketQueryInfo.page} />
                        // <PageButton key={i} page={p} isActive={p === page} setPage={setPage}/>
                    )
                }
            </div>
            <Tooltip 
                id="main-tooltip"
                className="mu_tooltip_container"
                render={({ content }) => {
                            if (!content) return null
                                const info = JSON.parse(content);
                                const itemInfo = getItemDetails(info.cat, info.id, info.level, info.isExc, info.exc, info.isAncient, info.ancGroup, info.hasHarmony, info.harmonyLevel, info.harmonyType, info.harmonyTypeGroup, info.is380Opt)
                                    // console.log(itemInfo);
                                    return (
                                        <div className="item_info_container" >
                                            
                                            <h5 
                                                className="item_header" 
                                                style={{color: getItemTitleColor(info.cat, info.id, info.level, info.isExc, info.isAncient), backgroundColor: info.isAncient ? "#3240ff" : "transparent", fontSize: "1.12em"}}
                                            >
                                                {info.isExc && info.cat !== 12 && !isCapeDL(info.cat, info.id)  ? "Excellent " : ""}{info.isAncient ? itemInfo.ancOptions.name : ""} {getItemName(info.cat, info.id, info.level)} {info.level > 0 && `+${info.level}`}
                                            </h5>
                                            {isArmor(info.cat) &&
                                                <p>Armor: {itemInfo.defense}</p>
                                            }
                                            {itemInfo.wingDef && 
                                                <p>Defense {itemInfo.wingDef}</p>
                                            }
                                            {itemInfo.dmgInc && 
                                                <p>Increase of damage by {itemInfo.dmgInc}%</p>
                                            }
                                            {itemInfo.dmgAbsorb &&
                                                <p>Absorb of {itemInfo.dmgAbsorb}% damage</p>
                                            }
                                            {isWeapon(info.cat) &&
                                            <p>
                                                {itemInfo.isTwoHanded 
                                                ? 
                                                `Two-handed attack power: ${itemInfo.damage.min} - ${itemInfo.damage.max}` 
                                                : 
                                                `One-handed attack power: ${itemInfo.damage.min} - ${itemInfo.damage.max}`
                                                }
                                            </p>
                                            }
                                            {isMagicWeapon(info.cat, info.id) && 
                                                <p>Increases wizardy by {itemInfo.rise}%</p>
                                            }
                                            {isWeapon(info.cat) &&
                                                <p>Attack speed: {itemInfo.attackSpeed}</p> 
                                            }
                                            <p>Required level: {itemInfo.reqLevel}</p>
                                            {info.skill && isWeapon(info.cat) && 
                                                <p className='skill_luck_add_p'>Skill</p>
                                            }
                                            {info.is380Opt &&
                                                <div className='pvp380_opt_wrapper'>
                                                    {itemInfo.pvp380Opt?.map((opt) =>
                                                        <p key={opt} className='pvp380_opt_p'>{opt}</p>
                                                    )}
                                                </div>
                                            }
                                            {info.hasHarmony &&
                                                <p className='harmony_opt_p'>{itemInfo.harmonyOpt}</p>
                                            }
                                            {info.luck && 
                                                <>
                                                    <p className='skill_luck_add_p'>Luck (success rate of Jewel of Soul +25%)</p>
                                                    <p className='skill_luck_add_p'>Luck (critical damage rete +5%)</p>
                                                </>
                                            }
                                            {itemInfo.excOptions && 
                                                <div className='exc_opt_wrapper'> 
                                                    {itemInfo.excOptions?.map((opt, i) => 
                                                        <p key={i} className='skill_luck_add_p'>{opt}</p>
                                                    )
                                                }
                                                </div>
                                            }
                                            <p className='skill_luck_add_p'>{info.addOpt}</p>
                                            {itemInfo.ancOptions &&
                                                itemInfo.ancOptions.full.map((opt) => 
                                                    <p key={opt} className='anc_opt_p_grey'>{opt}</p>
                                                )
                                            }
                                        </div>
                                    )
                                }}
                
                            >
                                
                            </Tooltip> 

        </div>
    );
}

export default Market;

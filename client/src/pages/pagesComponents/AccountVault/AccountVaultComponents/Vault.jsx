import { useNavigate } from "react-router";
import Images from "../../../../assets/Images";
import { useFetchAccountVaultQuery } from "../../../../services/userApi";
import { HOME_ROUTE } from "../../../../utils/constants";
import { getItemDetails, getItemIconPath, getItemName, getItemSize, getItemTitleColor, isArmor, isCapeDL, isMagicWeapon, isWeapon } from "../../../../utils/muItemsFunctions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../components/Spinner";
import { Tooltip } from 'react-tooltip';
import { updateItem } from "../../../../store/slices/itemSelectedSlice";
import ZenSection from "./ZenSection";


const Vault = () => {
    const {accessToken} = useSelector(state => state.user);
    const  itemSelectedData  = useSelector(state => state.itemSelected);
    const {data: vault, isLoading, isError, isSuccess, error: vaultError} = useFetchAccountVaultQuery(undefined, {refetchOnMountOrArgChange: true});
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    // console.log(itemSelectedData);
    console.log(vault);

    useEffect(() => {
        if(!accessToken) {
            navigate(HOME_ROUTE)
        }
    }, [accessToken]);
    function handlerSelectItem(i) {
        const { isVault, isSelected, itemSlot } = itemSelectedData; 
        let selected = i.slot === itemSlot & isSelected & isVault ? false : true;
        let itemObj = {
            ...itemSelectedData,
            isVault: true,
            isWebstore: false,
            isSelected: selected,
            itemSlot: i.slot,
            itemSerial: i.serial,
            width: i.width,
            height: i.height,
            categoryId: i.itemCategory
        }
        console.log(itemObj);
        dispatch(updateItem(itemObj));
    }
    return (
        <>
            {isLoading && <Spinner/>}
            {isSuccess && 
            <div className="vault_container">
                <h3 className="title">Account Vault</h3>

                
                <div 
                className="vault_wrapper"
                style={{backgroundImage: `url(${Images.vault})`}}
                >
                    <div className="vault_grid">
                        {isSuccess && vault.items?.map((item) => {
                            if(item.cat != null) {
                            // const isSelected = selected === item.slot
                            const isSelected = itemSelectedData.itemSlot === item.slot & itemSelectedData.isVault & itemSelectedData.isSelected
                            return(   
                                <div
                                    key={item.slot}
                                    className={`vault_item ${isSelected ? 'selected' : ''}`}
                                    onClick={() => handlerSelectItem(item)}
                                    data-tooltip-id="main-tooltip"
                                    data-tooltip-content={JSON.stringify(item)}
                                    style={{
                                        gridColumnEnd: `span ${getItemSize(item.cat, item.id).width}`,
                                        gridColumnStart: (item.slot % 8) + 1,
                                        gridRowStart: Math.floor(item.slot / 8) + 1,
                                        gridRowEnd: `span ${getItemSize(item.cat, item.id).height}`,
                                    }}
                                >
                                    <img className="vault_item_image" src={getItemIconPath(item.cat, item.id, item.level)}/> 
                                </div>
                            )
                            }
                        }
                        )}
                    </div>
                </div>
                <ZenSection zen={(vault.zen)} success={isSuccess}/>
            </div>
            }
            {isError && 
                <div className="vault_error_container">
                    <h3 className="title">Error:</h3>
                    <span className="vault_error_message">{vaultError.data.message}</span>
                </div>
            }
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
                                    itemInfo.ancOptions.full.map((opt, i) => 
                                        <p key={i} className='anc_opt_p_grey'>{opt}</p>
                                    )
                                }
                            </div>
                        )
                    }}
    
                >
                    
                </Tooltip> 
        </>
    );
}

export default Vault;
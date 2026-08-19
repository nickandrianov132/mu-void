import { useFetchOneCharInventoryQuery, useFetchOneCharQuery } from '../../../services/charApi';
import { useParams } from 'react-router';
import Images from '../../../assets/Images';
import { checkCharClass, checkLocation } from '../../../utils/functions';
import { getEmptySlotImage, getEnchItemGlowType, getItemDetails, getItemIconPath, getItemName, getItemTitleColor, isArmor, isCapeDL, isMagicWeapon, isWeapon } from '../../../utils/muItemsFunctions';
import { Tooltip } from 'react-tooltip';

const CharacterCard = () => {
    const {id} = useParams()
    const {data, isLoading} = useFetchOneCharQuery(id)
    const {data: inventoryData} = useFetchOneCharInventoryQuery(id)
    // console.log(data);
    console.log(inventoryData);
    function setImg(){
        let img = ''
        if(!isLoading && (data.cClass === 16 || data.cClass === 17 || data.cClass === 18)) {
            img = Images.dk
        }
        else if(!isLoading && (data.cClass === 0 || data.cClass === 1 || data.cClass === 2)) {
            img = Images.wiz
        }
        else if(!isLoading && (data.cClass === 32 || data.cClass === 33 || data.cClass === 34)) {
            img = Images.elf
        } 
        else if(!isLoading && (data.cClass === 80 || data.cClass === 81 || data.cClass === 82)) {
            img = Images.summ
        } 
        else if (!isLoading && (data.cClass === 48 || data.cClass === 50)){
            img = Images.mg
        }
        else if (!isLoading && (data.cClass === 64 || data.cClass === 66)){
            img = Images.dl
        }
        else if (!isLoading && (data.cClass === 96 || data.cClass === 98)){
            img = Images.rf
        }
        return img
    }
    let image = setImg();

    function pretyZen() {
        const arr = []
        const arrZen = char.zen.split('')
        for (let a =[], i = arrZen.length; i > 0; i--) {
            a.push(arrZen[i - 1])
            console.log(a);
            if(a.length == 3) {
                arr.push(a.reverse().join(''))
                a = []
            }
            if(i < 2  && a.length !== 0) {
                arr.push(a.reverse().join(''))
            }
        }
        const pZen = arr.reverse().join(',')
        return pZen
    }
    return (
        <>
        {!isLoading && 
        <div className='char_card_container'>
            <div className='char_card_info_wrapper'>

            <div className='char_card_img_div'>
                <img className='char_img' src={image} />
            </div> 
            <div className='char_card_table_div'>
                <table className='char_table'>
                    <thead>
                        <tr>
                            <th className='th'>{data.cName}</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        <tr>
                            <td>Class</td>
                            <td>{checkCharClass(data.cClass)}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                                {data.online == 1 ?
                                    <td className='user_char_card_table_td_online'>Online</td>
                                    :
                                    <td className='user_char_card_table_td_offline'>Offline</td>
                                }
                        </tr>
                        <tr>
                            <td>Guild</td>
                            <td>{data.charGuild ? <em className='em_char_guild'>{data.charGuild}</em> : " — "}</td>
                        </tr>
                        <tr>
                            <td>Reset</td>
                            <td>{data.cReset}</td>
                        </tr>
                        <tr>
                            <td>Grand Reset</td>
                            <td>{data.cGrandReset}</td>
                        </tr>
                        <tr>
                            <td>Level</td>
                            <td>{data.cLevel}</td>
                        </tr>
                        <tr>
                            <td>Strength</td>
                            <td>{data.cStr}</td>
                        </tr>
                        <tr>
                            <td>Agility</td>
                            <td>{data.cAgi}</td>
                        </tr>
                        <tr>
                            <td>Vitality</td>
                            <td>{data.cVit}</td>
                        </tr>
                        <tr>
                            <td>Energy</td>
                            <td>{data.cEne}</td>
                        </tr>
                            {data.cCmd !== 0 &&
                                <tr>
                                    <td>Command</td>
                                    <td>{data.cCmd}</td>
                                </tr>  
                            }
                        <tr>
                            <td>Map</td>
                            <td>{checkLocation(data.mapNumber)}</td>
                        </tr>
                        <tr>
                            <td>Coord</td>
                            <td>{`${data.mapX}x${data.mapY}`} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <div className='char_inventory_container'>
                <div className='equipment_section_container'>
                {inventoryData?.map((item) => {
                    if (item.slot < 12) {
                        if (item.cat != null) {
                            return (
                                <div 
                                key={item.slot} 
                                className={`item_wrapper item_${item.slot}`}
                                data-tooltip-id="main-tooltip"
                                data-tooltip-content={JSON.stringify(item)}
                                style={{backgroundImage: `url(${getEmptySlotImage(item.slot)})`}}
                            >   
                                {/* <div 
                                    className='image_wrapper glow-plus9'
                                    style={{'--item-icon': `url(${getItemIconPath(item.cat, item.id)})`}}
                                >
                                    <img className='inventory_item_image' src={getItemIconPath(item.cat, item.id)}/> 
                                </div> */}
                                    <img className={`inventory_item_image ${getEnchItemGlowType(item.cat, item.id, item.level)}`} src={getItemIconPath(item.cat, item.id, item.level)}/> 
                            </div>
                            )
                        } else {
                            return (
                            <div 
                                key={item.slot} 
                                className={`item_wrapper item_${item.slot}`}
                            >
                                <img className='inventory_item_image_empty' src={getEmptySlotImage(item.slot)}/>
                            </div>

                            )
                        }
                    }
                }
                )}
                </div>


                <Tooltip 
                    id="main-tooltip"
                    className="mu_tooltip_container"
                    render={({ content }) => {
                        if (!content) return null
                        const info = JSON.parse(content);
                        const itemInfo = getItemDetails(info.cat, info.id, info.level, info.isExc, info.exc, info.isAncient, info.ancGroup, info.hasHarmony, info.harmonyLevel, info.harmonyType, info.harmonyTypeGroup, info.is380Opt)
                        console.log(itemInfo);
                        return (
                            <div className="item_info_container" >
                                
                                <h5 
                                    className="item_header" 
                                    style={{color: getItemTitleColor(info.cat, info.id, info.level, info.isExc, info.isAncient), backgroundColor: info.isAncient ? "#3240ff" : "transparent", fontSize: "1.12em"}}
                                >
                                    {info.isExc && info.cat !== 12 && !isCapeDL(info.cat, info.id)  ? "Excellent " : ""}{info.isAncient ? itemInfo.ancOptions.name : ""} {getItemName(info.cat, info.id)} {info.level > 0 && `+${info.level}`}
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
            
            
        </div>
}
        </>
    );
}


export default CharacterCard;

import Images from "../assets/Images";
import itemsList from './muItems/item_list.json';
import itemExcOptions from './muItems/item_exc_opt.json';
import itemExcDefOffset from './muItems/item_exc_offset.json';
import itemHarmonyOpt from './muItems/item_harmony_options.json';
import pvp380Opt from './muItems/pvp380Options.json'
import { getAncSetOpt } from "./ancientSets";

export function getItemIconPath(cat, id, lvl) {
    if (cat != undefined && cat != null && id != undefined & id != null) {
        if(cat === 13 && id === 14 && lvl === 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 13 && id === 31 && lvl === 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 12 && id === 136 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 12 && id === 137 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 12 && id === 138 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 12 && id === 139 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 12 && id === 140 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 12 && id === 141 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 12 && id === 142 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 12 && id === 143 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 12 && id === 30 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 12 && id === 31 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        } 
        if(cat === 14 && id === 11 && lvl >= 1) {
            let str = `${cat}_${id}_${lvl}`
            return Images[str]
        }
        let str = `${cat}_${id}`
        return Images[str]
    } else {
        return Images["no_image"]
    }
}

export function getEmptySlotImage(slot) {
    let path = `slot_${slot}`
    return Images[path]
}
export function getItemSize(cat, id) {
    let item = `${cat}_${id}`
    return { width: itemsList[item].Width, height: itemsList[item].Height}
}

export function getItemDetails(cat, index, level, isExc, excOptObj, isAncient, ancGroup, isHarmony, harmLvl, harmType, harmGroup, is380Opt) {
    let itemStr = `${cat}_${index}`
    let item = itemsList[itemStr];
    return {
        isTwoHanded: isWeapon(cat) ? item.TwoHand : null,
        width: item.Width,
        height: item.Height,
        damage: isWeapon(cat) ? getActualDmg(cat, index, isExc, isAncient, item.DamageMin, item.DamageMax, level) : null,
        defense: isArmor(cat) ? getActualDef(cat, index, item.Defense, level, isExc, isAncient) : null,
        rise: isMagicWeapon(cat, index) ? getMagicWeaponRise(cat, index, level, item.MagicPower, isExc) : null,
        attackSpeed: item.AttackSpeed,
        reqLevel: item.ReqLevel,
        dmgAbsorb: isWings(cat, index) || isCape(cat, index) ? getWingsAbsorb(index, level) : null,
        dmgInc: isWings(cat, index) || isCape(cat, index) ? getWingsDmg(index, level) : null,
        wingDef: isWings(cat, index) || isCape(cat, index) ? getWingsDef(index, level) : null,
        excOptions: isExc ? getExcOptions(cat, index, excOptObj) : null,
        ancOptions: isAncient ? getAncSetOpt(cat, index, ancGroup) : null,
        harmonyOpt: isHarmony ? getHarmonyOpt(harmType, harmGroup, harmLvl) : null,
        pvp380Opt: is380Opt ? get380Opt(cat) : null
    }
}

export function getExcOptShort(cat, id, excObj) {
    let optArr = [];
    if (isArmor(cat, id)) {
        if(excObj.firstOpt) optArr.push("Zen") 
        if(excObj.secondOpt) optArr.push("Rate") 
        if(excObj.thirdOpt) optArr.push("Ref") 
        if(excObj.fourthOpt) optArr.push("DD") 
        if(excObj.fifthOpt) optArr.push("Mana") 
        if(excObj.sixthOpt) optArr.push("Life") 
        return optArr;
    }
    if (isWeapon(cat, id)) {
        if(excObj.firstOpt) optArr.push("Mana") 
        if(excObj.secondOpt) optArr.push("Life") 
        if(excObj.thirdOpt) optArr.push("Speed") 
        if(excObj.fourthOpt) optArr.push("Dmg") 
        if(excObj.fifthOpt) optArr.push("Dmg/lvl") 
        if(excObj.sixthOpt) optArr.push("Rate") 
        return optArr;
    }
    if (isWingsOptTier1(cat, id)) {
        if(excObj.firstOpt) optArr.push("Life") 
        if(excObj.secondOpt) optArr.push("Mana") 
        if(excObj.thirdOpt) optArr.push("Ignore")  
        return optArr;
    }
    if (isWingsOptTier2(cat, id)) {
        if(excObj.firstOpt) optArr.push("Ignore") 
        if(excObj.secondOpt) optArr.push("Life")   
        return optArr;
    }
    if (isWingsOptTier3(cat, id)) {
        if(excObj.firstOpt) optArr.push("Ignore") 
        if(excObj.secondOpt) optArr.push("Return") 
        if(excObj.thirdOpt) optArr.push("Life")  
        if(excObj.fourthOpt) optArr.push("Mana")  
        return optArr;
    }
}
export function isWingsOptTier1(cat, id) {
    if (cat === 12) {
        if ( id === 3 || id === 4 || id === 5 || id === 6 || id === 42 || id === 49 ) {
            return true
        } else {
            return false
        }
    } else if (cat === 13 && id === 30) {
        return true
    }
    else {
        return false
    }
}
export function isWingsOptTier2(cat, id) {
    if (cat === 12 ) {
        if ( id === 262 || id === 263 || id === 264 || id === 265 || id === 266 || id === 267 || id === 268) {
            return true
        }
    }
    else return false
}
export function isWingsOptTier3(cat, id) {
    if (cat === 12 ) {
        if ( id === 36 || id === 37 || id === 38 || id === 39 || id === 40 || id === 43 || id === 50) {
            return true
        }
    }
    else return false
}

 export function getEnchItemGlowType(cat, id, lvl) {
    let glowStr = 'glow-none'
    if (cat <= 11) {
        if (lvl < 7) glowStr = "glow-plus6"
        if (lvl === 7 || lvl === 8) glowStr = "glow-plus7"
        if (lvl >= 9) glowStr = "glow-plus9"
        return glowStr
    } else {
        return glowStr
    }
}

export function getItemName(cat, index, lvl) {

    if (cat === 13 && index === 14 && lvl === 1) {
        let item = itemsList[`${cat}_${index}_${lvl}`];
        return item.Name
    }
    if (cat === 13 && index === 31 && lvl === 1) {
        let item = itemsList[`${cat}_${index}_${lvl}`];
        return item.Name
    }
    if(cat === 14 && index === 11 && lvl >= 1) {
        let item = itemsList[`${cat}_${index}_${lvl}`]
        return item.Name
    }
    let item = itemsList[`${cat}_${index}`];
    // console.log(`cat: ${cat}, id: ${index}: ${item.Name} `);
    
    return item.Name
}
export function getItemTitleColor(cat, index, lvl, isExc, isAncient) {
    if (cat === 14 || cat === 12) {
        if (isJewel(cat, index)) {
            return "#fadc15"
        } else {
            return "#fff"
        }
    }
    else if (cat === 12 && isWings(cat, index)) {
        return getRegularItemColorName(lvl)
    }
    else if (isExc && !isCape(cat, index)) {
        return "#20f320"
        
    } 
    else if (isAncient && !isCape(cat, index)) {
        return "#20f320"
        
    } 
    else if (cat === 13) {
        return getRegularItemColorName(lvl)
    } else {
        return getRegularItemColorName(lvl)
    }
}
export function getRegularItemColorName(level) {
    if (level < 7 && level !== 0) return "#5ba4fc"
    if (level > 6) return "#e7c800"
    if (level == 0) return "#fff"
}
function isJewel(cat, id) {
    if(cat === 14) {
        if (id === 11 || id === 13 || id === 14 || id === 16 || id === 17 || id === 18 || id === 19 || id === 22 || id === 31 || id === 41 || id === 42 || id === 43 || id === 44) {
            return true
        } 
    }
    else if (cat === 12) {
        if ( id === 15) {
            return true
        }
    } else {
        return false
    }

}
export function isWings(cat, id) {
    if (cat === 12) {
        if (id === 0 || id === 1 || id === 2 || id === 3 || id === 4 || id === 5 || id === 6 || id === 36 || id === 37 || id === 38 || id === 39 || id === 40 || id === 41 || id === 42 || id === 43 || id === 49 || id === 130 || id === 131 || id === 132 || id === 133 || id === 134 || id === 135 || id === 262 || id === 263 || id === 264 || id === 265 || id === 266 || id === 267 || id === 268) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
function isCape(cat, id) {
    if (cat === 13 && id === 30) return true
    else return false
}

function getWingsAbsorb(id, lvl) {
    if (id === 0 || id === 1 || id === 2 || id === 41) {
        let base = 12;
        return base + (lvl*2)
    }
    if (id === 3 || id === 4 || id === 5 || id === 6 || id === 42) {
        let base = 25;
        return base + (lvl*2)
    }
    if (id === 49 || id === 30) {
        let base = 10;
        return base + (lvl*1)
    }
    if (id === 263) {
        let base = 33;
        return base + (lvl*2)
    }
    if (id === 264 || id === 265) {
        let base = 35;
        return base + (lvl*2)
    }
    if (id === 262) {
        let base = 13;
        return base + (lvl*2)
    }
    if (id === 43 || id === 36 || id === 37 || id === 38 || id === 39 || id === 50) {
        let base = 39;
        return base + (lvl*2)
    }
    if (id === 40 ) {
        let base = 24;
        return base + (lvl*2)
    }
    return null
}
function getWingsDmg(id, lvl) {
    if (id === 0 || id === 1 || id === 2 || id === 41) {
        let base = 12;
        return base + (lvl*2)
    }
    if (id === 3 || id === 4 || id === 5 || id === 6 || id === 42) {
        let base = 32;
        return base + lvl
    }
    if (id === 49 || id === 30) {
        let base = 20;
        return base + (lvl*2)
    }
    if (id === 263) {
        let base = 30;
        return base + lvl
    }
    if (id === 264 || id === 265) {
        let base = 29;
        return base + lvl
    }
    if (id === 262) {
        let base = 21;
        return base + (lvl*2)
    }
    if (id === 43 || id === 36 || id === 37 || id === 38 || id === 39 || id === 50) {
        let base = 39;
        return base + (lvl*2)
    }
    if (id === 40 ) {
        let base = 39;
        return base + (lvl*2)
    }
    return null
}
function getWingsDef(id, lvl) {
    if (id === 0 || id === 1 || id === 2 || id === 41) {
        let base = 10;
        return base + (lvl*2)
    }
    if (id === 2) {
        let base = 20;
        return base + (lvl*2)
    }
    if (id === 3 || id === 4 || id === 42) {
        let base = 30;
        return base + (lvl*2)
    }
    if (id === 5) {
        let base = 45;
        return base + (lvl*2)
    }
    if (id === 6) {
        let base = 40;
        return base + (lvl*2)
    }
    if (id === 49 || id === 30) {
        let base = 15;
        return base + (lvl*2)
    }
    if (id === 263) {
        let base = 46;
        return base + (lvl*3)
    }
    if (id === 264 || id === 265) {
        let base = 37;
        return base + (lvl*3)
    }
    if (id === 262) {
        let base = 27;
        return base + (lvl*3)
    }
    if (id === 36) {
        let base = 60;
        return base + (lvl*4)
    }
    if (id === 43 || id === 37 || id === 38 || id === 39 || id === 50 || id === 40) {
        let base = 45;
        return base + (lvl*4)
    }
    if ( id === 39) {
        let base = 55;
        return base + (lvl*4)
    }
    return null
}


export function isWeapon(cat) {
    if (cat === null) return false
    if (cat < 6 ) return true
    return false
}
export function isArmor(cat) {
    if (cat > 5 && cat < 12) {
        return true
    }
}
export function isMagicWeapon(cat, id) {
    if (isMGSword(cat, id)) return true
    if (isScepter(cat, id)) return true
    if (cat === 5) return true
    else return false
}

export function getItemCategory (cat, index) {
    let physWeapon = 1;
    let magWeapon = 2;
    let semiWeapon = 3;
    let wings = 4;
    if (cat < 5) {
        if (index === 21 || index === 23 || index === 25 || index === 28 || index === 31 ) return semiWeapon
        else return physWeapon
    }
    if (cat === 5) return magWeapon;
    if (cat === 12 && isWings(index)) return wings;
    return false
}

function getDmglvl(minDmg, maxDmg, level, excBaseDmg = 0) {
    let weaponDmg = {
        min: 0,
        max: 0
    }
    if (level < 10) {
        weaponDmg.min = (minDmg + (3 * level)) + excBaseDmg;
        weaponDmg.max = (maxDmg + ( 3 * level)) + excBaseDmg;
    }
    if (level > 9) {
        weaponDmg.min = (minDmg + (3 * 9) + getDmgDefRecursive((level-9), 4)) + excBaseDmg;
        weaponDmg.max = (maxDmg + (3 * 9) + getDmgDefRecursive((level-9), 4)) + excBaseDmg;
    }
    return weaponDmg
}

function getActualDmg(cat, id, isExc, isAnc, minDmg, maxDmg, level) {
    if (isExc || isAnc) {
        if (isMGSword(cat, id)) {
            return getDmglvl(minDmg, maxDmg, level, getExcBladeDmgRise(id).dmg) 
        }
        if (isScepter(cat, id)) {
            return getDmglvl(minDmg, maxDmg, level, getExcScepterDmgRise(id).dmg) 
        }
        if (isStaff(cat)) {
            console.log(getDmglvl(minDmg, maxDmg, level, getExcStaffDmgRise(id).dmg) );
            return getDmglvl(minDmg, maxDmg, level, getExcStaffDmgRise(id).dmg) 
        }
        else {
            return getDmglvl(minDmg, maxDmg, level, 30) 
        }
    } else {
        return  getDmglvl(minDmg, maxDmg, level)
    }
}

function getActualDef(cat, id, baseDef, level, isExc, isAnc) {
    const itemStr = `${cat}_${id}`;
    if (isExc && !isAnc) return getDef(baseDef, level) + getExcItemDefOffset(itemStr)
    else if (isAnc) return getDef(baseDef, level) + getExcItemDefOffset(itemStr) + 6
    else {
        return getDef(baseDef, level)
    }
}
function getDef(baseDef, level) {
    if (level < 10) {
        return  baseDef + (3 * level);
    }
    else if (level > 9) {
        return  (baseDef + (3 * 9)) + getDmgDefRecursive((level-9), 4);
    }
    else {
        return 0
    }
}
function getExcItemDefOffset(itemString) {
    let def = itemExcDefOffset[itemString];
    if (itemExcDefOffset[itemString]) return def
    else {
        return 0
    }
}
function getDmgDefRecursive(lvl, baseStepDmg) {
    if (lvl === 1) return 4;
    let prev = getDmgDefRecursive(lvl - 1, baseStepDmg + 1)
    let next = baseStepDmg + 1
    return prev + next
}
function getRiseRecursive(cat, id, lvl) {
    if (lvl > 0) {
        let baseStepRise = getCurrentBaseRise(cat, id, lvl);
        if (lvl === 1) return getCurrentBaseRise(cat, id, lvl);
        let prev = getRiseRecursive(cat, id, lvl - 1);
        return prev + baseStepRise;
    } else {
        return 0;
    }
}
const firstCatStaff = [0, 1, 2, 3, 4, 6, 7, 9, 10, 11, 13, 12, 14, 15, 17, 18, 19, 20, 21, 23, 34, 33, 30, 31, 32, 35, 37, 36];
const secondCatStaff = [5, 8, 16, 22]; 
const firstCatBlade = [31, 25, 23, 30];
const secondCatBlade = [21, 28];
const fourthCatScepter = [8, 10, 12];
const fifthCatScepter = [9, 11, 13, 14, 15, 17, 18];

function getCurrentBaseRise(cat, id, lvl) {
    if (getRiseCategory(cat, id) === 1) return getBaseRiseOne(lvl)
    if (getRiseCategory(cat, id) === 2) return getBaseRiseTwo(lvl)
    if (getRiseCategory(cat, id) === 3) return getBaseRiseThree(lvl)
    if (getRiseCategory(cat, id) === 4) return getBaseRiseFour(lvl)
    if (getRiseCategory(cat, id) === 5) return getBaseRiseFive(lvl)
    else return 0;
}

function getRiseCategory(cat, id) {
    if (cat === 5 && firstCatStaff.find((e) => e === id)) return 1;
    if (cat === 5 && secondCatStaff.find((e) => e === id)) return 2;
    if (cat === 0 && firstCatBlade.find((e) => e === id)) return 1;
    if (cat === 0 && secondCatBlade.find((e) => e === id)) return 2;
    if (cat === 2 && fourthCatScepter.find((e) => e === id)) return 4;
    if (cat === 2 && fifthCatScepter.find((e) => e === id)) return 5;
    else return 1;
}

function getBaseRiseOne(lvl) {
    if ( lvl === 1 || lvl === 3 || lvl === 5 || lvl === 7 || lvl === 9) return 3
    if (lvl === 2 || lvl === 4 || lvl === 6 || lvl === 8 || lvl === 10) return 4
    if (lvl === 11 || lvl === 12 || lvl === 13) return 5
    if (lvl === 14) return 6
    if (lvl === 15) return 7
    else return 0
}
function getBaseRiseTwo(lvl) {
    if (lvl === 2 || lvl === 4 || lvl === 6 || lvl === 8) return 3
    if (lvl === 1 || lvl === 3 || lvl === 5 || lvl === 7 || lvl === 9 || lvl === 10 || lvl === 11) return 4
    if (lvl === 12) return 5
    if (lvl === 13 || lvl === 14 || lvl === 15) return 6
    else return 0
}
function getBaseRiseThree(lvl) {
    if ( lvl === 1 || lvl === 3 || lvl === 5 || lvl === 7 || lvl === 9 || lvl === 10 || lvl === 11) return 3
    if (lvl === 2 || lvl === 4 || lvl === 6 || lvl === 8) return 4
    if (lvl === 12) return 5
    if (lvl === 13 || lvl === 14 || lvl === 15) return 6
    else return 0
}
function getBaseRiseFour(lvl) {
    if ( lvl === 1 || lvl === 3 || lvl === 5 || lvl === 7 || lvl === 9 || lvl === 10 || lvl === 11) return 2
    if (lvl === 2 || lvl === 4 || lvl === 6 || lvl === 8) return 1
    if (lvl === 12) return 3
    if (lvl === 13 || lvl === 14 || lvl === 15) return 4
    else return 0
}
function getBaseRiseFive(lvl) {
    if ( lvl === 1 || lvl === 3 || lvl === 5 || lvl === 7 || lvl === 9) return 1
    if (lvl === 2 || lvl === 4 || lvl === 6 || lvl === 8 || lvl === 10) return 2
    if (lvl === 11 || lvl === 12 || lvl === 13) return 3
    if (lvl === 14) return 4
    if (lvl === 15) return 5
    else return 0
}


function getExcOptions(cat, id, excOptObj) {
    let excOptionsArr = [];
    if (cat > 5 && cat < 12) {
        for(let opt in excOptObj) {
            if(excOptObj[opt]) {
                excOptionsArr.push(itemExcOptions["armors"][opt])
            }
        }
        return excOptionsArr.reverse()
    }
    if (isRing(cat, id)) {
        for(let opt in excOptObj) {
            if(excOptObj[opt]) {
                excOptionsArr.push(itemExcOptions["armors"][opt])
            }
        }
        return excOptionsArr.reverse()
    }
    if (cat < 6  || isPendant(cat, id) || isMagPendant(cat, id)) {
        if (isMagPendant(cat, id)) {
            for(let opt in excOptObj) {
                if(excOptObj[opt]) {
                    excOptionsArr.push(itemExcOptions["magicPend"][opt])
                }
            }
        } else {
            for(let opt in excOptObj) {
                if(excOptObj[opt]) {
                    excOptionsArr.push(itemExcOptions["weapons"][opt])
                }
            }
        }
        return excOptionsArr.reverse()
    }
    if (isCapeDL(cat, id)) {
        for(let opt in excOptObj) {
            if(excOptObj[opt]) {
                excOptionsArr.push(itemExcOptions["capeDl"][opt])
            }
        }
        return excOptionsArr.reverse()
    }
    if (isCapeRF(cat, id)) {
        for(let opt in excOptObj) {
            if(excOptObj[opt]) {
                excOptionsArr.push(itemExcOptions["capeRf"][opt])
            }
        }
        return excOptionsArr.reverse()
    }
    if (isWings2nd(cat, id)) {
        for(let opt in excOptObj) {
            if(excOptObj[opt]) {
                excOptionsArr.push(itemExcOptions["wings2nd"][opt])
            }
        }
        return excOptionsArr.reverse()
    }
    if (isWings3rd(cat, id)) {
        for(let opt in excOptObj) {
            if(excOptObj[opt]) {
                excOptionsArr.push(itemExcOptions["wings3rd"][opt])
            }
        }
        return excOptionsArr.reverse()
    }

    return excOptionsArr.reverse()
}
const pendants = [13, 26, 28];
const magicPendants = [25, 12, 27];
const rings = [8, 9, 21, 22, 23, 24];

export function isPendant(cat, id) {
    if(cat === 13 && pendants.find(e => e === id)) return true 
    else return false
}
export function isMagPendant(cat, id) {
    if(cat === 13 && magicPendants.find(e => e === id)) return true 
    else return false
}
export function isRing(cat, id) {
    if(cat === 13 && rings.find(e => e === id)) return true 
    else return false
}
export function isCapeDL(cat, id) {
    if(cat === 13 && id === 30) return true
    return false
}
function isCapeRF(cat, id) {
    if(cat === 12 && id === 49) return true
    return false
}
function isWings3rd(cat, id) {
    if(cat === 12) {
        if (id === 43 || id === 36 || id === 37 || id === 38 || id === 39 || id === 50 || id === 40) {
            return true
        }
        return false
    }
    return false
}
function isWings2nd(cat, id) {
    if(cat === 12) {
        if (id === 3 || id === 4 || id === 5 || id === 6 || id === 42) {
            return true
        }
        return false
    }
    return false
}

function getExcStaffDmgRise(id) {
    if (id === 20 || id === 32) return {dmg: 15, rise: 11};
    if (id === 7 || id === 11) return {dmg: 15, rise: 12};
    if (id === 12 || id === 21 || id === 30 || id === 31 || id === 33 || id === 34 || id === 35 || id === 37) return {dmg: 15, rise: 13};
    if (id === 9 || id === 17 || id === 18) return {dmg: 15, rise: 14};
    if (id === 5 || id === 6 || id === 16 || id === 19 || id === 22) return {dmg: 15, rise: 15};
    if (id === 9 || id === 14) return {dmg: 15, rise: 17};
    if (id === 1 || id === 2 || id === 3 || id === 4 || id === 15 || id === 23) return {dmg: 15, rise: 16};
    else return {dmg: 0, rise: 0};
}
function isStaff(cat) {
    if (cat === 5) return true
    else return false
}
function getMagicWeaponRise(cat, id, level, baseRise, isExc) {
    if (isMGSword(cat, id)) {
        if (isExc) return getRiseRecursive(cat, id, level) + getExcBladeDmgRise(id).rise
        else return getRiseRecursive(cat, id, level) + baseRise
    } 
    if (isScepter(cat, id)) {
        if (isExc) return getRiseRecursive(cat, id, level) + getExcScepterDmgRise(id).rise
        else return getRiseRecursive(cat, id, level)
    } 
    if (isStaff(cat)) {
        if (isExc) return getRiseRecursive(cat, id, level) + (baseRise + getExcStaffDmgRise(id).rise)
        else return getRiseRecursive(cat, id, level) + baseRise
    } 
    else return null
}

function getExcBladeDmgRise(id) {
    if(id === 21) return ({dmg: 25, rise: 13})
    if(id === 23) return ({dmg: 26, rise: 13})
    if(id === 25) return ({dmg: 28, rise: 14})
    if(id === 28) return ({dmg: 22, rise: 12})
    if(id === 30) return ({dmg: 24, rise: 12})
    if(id === 31) return ({dmg: 31, rise: 15})
    if(id === 30) return ({dmg: 24, rise: 12})
    else {
        return {dmg: 0, rise: 0}
    }
}
function isMGSword(cat, id) {
    if (cat === 0) {
        if (id === 21 || id === 23 || id === 25 || id === 28 || id === 30 || id === 31) return true
        else return false
    }
    else return false
}
function getExcScepterDmgRise(id) {
    if (id === 8) return {dmg: 23, rise: 3}
    if (id === 9) return {dmg: 24, rise: 5}
    if (id === 10) return {dmg: 27, rise: 8}
    if (id === 11) return {dmg: 28, rise: 9}
    if (id === 12 || id === 18) return {dmg: 24, rise: 8}
    if (id === 14 || id === 15) return {dmg: 27, rise: 9}
    if (id === 17) return {dmg: 26, rise: 9}
    else {
        return {dmg: 30, rise: null}
    }
}
function isScepter(cat, id) {
    if (cat === 2) {
        if (id === 8 || id === 9 || id === 10 || id === 11 || id === 12 || id === 14 || id === 17) return true
        else return false
    } else {
        return false
    }
}

function getHarmonyOpt(hType, hGroup, hLevel) {
    const itemKey = `${hGroup}_${hType}`;
    let option = itemHarmonyOpt[itemKey].name.replace("%d", itemHarmonyOpt[itemKey].levels[hLevel].value);
    console.log(option);
    return option
}

function get380Opt(cat) {
    let opt380Arr = []
    if (pvp380Opt[cat]) {
        for ( let opt in pvp380Opt[cat]) {
            opt380Arr.push(pvp380Opt[cat][opt])
        }
        return opt380Arr
    }else {
        return null
    }
}
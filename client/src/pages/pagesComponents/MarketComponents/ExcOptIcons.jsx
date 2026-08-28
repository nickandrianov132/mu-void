import { GiArmorUpgrade, GiArrowsShield, GiAxeSwing, GiBouncingSword, GiCrackedShield, GiDrippingBlade, GiDrippingKnife, GiEnergyArrow, GiGlassHeart, GiHealthPotion, GiPointySword, GiPotionBall, GiShieldReflect, GiSpinningSword, GiTwoCoins } from "react-icons/gi";
import { isArmor, isCapeDL, isMagPendant, isPendant, isRing, isWeapon, isWings, isWingsOptTier1, isWingsOptTier2, isWingsOptTier3 } from "../../../utils/muItemsFunctions";

export function excOptIconWings3(optObj) {
    let optArr = [];
        if (optObj.firstOpt) {
                optArr.push(<GiCrackedShield key={"ignore"} className="exc_opt_icon_ignore"/>)
        }
        if (optObj.secondOpt) {
                optArr.push(<GiBouncingSword key={"return"} className="exc_opt_icon_return"/>)
        }
        if (optObj.thirdOpt) {
                optArr.push(<GiDrippingKnife key={"hp"} className="exc_opt_icon_hp"/>)
        }
        if (optObj.fourthOpt) {
                optArr.push(<GiDrippingBlade key={"mp"} className="exc_opt_icon_mp"/>)
        }
        return optArr
    }
export function excOptIconWings2(optObj) {
    let optArr = [];
        if (optObj.firstOpt) {
                optArr.push(<GiCrackedShield key={"ignore"} className="exc_opt_icon_ignore"/>)
        }
        if (optObj.secondOpt) {
                optArr.push(<GiGlassHeart key={"hp"} className="exc_opt_icon_hp"/>)
        }
        return optArr
    }
export function excOptIconWings1(optObj) {
    let optArr = [];
        if (optObj.firstOpt) {
                optArr.push(<GiGlassHeart key={"hp"} className="exc_opt_icon_hp"/>)
        }
        if (optObj.secondOpt) {
                optArr.push(<GiPotionBall key={"mp"} className="exc_opt_icon_mp"/>)
        }
        if (optObj.thirdOpt) {
                optArr.push(<GiCrackedShield key={"ignore"} className="exc_opt_icon_ignore"/>)
        }
        return optArr
    }
export function excOptIconArmors(optObj) {
    let optArr = [];
        if (optObj.firstOpt) {
                optArr.push(<GiTwoCoins key={"zen"} className="exc_opt_icon_zen"/>)
        }
        if (optObj.secondOpt) {
                optArr.push(<GiArmorUpgrade key={"rate"} className="exc_opt_icon_rate"/>)
        }
        if (optObj.thirdOpt) {
                optArr.push(<GiShieldReflect key={"ref"} className="exc_opt_icon_ref"/>)
        }
        if (optObj.fourthOpt) {
                optArr.push(<GiArrowsShield key={"dd"} className="exc_opt_icon_dd"/>)
        }
        if (optObj.fifthOpt) {
                optArr.push(<GiPotionBall key={"mana"} className="exc_opt_icon_mana"/>)
        }
        if (optObj.sixthOpt) {
                optArr.push(<GiHealthPotion key={"life"} className="exc_opt_icon_life"/>)
        }
        return optArr
    }
export function excOptIconWeapons(optObj, mag = false) {
    let optArr = [];
        if (optObj.firstOpt) {
            optArr.push(<GiDrippingBlade key={"manaHunt"} className="exc_opt_icon_manaHunt"/>)    
        }
        if (optObj.secondOpt) {
            optArr.push(<GiDrippingKnife key={"lifeHunt"} className="exc_opt_icon_lifeHunt"/>)
        }
        if (optObj.thirdOpt) {
            optArr.push(<GiEnergyArrow key={"speed"} className="exc_opt_icon_speed"/>)
        }
        if (optObj.fourthOpt) {
            optArr.push(<GiSpinningSword key={"dmg"} className="exc_opt_icon_dmg"/>)
        }
        if (optObj.fifthOpt) {
                optArr.push(<GiAxeSwing key={"dmglvl"} className="exc_opt_icon_dmglvl"/>)
        }
        if (optObj.sixthOpt) {
            optArr.push(<GiPointySword key={"edr"} className="exc_opt_icon_edr"/>)
        }
        return optArr
    }

    export function getOptions(cat, id, opt) {
        if (isWeapon(cat, id) || isMagPendant(cat, id) || isPendant(cat, id)) {
            return excOptIconWeapons(opt)
        }
        if (isWings(cat, id) || isCapeDL(cat, id)) {
            if (isWingsOptTier1(cat, id)) {
                return excOptIconWings1(opt)
            }
            if (isWingsOptTier2(cat, id)) {
                return excOptIconWings2(opt)
            }
            if (isWingsOptTier3(cat, id)) {
                return excOptIconWings3(opt)
            }
            return
        }
        if (isArmor(cat, id) || isRing(cat, id)) {
            return excOptIconArmors(opt)
        }
        return []
    
    }
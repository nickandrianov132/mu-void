export function validateCharReset(status, lvl, res, gRes, zen) {
    let valid;
    const zenRes = 10000000;
    const zenEasyRes = 5000000;
    if(gRes === 0 && res < 15) {
        if(status === 0 && res === 0 && lvl >= 350 && zen >= zenEasyRes) {
            return valid = true;
        }
        if(status === 0 && res === 1 && lvl >= 360 && zen >= zenEasyRes*2) {
            return valid = true;
        }
        if(status === 0 && res === 2 && lvl >= 370 && zen >= zenEasyRes*3) {
            return valid = true;
        }
        if(status === 0 && res === 3 && lvl >= 380 && zen >= zenEasyRes*4) {
            return valid = true;
        }
        if(status === 0 && res === 4 && lvl >= 390 && zen >= zenEasyRes*5) {
            return valid = true;
        }
        if(status === 0 && res >= 3 && lvl === 400) {
            let resZenCheck = (zen / (res+1)) >= zenRes;
            if(resZenCheck) {
                return valid = true;
            }
        }
    }
    if(gRes > 0 && res < 15) {
        if(status === 0 && lvl === 400) {
            let resZenCheck = (zen / (res+1)) >= zenRes;
            if(resZenCheck) {
                return valid = true;
            }
        }
    }
    return valid = false;
}

export function checkLocation(id) {
    let location;
    if(id === 0){
        return location = 'Lorencia'
    }
    if(id === 1) {
        return location = 'Dungeon'
    }
    if(id === 2) {
        return location = 'Devias'
    }
    if(id === 3) {
        return location = 'Noria'
    } 
    if(id === 4) {
        return location = 'LostTower'
    } 
    if(id === 6) {
        return location = 'Arena'
    } 
    if(id === 7) {
        return location = 'Atlans'
    } 
    if(id === 8) {
        return location = 'Tarkan'
    } 
    if(id === 10) {
        return location = 'Icarus'
    } 
    if(id === 11) {
        return location = 'Blood Castle 1'
    } 
    if(id === 12) {
        return location = 'Blood Castle 2'
    } 
    if(id === 13) {
        return location = 'Blood Castle 3'
    } 
    if(id === 14) {
        return location = 'Blood Castle 4'
    } 
    if(id === 15) {
        return location = 'Blood Castle 5'
    } 
    if(id === 16) {
        return location = 'Blood Castle 6'
    } 
    if(id === 17) {
        return location = 'Blood Castle 7'
    } 
    if(id === 52) {
        return location = 'Blood Castle 8'
    } 
    if(id === 18) {
        return location = 'Chaos Castle 1'
    } 
    if(id === 19) {
        return location = 'Chaos Castle 2'
    } 
    if(id === 20) {
        return location = 'Chaos Castle 3'
    } 
    if(id === 21) {
        return location = 'Chaos Castle 4'
    } 
    if(id === 22) {
        return location = 'Chaos Castle 5'
    } 
    if(id === 23) {
        return location = 'Chaos Castle 6'
    } 
    if(id === 53) {
        return location = 'Chaos Castle 7'
    } 
    if(id === 24) {
        return location = 'Kalima 1'
    } 
    if(id === 25) {
        return location = 'Kalima 2'
    } 
    if(id === 26) {
        return location = 'Kalima 3'
    } 
    if(id === 27) {
        return location = 'Kalima 4'
    } 
    if(id === 28) {
        return location = 'Kalima 5'
    } 
    if(id === 29) {
        return location = 'Kalima 6'
    } 
    if(id === 36) {
        return location = 'Kalima 7'
    } 
    if(id === 30) {
        return location = 'Valley of Loren'
    }
    if(id === 31) {
        return location = 'Land of Trial'
    }
    if(id === 32 || id === 9) {
        return location = 'Devil Square'
    }
    if(id === 33) {
        return location = 'Aida'
    }
    if(id === 34) {
        return location = 'CryWolf'
    }
    if(id === 37) {
        return location = 'Kanturu'
    }
    if(id === 38 || id === 39) {
        return location = 'Kanturu Remain'
    }
    if(id === 41) {
        return location = 'Barracks'
    }
    if(id === 42) {
        return location = 'Barracks Refuge'
    }
    if(id === 51) {
        return location = 'Elveland'
    }
    if(id === 56) {
        return location = 'Swamp of Calmness'
    }
    if(id === 57 || id === 58) {
        return location = 'Raclion'
    }
    if(id === 62) {
        return location = 'Santa Village'
    }
    if(id === 63) {
        return location = 'Vulcanus'
    }
    if(id === 64) {
        return location = 'Duel Arena'
    }
    if(id === 65 || id === 66 || id === 67 || id === 68) {
        return location = 'Doppelganger'
    }
    if(id === 69 || id === 70 || id === 71 || id === 72) {
        return location = 'Imperial Fortress'
    }
    if(id === 79) {
        return location = 'Loren Market'
    }
    if(id === 80) {
        return location = 'Karutan 1'
    }
    if(id === 81) {
        return location = 'Karutan 2'
    }
    return location = 'N/A'
}

export function checkCharClass(id) {
    let charClass = '';
    if(id == 0) {
        charClass = 'Dark Wizard'
    }
    if(id == 1) {
        charClass = 'Soul Master'
    }
    if(id == 2) {
        charClass = 'Grand Master'
    }
    if(id == 16) {
        charClass = 'Dark Knight'
    }
    if(id == 17) {
        charClass = 'Blade Knight'
    }
    if(id == 18) {
        charClass = 'Blade Master'
    }
    if(id == 32) {
        charClass = 'Fairy Elf'
    }
    if(id == 33) {
        charClass = 'Muse Elf'
    }
    if(id == 34) {
        charClass = 'High Elf'
    }
    if(id == 48) {
        charClass = 'Magic Gladiator'
    }
    if(id == 50) {
        charClass = 'Dual Master'
    }
    if(id == 80) {
        charClass = 'Summoner'
    }
    if(id == 81) {
        charClass = 'Bloody Summoner'
    }
    if(id == 82) {
        charClass = 'Dimension Master'
    }
    if(id == 64) {
        charClass = 'Dark Lord'
    }
    if(id == 66) {
        charClass = 'Lord Emperor'
    }
    if(id == 96) {
        charClass = 'Rage Fighter'
    }
    if(id == 98) {
        charClass = 'Fist Master'
    }
    return charClass
}

export function grCheckValid(cLevel,  cReset, cZen, cClass, cOnline) {
    if(grCheckLevel(cLevel) && grCheckReset(cReset) && grCheckZen(cZen) && grCheck3rdProff(cClass) && grCheckOnline(cOnline)) {
        return true;
    } else {
        return false;
    }
}

export function grCheckOnline(online) {
    if(!online){
        return true;
    } else {
        return false;
    }
}
function grandResCharGroupFn(charClass) {
    let charGroup;
    if(charClass === 2 || charClass === 18 || charClass === 34 || charClass === 82) {
        charGroup = 1;
    }
     else if(charClass === 50 || charClass === 66 || charClass === 90) {
        charGroup = 2;
    } else {
        charClass = false;
    }
    return charGroup;
}

export function grCheck3rdProff(charClass) {
    if(charClass === 2 || charClass === 18 || charClass === 34 || charClass === 82 || charClass === 50 || charClass === 66 || charClass === 98) {
        return true;
    } else {
        return false;
    }
}

export function grCheckZen(zen) {
    let grZenReq = 1000000000;
    if(zen >= grZenReq) {
        return true;
    } else {
        return false;
    }
}

export function grCheckLevel(level) {
    if(level >= 400) {
        return true;
    } else {
        return false;
    }
}
export function grCheckReset(reset) {
    if(reset >= 15) {
        return true;
    } else {
        return false;
    }
}


export function accountCheckVip(vip) {
    let vipType = ''
    if(vip == 1) {
        return vipType = "Bronze VIP"
    }
    else if(vip == 2) {
        return vipType = "Silver VIP"
    }
    else if(vip == 3) {
        return vipType = "Gold VIP"
    }
    else if(vip == 4) {
        return vipType = "Platinum VIP"
    } else {
        return "No VIP"
    }
}

export function grToMlConvert(gr) {
    return gr * 50
}

export function filterChars(id) {
    if(id === "admin" || id === "admin1" || id === "admin2"){
        return false
    }
    else{
        return true
    }
}

export function checkResLvl(lvl, res, grRes) {
    if(grRes == 0) {
        if(res == 0 && lvl >= 370) {
            return true
        }
        else if(res == 1 && lvl >= 380) {
            return true
        }
        else if(res == 2 && lvl >=390) {
            return true
        }
        else if(res >= 3 && lvl >=400) {
            return true
        }
        else {
            return false
        }
    }
    else if(grRes > 0) {
        if(lvl >=400) {
            return true
        }
        else {
            return false
        }
    }
}
export function tipResLvl(lvl, res, grRes) {
    if(grRes == 0) {
        if(res == 0 && lvl < 350) {
            let tip = '⛔ Character should be 350lvl to make Reset!'
            return tip
        }
        else if(res == 1 && lvl < 360) {
            let tip = '⛔ Character should be 360lvl to make Reset!'
            return tip
        }
        else if(res == 2 && lvl < 370) {
            let tip = '⛔ Character should be 370lvl to make Reset!'
            return tip
        }
        else if(res == 3 && lvl < 380) {
            let tip = '⛔ Character should be 380lvl to make Reset!'
            return tip
        }
        else if(res == 4 && lvl < 390) {
            let tip = '⛔ Character should be 3900lvl to make Reset!'
            return tip
        }
        else if(res >= 5 && lvl < 400) {
            let tip = '⛔ Character should be 400lvl to make Reset!'
            return tip
        }
        else {
            return false
        }
    }
    else if(grRes > 0) {
        if(lvl < 400) {
            let tip = '⛔ Character should be 400lvl to make Reset!'
            return tip
        } else {
            return false
        }
    } else {
        return false
    }
}

export function checkZenRes(zen, res, gRes) {
    const easyResZen = 5000000
    const regularResZen = 10000000
    const nextRes = res + 1
    if(gRes == 0) {
        if(res == 0 && zen >= easyResZen * nextRes) {
            return true
        }
        else if(res == 1 && zen >= easyResZen * nextRes) {
            return true
        }
        else if(res == 2 && zen >= easyResZen * nextRes) {
            return true
        }
        else if(res == 3 && zen >= easyResZen * nextRes) {
            return true
        }
        else if(res == 4 && zen >= easyResZen * nextRes) {
            return true
        }
        else if(res >= 5 && zen >= regularResZen * nextRes) {
            return true
        }
        else {
            return false
        }

    }
    else if(gRes > 0) {
        if(zen >= regularResZen * nextRes) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}

export function tipZenRes(zen, res, gRes) {
    const easyResZen = 5000000
    const regularResZen = 10000000
    const nextRes = res + 1
    let needZen
    if(gRes == 0) {
        if(res == 0 && zen < easyResZen * nextRes) {
            needZen = (easyResZen * nextRes) - zen
            return needZen
        }
        else if(res == 1 && zen < easyResZen * nextRes) {
            needZen = (easyResZen * nextRes) - zen
            return needZen
        }
        else if(res == 2 && zen < easyResZen * nextRes) {
            needZen = (easyResZen * nextRes) - zen
            return needZen
        }
        else if(res == 3 && zen < easyResZen * nextRes) {
            needZen = (easyResZen * nextRes) - zen
            return needZen
        }
        else if(res == 4 && zen < easyResZen * nextRes) {
            needZen = (easyResZen * nextRes) - zen
            return needZen
        }
        else if(res >= 5 && zen < regularResZen * nextRes) {
            needZen = (regularResZen * nextRes) - zen
            return needZen
        }
        else {
            return false
        }

    }
    else if(gRes > 0) {
        if(zen < regularResZen * nextRes) {
            needZen = (regularResZen * nextRes) - zen
            return needZen
        }
        else {
            return false
        }
    }
}

export function vipEmblemClassName(vipNum) {
    if(vipNum == 1) {
        return "vip_bronze_emblem"
    }
    if(vipNum == 2) {
        return "vip_silver_emblem"
    }
    if(vipNum == 3) {
        return "vip_gold_emblem"
    }
    else{
        return "vip_none_emblem"
    }
}
export function vipDescClassName(vipNum) {
    if(vipNum == 1) {
        return "vip_description_bronze"
    }
    if(vipNum == 2) {
        return "vip_description_silver"
    }
    if(vipNum == 3) {
        return "vip_description_gold"
    }
    else{
        return "vip_description_none"
    }
}
export function vipType(vipNum) {
    if(vipNum == 1) {
        return "Bronze VIP is Active"
    }
    if(vipNum == 2) {
        return "Silver VIP is Active"
    }
    if(vipNum == 3) {
        return "Gold VIP is Active"
    }
    else{
        return " "
    }
}

export function vipExpireCheck(vipDate) {
    const date = new Date();
    const currentDateInMS = Date.parse(date)
    const vipDateInMS = Date.parse(vipDate)
    if(vipDateInMS < currentDateInMS) {
        return false
    } 
    else if(vipDateInMS > currentDateInMS){
        return true
    } else {
        return false
    }
}

export function wcoinsToCurrency(wc) {
    let currency
    if(wc == 300) {
        currency = 5
    }
    else if(wc == 600) {
        currency = 10
    }
    else if(wc == 900) {
        currency = 15
    }
    else if(wc == 1200) {
        currency = 20
    }
    else if(wc == 2100) {
        currency = 35
    }
    else{
        currency = null
    }
    return currency
}
export function validateCharReset(status, lvl, res, gRes, zen) {
    let valid;
    const zenRes = 10000000;
    const zenEasyRes = 5000000;
    if(gRes === 0 && res < 15) {
        if(status === 0 && res === 0 && lvl >= 370 && zen >= zenEasyRes) {
            return valid = true;
        }
        if(status === 0 && res === 1 && lvl >= 380 && zen >= zenEasyRes*2) {
            return valid = true;
        }
        if(status === 0 && res === 2 && lvl >= 390 && zen >= zenEasyRes*3) {
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
    if(id === 33) {
        return location = 'Aida'
    }
    return location = 'Hidden'
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
    if(charClass === 2 || charClass === 18 || charClass === 34 || charClass === 82 || charClass === 50 || charClass === 66 || charClass === 90) {
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
    if(vip == 0) {
        return vipType = "Bronze VIP"
    }
    else if(vip == 1) {
        return vipType = "Silver VIP"
    }
    else if(vip == 2) {
        return vipType = "Gold VIP"
    }
    else if(vip == 3) {
        return vipType = "Platinum VIP"
    } else {
        return "No VIP"
    }
}

export function grToMlConvert(gr) {
    return gr * 50
}
    function prependZero(time){
        let clockTime = time < 10 ? "0".concat(time) : time
        return clockTime
    }

    /// Opening Countdown:
function openingCountdown(openDateStr) {
    const date = Date.now();
    const dateOpening = new Date(openDateStr)
    const dateDiff = dateOpening - date
    const timeRemainObj = {
        days: daysRemain(dateDiff),
        hours: hoursRemain(dateDiff),
        minutes: minutesRemain(dateDiff),
        seconds: secondsRemain(dateDiff)
    }
    return timeRemainObj
}

function daysRemain(ms) {
    const days = Math.floor(ms / 1000 / 60 / 60 / 24)
    return prependZero(days).toString()
}
function hoursRemain(ms) {
    const hours = Math.floor((ms / 1000 / 60 / 60 )% 24)
    
    return prependZero(hours).toString()
}
function minutesRemain(ms) {
    const minutes = Math.floor((ms / 1000 / 60)% 60)
    return prependZero(minutes).toString()
}
function secondsRemain(ms) {
    const seconds = Math.floor((ms / 1000) % 60)
    return prependZero(seconds).toString()
}

function getClassReward(res, gRes, classId) {
    const rewardsArr = ["Bone Blade", "Grand Viper Staff", "Phoenix Soul Star", "Storm Blitz Stick", "Soleil Scepter", "Explosion Blade", "Sylph Wind Bow", "Sword of Destruction", "Dragon Soul Staff", "Holy Storm Claw", "Ancient Stick", "Lord Scepter", "Rune Blade", "Great Reign Crossbow"]
    if(res === 20) {
        if(classId === 16 || classId === 17 || classId === 18) {
            return rewardsArr[0]
        }
        if(classId === 0 || classId === 1 || classId === 2) {
            return rewardsArr[1]
        }
        if(classId === 96 || classId === 98) {
            return rewardsArr[2]
        }
        if(classId === 80 || classId === 81 || classId === 82) {
            return rewardsArr[3]
        }
        if(classId === 64 || classId === 66) {
            return rewardsArr[4]
        }
        if(classId === 48 || classId === 50) {
            return rewardsArr[5]
        }
        if(classId === 32 || classId === 33 || classId === 34) {
            return rewardsArr[6]
        }
    
        return null
    }
    if (res === 9) {
        if(classId === 16 || classId === 17 || classId === 18) {
            return rewardsArr[7]
        }
        if(classId === 0 || classId === 1 || classId === 2) {
            return rewardsArr[8]
        }
        if(classId === 96 || classId === 98) {
            return rewardsArr[9]
        }
        if(classId === 80 || classId === 81 || classId === 82) {
            return rewardsArr[10]
        }
        if(classId === 64 || classId === 66) {
            return rewardsArr[11]
        }
        if(classId === 48 || classId === 50) {
            return rewardsArr[12]
        }
        if(classId === 32 || classId === 33 || classId === 34) {
            return rewardsArr[13]
        }
    
        return null
    }
}

module.exports = getClassReward
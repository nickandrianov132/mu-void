    function prependZero(time){
        let clockTime = time < 10 ? "0".concat(time) : time
        return clockTime
    }

    /// Opening Countdown:
export function openingCountdown(openDateStr) {
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
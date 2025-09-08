    function logTime(time){
        console.clear()
        console.log(time)
    }
    function prependZero(time){
        let clockTime = time < 10 ? "0".concat(time) : time
        return clockTime
    }
    function normalMinutes(seconds){
        const minutes = Math.floor(seconds / 60) 
        // return prependZero(minutes % 60)
        return minutes % 60
    }
    function normalSeconds(seconds){
        // return prependZero(seconds % 60)
        return seconds % 60
    }
    function normalHours(seconds){
        const hours = Math.floor(seconds / 60 / 60)
        // return prependZero(hours % 60)
        return hours % 24
    }
    export  function getTime(eventOffset, eventDelay, d){
            // const d = new Date()
            let bcStartIn;
        const currTime = {
            total: (((d.getUTCHours()*60*60) + ((d.getUTCMinutes())*60) + d.getUTCSeconds()) + eventDelay) % eventOffset 
        }
        bcStartIn = Math.abs(eventOffset - currTime.total)

        // console.log(d);
        // console.log(d.getUTCHours());
        // console.log(currTime.total);        
        // console.log(bcStartIn);
        // logTime(`${normalHours(bcStartIn)}:${normalMinutes(bcStartIn)}:${normalSeconds(bcStartIn)}`)
        return `${normalHours(bcStartIn)}h ${normalMinutes(bcStartIn)}m ${normalSeconds(bcStartIn)}s`
    }


    export function utcDateTime() {
        const d = new Date()
        const utcDateTime = {
            hours: d.getUTCDate(),
            minutes: d.getUTCMinutes(),
            seconds: d.getUTCSeconds(),
        } 
        console.log(utcDateTime);
    }

/// Server Clock Time:
export const currentDate = (timeOffset) => {
  const localTime = new Date()
  // console.log(localTime);
  const realUTCTime = new Date(Date.parse(localTime) - timeOffset)
  // console.log(realUTCTime)
  return realUTCTime
};
const time = (d) => ({
  hours: d.getHours(),
  minutes: d.getMinutes(),
  seconds: d.getSeconds()
})

const toTwelveHours = (t) => {
  return (
    t.hours > 12 ? {
      ...t,
      hours: t.hours - 12,
      ampm: "PM"
    } 
      :
    {
      ...t,
      ampm: "AM"
    }
  )
}

const appendZeroToHours = (t) => {
  return (t.hours < 10 ? {
    ...t,
    hours: `0${t.hours}`
  } : 
    t
)
}
const appendZeroToMinutes = (t) => {
  return (t.minutes < 10 ? ({
    ...t,
    minutes: `0${t.minutes}`
  }) : 
    t
  )
}
const appendZeroToSeconds = (t) => {
  return (t.seconds < 10 ? ({
    ...t,
    seconds: `0${t.seconds}`
  }) : 
    t
)
}

const timetoString = (t) => {
  return `${t.hours}:${t.minutes}:${t.seconds} ${t.ampm}`
}
const loging = (message) => console.log(message);
const logClear = () => console.clear();

const compose = (...fns) => arg => fns.reduce((arg, fn) => fn(arg), arg)

export const finalHours = (d) => compose(time, toTwelveHours, appendZeroToHours, appendZeroToMinutes, appendZeroToSeconds, timetoString)(currentDate(d));


export const startTicking = () => setInterval(compose(logClear, finalHours, loging), 1000)
// startTicking();
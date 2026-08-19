import { useEffect, useState } from "react";
import { currentDate, getTime } from "../../../utils/civilTimeFunc";
// import { useFetchServerTimeQuery } from "../../../services/serverTimeApi";

const EventTimerItem = ({event, eventOffset, eventDelay, timeOffset}) => {
    const [time, setTime] = useState('00:00:00')


    useEffect(() => {
        setTime(getTime(eventOffset, eventDelay, currentDate(timeOffset)))
        const eventInterval = setInterval(() => {
            setTime(getTime(eventOffset, eventDelay, currentDate(timeOffset)))
        }, 1000)

        return () => {
            clearInterval(eventInterval)
        }
    }, [eventOffset, eventDelay, timeOffset])


    return (
        <div className="eventTimerItem_container">
            <span className="event_name">{event}</span>
            <span className="event_time">{time}</span>
        </div>
    );
}

export default EventTimerItem;
// const EventTimerItem = ({event, eventOffset, eventDelay}) => {
//     const {data, isSuccess} = useFetchServerTimeQuery()
//     const [time, setTime] = useState('00:00:00')
//     const [offset, setOffset] = useState(0)
//     let localTime;
//     useEffect(() => {
//         localTime = new Date()
//     }, [isSuccess])
//     useEffect(() => {
//         setOffset(timeDifference(data));
//     }, [isSuccess])

//     function timeDifference(servTime) {
//         const serverTime = Date.parse(servTime);
//         const timeOffset = Date.parse(localTime) - serverTime;
//         return timeOffset
//     }

//     // console.log(offset)
//     setInterval(() =>{
//         if(offset){
//             setTime(getTime(eventOffset, eventDelay, currentDate(offset)))
//         }
//     }, 1000);

//     return (
//         <div className="eventTimerItem_container">
//             <span className="event_name">{event}</span>
//             <span className="event_time">{time}</span>
//         </div>
//     );
// }

// export default EventTimerItem;

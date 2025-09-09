import { useEffect, useState } from "react";
import { currentDate, getTime } from "../../../utils/civilTimeFunc";
import { useFetchServerTimeQuery } from "../../../services/serverTimeApi";

const EventTimerItem = ({event, eventOffset, eventDelay}) => {
    const {data, isSuccess} = useFetchServerTimeQuery()
    const [time, setTime] = useState('00:00:00')
    let localTime;
    useEffect(() => {
        localTime = new Date()
    }, [isSuccess])
    let offset;
    useEffect(() => {
        offset = timeDifference(data)
    }, [isSuccess])

    function timeDifference(servTime) {
        const serverTime = Date.parse(servTime)
        const timeOffset = serverTime - Date.parse(localTime)
        return timeOffset
    }

    
    setInterval(() =>{
        if(offset){
            setTime(getTime(eventOffset, eventDelay, currentDate(offset)))
        }
    }, 1000);

    return (
        <div className="eventTimerItem_container">
            <span className="event_name">{event}</span>
            <span className="event_time">{time}</span>
        </div>
    );
}

export default EventTimerItem;

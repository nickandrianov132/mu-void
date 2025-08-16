import { useState } from "react";
import { getTime } from "../../../utils/civilTimeFunc";

const EventTimerItem = ({event, eventOffset, eventDelay}) => {
    const [time, setTime] = useState('00:00:00')
    setTimeout(() =>{
        setTime(getTime(eventOffset, eventDelay))
    }, 1000);

    return (
        <div className="eventTimerItem_container">
            <span className="event_name">{event}</span>
            <span className="event_time">{time}</span>
        </div>
    );
}

export default EventTimerItem;

import { useState } from "react";
import { finalHours } from "../utils/civilTimeFunc";

const ServerTime = () => {
    const [time, setTime] = useState('')
    setInterval(() => {
        setTime(finalHours)
    }, 1000)
    return (
        <div className='serverTime_container'>
            <span>Server Time</span>
            <h3 className="serverTime_h3">{time}</h3>
        </div>
    );
}

export default ServerTime;

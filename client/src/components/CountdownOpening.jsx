import { useEffect, useState } from "react";
import { useFetchServerTimeQuery } from "../services/serverTimeApi";
import { openingCountdown } from "../utils/civilTimeFunc";

const CountdownOpening = () => {
    const {data: serverTime, isSuccess} = useFetchServerTimeQuery()
    const [time, setTime] = useState({days: "00", hours: "00", minutes: "00", seconds: "00"})
    const dateOpening = "2025-11-08 12:00:00:00.000Z"
    let localTime;
    let offset;
    
    useEffect(() => {
        localTime = new Date()
    }, [isSuccess])
    useEffect(() => {
        offset = timeDifference(serverTime)
    }, [isSuccess])
    
    function timeDifference(servTime) {
        const timeOffset = Date.parse(localTime) - Date.parse(servTime)
        return timeOffset
    }

    setInterval(() => {
        if(offset){
            setTime(openingCountdown(offset, dateOpening))
        }
    }, 1000)

    return (
        <div className="countdown_container">
            <div className="countdown_header">Server Opening :</div>
            {isSuccess && 
            <div className="countdown_items_wrapper">
                <div className="countdown_item_wrapper">
                    <div className="countdown_content">{time.days}</div>
                    <div className="countdown_title">Days</div>
                </div>
                <div className="countdown_item_wrapper">
                    <div className="countdown_content">{time.hours}</div>
                    <div className="countdown_title">Hours</div>
                </div>
                <div className="countdown_item_wrapper">
                    <div className="countdown_content">{time.minutes}</div>
                    <div className="countdown_title">Min</div>
                </div>
                <div className="countdown_item_wrapper">
                    <div className="countdown_content">{time.seconds}</div>
                    <div className="countdown_title">Sec</div>
                </div>
            </div>
            }
        </div>
    );
}

export default CountdownOpening;

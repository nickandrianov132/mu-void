import { useEffect, useState } from "react";
import { useFetchServerTimeQuery } from "../services/serverTimeApi";
import { currentDate, getTimeOpening, openingCountdown } from "../utils/civilTimeFunc";

const CountdownOpening = () => {
    const {data: serverTime, isSuccess} = useFetchServerTimeQuery()
    const [time, setTime] = useState({days: 0, hours: 0, minutes: 0, seconds: 0})
    // const [newTime, setNewTime] = useState('')
    const dateOpening = new Date("2025-11-08T12:00")
    // const dateOpeningNew = Date.parse("2025-11-08 12:00:00:00.000Z")
    // const dateOpeningNew = new Date("2025-11-08T12:00")
    // console.log(dateOpening);
    let localTime;
    
    useEffect(() => {
        localTime = new Date()
    }, [isSuccess])

    let offset;
    useEffect(() => {
        if(isSuccess){
            offset = timeDifference(serverTime)
        }
    }, [isSuccess])
    
    function timeDifference(servTime) {
        const sTime = Date.parse(servTime)
        const timeOffset = Date.parse(localTime) - sTime
        // console.log(timeOffset)
        return timeOffset
    }

    setInterval(() => {
        if(offset){
            setTime(openingCountdown(offset, dateOpening))
            // setNewTime(getTimeOpening(dateOpeningNew, currentDate(offset)))
        }
    }, 1000)
    // console.log(dateOpening);
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
            {/* <div className="serv_opening_string">{newTime}</div> */}
        </div>
    );
}

export default CountdownOpening;

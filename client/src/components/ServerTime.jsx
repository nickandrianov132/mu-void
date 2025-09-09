import { useEffect, useState } from "react";
import { finalHours} from "../utils/civilTimeFunc";
import { useFetchServerTimeQuery } from "../services/serverTimeApi";

const ServerTime = () => {
    const {data, isSuccess} = useFetchServerTimeQuery()
    const [time, setTime] = useState('')
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
        console.log(new Date(serverTime));
        const timeOffset = Date.parse(localTime) - serverTime
        return timeOffset
    }

    setInterval(() => {
        if(offset){
            setTime(finalHours(offset))
        }
    }, 1000)
    return (
        <div className='serverTime_container'>
            <span>Server Time</span>
            {/* <h3 className="serverTime_h3">{time}</h3> */}
            <div className="time_grid_container">
                <div className="item_even">{time.slice(0,1)}</div>
                <div className="item_odd">{time.slice(1,2)}</div>
                <div className="item_divide">:</div>
                <div className="item_even">{time.slice(3,4)}</div>
                <div className="item_odd">{time.slice(4,5)}</div>
                <div className="item_divide">:</div>
                <div className="item_even">{time.slice(6,7)}</div>
                <div className="item_odd">{time.slice(7,8)}</div>
                <div className="item_ampm1">{time.slice(9,10)}</div>
                <div className="item_ampm2">{time.slice(10,11)}</div>
            </div>
        </div>
    );
}

export default ServerTime;

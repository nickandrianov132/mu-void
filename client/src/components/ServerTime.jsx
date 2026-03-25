import { useEffect, useState } from "react";
import { finalHours} from "../utils/civilTimeFunc";
import { useFetchServerTimeQuery } from "../services/serverTimeApi";

const ServerTime = () => {
    const {data, isSuccess} = useFetchServerTimeQuery()
    const [time, setTime] = useState('')
    const [offset, setOffset] = useState(0);
    // let localTime;
    // let offset;
    
    // useEffect(() => {
    //     localTime = new Date()
    // }, [isSuccess])
    // useEffect(() => {
    //     offset = timeDifference(data)
    // }, [isSuccess])

    function timeDifference(servTime) {
        const serverTime = Date.parse(servTime)
        const timeOffset = Date.parse(localTime) - serverTime
        // console.log(`servTimerOffset: ${timeOffset}`);
        return timeOffset
    }
    useEffect(() => {
        if (isSuccess && data) {
            const serverTimeMs = Date.parse(data);
            const localTimeMs = Date.now();
            setOffset(localTimeMs - serverTimeMs);
        }
    }, [isSuccess, data]);

    useEffect(() => {
        const tick = () => {
            setTime(finalHours(offset)); 
        };

        const intervalId = setInterval(tick, 1000);
        tick();

        return () => clearInterval(intervalId);
    }, [offset]); 
    // setInterval(() => {
    //     if(offset){
    //         setTime(finalHours(offset))
    //     }
    // }, 1000)
    // console.log(`servTimerOffset: ${offset}`);
    const renderTime = () => {
        return time.split('').map((char, index) => {
            if (char === ':') {
            return <div key={index} className="item_divide">:</div>;
            }

            if (/[a-zA-Z]/.test(char)) {
            const amPmClass = char === 'A' || char === 'P' ? 'item_ampm1' : 'item_ampm2';
            return <div key={index} className={amPmClass}>{char}</div>;
            }

            const digitClass = index % 2 === 0 ? 'item_even' : 'item_odd';
            return <div key={index} className={digitClass}>{char}</div>;
        });
    };
    return (
        <div className='serverTime_container'>
            <span>Server Time</span>
            {/* <h3 className="serverTime_h3">{time}</h3> */}
            <div className="time_grid_container">
                    {renderTime()}
                {/* <div className="item_even">{time.slice(0,1)}</div>
                <div className="item_odd">{time.slice(1,2)}</div>
                <div className="item_divide">:</div>
                <div className="item_even">{time.slice(3,4)}</div>
                <div className="item_odd">{time.slice(4,5)}</div>
                <div className="item_divide">:</div>
                <div className="item_even">{time.slice(6,7)}</div>
                <div className="item_odd">{time.slice(7,8)}</div>
                <div className="item_ampm1">{time.slice(9,10)}</div>
                <div className="item_ampm2">{time.slice(10,11)}</div> */}
            </div>
        </div>
    );
    
}

export default ServerTime;
